var fpath = require("path");
var fs = require("fs");
var net = require("net");
var cp = require("child_process");



var ltSck = null; // Socket to LT
var planckSck = null; // Socket to planck
var planckProc = null;

var connectedLT = false;

var logFile = null;


function pad2(num) {
  return ("00" + num).substr(-2,2);
}
function pad3(num) {
  return ("000" + num).substr(-3,3);
}

function getLogTime() {
  var d = new Date();
  return d.getFullYear() +
    "-" + pad2(d.getMonth() + 1) +
    "-" + pad2(d.getDate()) +
    " " + pad2(d.getHours()) +
    ":" + pad2(d.getMinutes()) +
    ":" + pad2(d.getSeconds()) +
    "." + pad3(d.getMilliseconds());
}

function logToFile(str) {
  try {
    if(logFile) {
      logFile.write(getLogTime() + " - " + str + "\n");
    }
  } catch (e) {}
}



/* Send message back to LT through socket */
function send(msg) { ltSck.write(JSON.stringify(msg) + "\n"); }


function connect(params) {
  logFile = fs.createWriteStream(params.projectPath + "/ltplanck.log");

  ltSck = net.connect(params.port, "localhost");
  ltSck.on("connect", function() {
    connectedLT = true;


    logToFile("connected to " + params.projectPath);

    send({"name":"Planck - " + params.name,
          "type":"planck",
          "client-id": params.cid,
          "dir": params.projectPath,
          "tags": ["planck.client", "tcp.client"],
          "commands":["editor.eval.planck"]});


    startPlanck(params);
    process.stdout.write("connected to planck process");

  });

  ltSck.on("data", function(d) {
    var req = JSON.parse(d.toString());
    handle(req);
  });

  ltSck.on("error", function(d) {
    console.error ("connect error: " + e.stack);
  });
}

function startPlanck(params) {
  // /usr/local/Cellar/planck/HEAD/bin/planck
  var args = params.cp ? ["-c", params.cp] : [];


  planckProc = cp.spawn("planck" , args, {cwd: params.projectPath});
}


function handle(req) {
  var clientId = req[0];
  var cmd = req[1];
  var msg = req[2];

  if(cmd === "editor.eval.planck") {
    handleEval(clientId, msg);
  }

  if(cmd === "client.close") {
    handleClose();
  }
}

function handleClose() {
  if (ltSck) { ltSck.end();}
  if(planckProc) {planckProc.kill(); }

  try {
    if(logFile) {
      logFile.end();
    }
  } catch (e) {
    console.error("Error closing logfile");
  }

  process.exit(0);

}

function handleEval(clientId, msg) {
  planckProc.stderr.removeAllListeners("data");
  planckProc.stdout.removeAllListeners("data");

  planckProc.stdout.on("data", function(d) {
    var res = d.toString().trim();
    if(res.length > 0) {
      send([clientId, "editor.planck.eval.res", {result: res, meta: msg.meta}]);
    }
  });

  planckProc.stdin.write(msg.code + "\n");
  //planckProc.stdin.write(msg.code.replace(/\n/g, "\\\n") + "\n");
}


function parseArgs(args) {
  return {
    projectPath: args[4],
    port: parseInt(args[2]),
    cid: parseInt(args[3]),
    name: args[5],
    cp: args[6]
  }
}

connect(parseArgs(process.argv));

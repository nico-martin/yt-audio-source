const fs = require('fs');
const util = require('util');
const logFile = fs.createWriteStream(__dirname + '/debug.log', { flags: 'a' });
const logStdout = process.stdout;

const log = d => {
  const date = new Date().toString();
  logFile.write(`=============\n${date}\n` + util.format(d) + '\n');
  logStdout.write(util.format(d) + '\n');
};

module.exports = log;

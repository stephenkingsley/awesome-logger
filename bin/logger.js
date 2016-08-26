// config = {
//   filename: filename,
//   mkdir: folder name,
//   hours: hours to change the filename,
//   logger: logger what you want
// }
'use strict';
const fs = require('fs');
const hadToChangeTheFileName = require('./time');

const defaultConfig = {
  filename: 'youForgetIt',
  mkdir: 'youForgetIt',
  hours: 1,
  logger: 'this logger is null, maybe you forget it!'
};

const awesomeLogger = (config) => {
  if (!config.filename) {
    config.filename = defaultConfig.filename;
  }
  if (!config.mkdir) {
    config.mkdir = defaultConfig.mkdir;
  }
  if (!config.hours) {
    config.hours = defaultConfig.hours;
  }
  if (!config.logger) {
    config.logger = defaultConfig.logger;
  }

  const path = __dirname.split('/node_modules')[0];
  fs.stat(`${path}/${config.mkdir}`, (err) => {
    if (err) {
      fs.mkdirSync(`${path}/${config.mkdir}`);
    }
    hadToChangeTheFileName(`${path}/${config.mkdir}`, config);
    const file = `${path}/${config.mkdir}/${config.filename}.log`;
    fs.appendFile(file, `${config.logger}\n`, 'utf8', error => {
      if (error) console.log(error);
      console.log('The logger was appended to file!');
    });
  });
};

module.exports = awesomeLogger;

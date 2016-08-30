'use strict';
const fs = require('fs');

const lastTime = require('../constant/timer');

const hadToChangeTheFileName = (path, config) => {
  const lastRequestTime = lastTime.getLastTime();
  const nowRequestTime = new Date().getTime();
  if (getDateHours(nowRequestTime) !== getDateHours(lastRequestTime)) {
    const oldName = `${path}/${config.filename}.log`;
    const newName = `${path}/${config.filename}_${stringTime(lastTime.getLastTime())}.log`;
    try {
      fs.statSync(`${path}/${config.filename}.log`);
      fs.renameSync(oldName, newName);
      lastTime.setLastTime(nowRequestTime);
      console.log(lastRequestTime, nowRequestTime, '1111');
    } catch (err) {
      console.log('your logger is null!', err);
    }
  }
};

const stringTime = (date) => {
  date = new Date(date);
  const year = date.getFullYear();
  const Month = doubleDigitFormat(date.getMonth() + 1);
  const day = doubleDigitFormat(date.getDate());
  const hours = doubleDigitFormat(date.getHours());
  return `${year}${Month}${day}${hours}`;
};

const getDateHours = (date) => {
  date = new Date(date);
  return date.getHours();
};

const doubleDigitFormat = (num) => {
  if (num < 10) {
    num = `0${num}`;
  }
  return num;
};

module.exports = hadToChangeTheFileName;

'use strict';

let lastTime = new Date().getTime();

const getLastTime = () => lastTime;

const setLastTime = (newTime) => { lastTime = newTime; };

module.exports = { getLastTime: getLastTime, setLastTime: setLastTime };

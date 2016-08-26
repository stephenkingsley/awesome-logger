# logger
this is nodejs logger component. It's faster, light and easy to use!

## how to ues

first

    npm i --save awesome-logger

and your project

```javascript
const awesomeLogger = require('awesome-log');

awesomeLogger({
  firename: 'myLogger',
  mkdir: 'youForgetIt',
  logger: 'this logger is null, maybe you forget it!'
});
```

## feature

this component will create file by hours.

for example, now is 18:01. if a user request your app, this component will create a `myLogger.log` file. and then 19:00 also had a user request you app, this component will modify `myLogger.log` become `myLogger_2016082618.log`, and create a new `myLogger.log` file.

and next version, I will provide a parameter to custom time that modify the old logger file and create a new file.

#!/usr/bin/env node
var fs = require('fs');
var ProgressBar = require('progress');
var co = require('co');
var prompt = require('co-prompt');
var program = require('commander');
const axios = require('axios');
const ora = require('ora');
const chalk = require('chalk');
const figlet = require('figlet');

 program
  .arguments('<data>')
  // .option('-u, --username <username>', 'The user to authenticate as')
  // .option('-p, --password <password>', 'The user\'s password')
  .action(function(data) {
    co(function *() {
        console.log(chalk.green.underline.bold("username is poppy / password is poppy"));
       var username = yield prompt('username: ');
       var password = yield prompt.password('password: ');
       if (username == "poppy" && password == "poppy") {
         data = data.toLowerCase();

         const getPwns = async () => {
           try {
             return await axios.get('http://api.openweathermap.org/data/2.5/forecast?q=' + data + '&units=metric&APPID=0b38ff1f9a3b7d41f3c382d42d099d03')

           } catch (error) {
             console.error(chalk.red("Invalid city name. Try again."));
             process.exit();
           }
         }

         const countPwns = async () => {
           const pwns = await getPwns()
           const spinner = ora().start();

           setTimeout(() => {
               spinner.color = 'yellow';
               spinner.text = 'Loading rainbows';
           }, 10);
           if (pwns.data.message) {

             console.log(chalk.red.underline.bold('You chose : '));
             console.log(figlet.textSync(data, {
                 font: 'Ghost',
                 horizontalLayout: 'default',
                 verticalLayout: 'default'
             }));
             console.log(chalk.green.underline.bold(pwns.data.list[0].dt_txt.slice(0,10)));
             console.log(chalk.green.underline.bold(pwns.data.list[0].dt_txt.slice(11,19)));
             console.log(chalk.green.underline.bold('Here are some information about the weather in ' + pwns.data.city.name + ' :'));
             console.log(chalk.bgRgb(15, 100, 204).inverse('Average temperature is ' + pwns.data.list[0].main.temp + ' C°'));
             console.log(chalk.underline.bgBlue('The lowest temperature possible is ' + pwns.data.list[0].main.temp_min + ' C°'));
             console.log(chalk.underline.bgRed('The highest temperature possible is ' + pwns.data.list[0].main.temp_max + ' C°'));
             console.log(chalk.hex('#00eeff')('Wind speed is ' + pwns.data.list[0].wind.speed + ' m/s'));
             console.log(chalk.bgHex('#c300ff').inverse('Forecast : ' + pwns.data.list[0].weather[0].description));
             process.exit();
           } else {
               console.error(chalk.red("OpenWeatherMap API could not be reached."));
               process.exit();
             }
           }
         countPwns()
       } else {
         console.error("ERROR AUTHENTICATING.");
       }
    });
  })
  .parse(process.argv);

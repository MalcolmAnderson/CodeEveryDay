String.prototype.format = function () {
    var args = arguments;
    return this.replace(/{(\d+)}/g, function (match, number) {
        return typeof args[number] != 'undefined' ? args[number] : match;
    });
};
String.prototype.paddingLeft = function (paddingValue) {
    return String(paddingValue + this).slice(-paddingValue.length);
};


const request = require('request');
const argv = require('yargs').argv;


let apiKey = 'a23e4b105b48c4478ed7f30ac657b3a6';
let city = argv.c || 'pullman';
// let city = 'pullman';
// let url = `http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=${apiKey}`;
// let city = 'portland';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

let weather = "";
console.log('Showing weather' + weather);


request(url, function (err, response, body) {
    if (err) {
        console.log('error: ', error);
    } else {
        let weather = JSON.parse(body);
        doSomethingWithEpocDate(weather.sys.sunrise);

        let message = `Today's Pullman Sunrise & Sunset: ${weather.sys.sunrise} - ${weather.sys.sunset}`;
        console.log('Sunrise: ' + weather.sys.sunrise);
        console.log('Weather.main: ' + weather.main);
        console.log('body: ', body);
        console.log(message);
    }
});



var utcSeconds = 1575072241;
var d = new Date(utcSeconds * 1000);
d = toLocalDate(d);
console.log(getFormattedTime(d));

function doSomethingWithEpocDate(dateAsEpocString){
    let dt = Date(dateAsEpocString);
    console.log(dt);
}


function toLocalDate(inDate) {
    var date = new Date();
    var numberOfMillisecondsInAnMinute = 60000
    var numberOfMinutesOffsetFromUtc = inDate.getTimezoneOffset();
    var UtcOffsetInMilliseconds = numberOfMillisecondsInAnMinute * numberOfMinutesOffsetFromUtc;
    date.setTime(inDate.valueOf() - UtcOffsetInMilliseconds);
    return date;
}


function getFormattedTime(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();

    hours = hours.toString().paddingLeft("00");
    minutes = minutes.toString().paddingLeft("00");

    return "{0}:{1}".format(hours, minutes);
};



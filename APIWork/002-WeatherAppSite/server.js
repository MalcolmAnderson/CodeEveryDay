String.prototype.format = function () {
    var args = arguments;
    return this.replace(/{(\d+)}/g, function (match, number) {
        return typeof args[number] != 'undefined' ? args[number] : match;
    });
};
String.prototype.paddingLeft = function (paddingValue) {
    return String(paddingValue + this).slice(-paddingValue.length);
};


const express = require('express')
const request = require('request');
const bodyParser = require('body-parser');
const app = express()

let apiKey = 'a23e4b105b48c4478ed7f30ac657b3a6';

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    res.render('index')
})



app.post('/', function (req, res) {
    let city = req.body.city;
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`
    request(url, function (err, response, body) {
        console.log(req.body.city);

        if (err) {
            console.log('Error: ' + err);
            res.render('index', { weather: null, error: '[1001] Error, please try again' });
        } else {
            console.log('[1000] Success: ' + body);
            let weather = JSON.parse(body)
            if (weather.main == undefined) {
                res.render('index', { weather: null, error: '[1002] Error, please try again' });
            } else {
                console.log('1001 entered else clause because weather.main != undefined')
                var sunset = new Date(weather.sys.sunset * 1000);
                //sunset = toLocalDate(sunset);
                var sunsetString = getFormattedTime(sunset);
                var sunrise = new Date(weather.sys.sunrise * 1000);
                //sunrise = toLocalDate(sunrise);
                var sunriseString = getFormattedTime(sunrise);
                let weatherText = `It's ${weather.main.temp} degrees in ${weather.name}!`;
                let weatherText2 = `Sunrise: ${sunriseString} - Sunset : ${sunsetString}`
                res.render('index', { weather: weatherText, weather2: weatherText2, error: null });
            }
        }
    });
});
// app.post('/', function (req, res) {
//     res.render('index');
//     console.log(req.body.city);
// });

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});



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

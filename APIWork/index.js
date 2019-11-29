const request = require('request');


let apiKey = 'a23e4b105b48c4478ed7f30ac657b3a6';
//let city = 'pullman';
// let url = `http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=${apiKey}`;
let city = 'portland';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

request(url, function(err, response, body){
    if(err){
        console.log('error: ', error);
    } else {
        console.log('body: ', body);
    }
});
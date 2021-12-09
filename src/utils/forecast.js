const request = require ("request")



const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=0f45b6412ead0d104a45137e6aed5f9f&query=' + longitude + ',' + latitude +  ''


    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather services!', undefined)
        } else if (body.error) {
            callback('Unable to find location. Try another search!', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currentley ' + body.current.temperature + ' degress out. It feels like ' + body.current.feelslike + ' degress out. And the humidity is over ' + body.current.humidity + '%.')
        }
    })

}

module.exports = forecast
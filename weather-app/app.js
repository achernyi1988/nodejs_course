const { log, log_err, log_warn } = require("../utils/logs")
const { geocode, getWeather } = require("./api/api")


address = process.argv[2]

if(!address){
   log_err("Please, provide an address!")
}else{
   geocode(address, (err, {latitude, longitude} = {} ) => {
      if (err) {
         log_err(err)
      }else{
         getWeather(latitude, longitude, (err, weatherData) => {
            if (err) {
               log_err(err)
            }else{
               log(weatherData)
            }
         })
      }
   
   })
}

 
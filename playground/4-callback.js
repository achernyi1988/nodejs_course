// const { setTimeout } = require("timers");

const { log, log_err, log_warn } = require("../utils/logs")


// setTimeout(() => {
//    log("2 seconds are up")
// }, 2000);


// const name = ["Alex", "Tom", "Jen"]

// const shortNames = name.filter((name) => {
//    return name.length <= 3
// })

// const geocode = (address, callback) => {
//    setTimeout(() => {
//       const data = {
//          latitude: 0,
//          longitude: 0
//       }
//       callback(data)
//    }, 2000);

// }

// geocode("Odessa", (data) =>{
//    log(data)
// })


const add = (a, b, callback) => {
   setTimeout(() => {

      callback(a + b)
   }, 2000);
}


add(1, 4, (sum) => log(sum))
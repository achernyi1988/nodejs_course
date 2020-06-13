const { log, log_err, log_warn } = require("../utils/logs")

const greater = (name="Alex", {label, stock} = {}) => {
   log("hello " + stock)
}

greater("Tom")
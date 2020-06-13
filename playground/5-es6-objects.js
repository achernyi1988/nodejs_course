const { log, log_err, log_warn } = require("../utils/logs")

//Object property shorthand 

const name ="Alex"
const userAge = 27

const user = {
   name,
   age:userAge
}

//log(user)
//--------------------------------------------------------------------

//Object destruction

const product = {
   label:"Red notebook",
   price:3,
   stock:201,
   salePrice:undefined
}

const {label, price, notExistDefault = 5} = product

log(label, price,notExistDefault )
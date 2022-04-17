var o = require("./message_object.js")

console.log(o.message)
o.printMessage("haha")


var msg = require("./message_literal.js")
console.log(msg)


console.log(require("./direct_literal.js")("df"))
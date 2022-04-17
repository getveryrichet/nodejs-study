var msg = require("./message_literal.js")
console.log(msg)


var msg2 = require("./message_object.js")

console.log("obj", msg2)
msg2.func("imported")

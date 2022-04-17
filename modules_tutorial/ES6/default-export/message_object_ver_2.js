const obj = {};

obj.name = "hah";
obj.func = function(msg) {
    console.log("printing in module", msg)
};

export default obj;
const mongoose = require("mongoose");

const connect =() => {
    mongoose.connect("mongodb+srv://test1:sparta@cluster0.cmhzn.mongodb.net/cluster0?retryWrites=true&w=majority", { ignoreUndefined : true }).catch((err) => {
        console.error(err);
    });
};


module.exports = connect;
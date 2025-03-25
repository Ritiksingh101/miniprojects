const mongoose = require("mongoose")

const MineSchema = mongoose.Schema({
    
   amount: Number

    

    })

module.exports = mongoose.model("Mine", MineSchema);
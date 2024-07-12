const mongoose = require("mongoose")

const KbcSchema = mongoose.Schema({
    
   Question:String,
   OptionA: String,
   OptionB: String,
   OptionC: String,
   OptionD: String,

    

    })

module.exports = mongoose.model("Kbc", KbcSchema);
const mongoose = require("mongoose")

const TodoSchema = mongoose.Schema({
    
   task: String

    

    })

module.exports = mongoose.model("Todo", TodoSchema);
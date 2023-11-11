const {default: mongoose, Schema} = require("mongoose");

//복지기관 스키마
const welfareSchema =  mongoose.Schema({
    name: {
        type: String,
        maxLength: 30
    },
    location: {
        type: String
    },
    homepage: {
        type: String
    }
})


const Welfare = mongoose.model("Welfare", welfareSchema);

module.exports = Welfare;
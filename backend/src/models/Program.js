const {default: mongoose, Schema} = require("mongoose");
const Welfare = require("./Welfare_fac");

//복지기관 스키마
const programSchema =  mongoose.Schema({
    welfare_fac: {
        type: Schema.Types.ObjectId,
        //기관 참조
        ref: "Welfare"
    },
    name: {
        type: String,
        maxLength: 30
    },
    time: {
        //시작시간
        type: String
    },
    duration: {
        type: Number
    },
    //요일
    day: {
        type: String
    },
    //위치
    place: {
        type: String
    }
})


const Program = mongoose.model("Program", programSchema);

module.exports = Program;
const {default: mongoose, Schema} = require("mongoose");

//복지기관 스키마
const WelfareSchema =  mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxLength: 30
    },
    location: {
        type: { 
            type: String, 
            enum: ['Point'] 
        },
        coordinates: { 
            //[경도, 위도]
            type: [Number]
        }
    },
    homepage: {
        type: String
    }
})

WelfareSchema.index({ location: '2dsphere' }); 
const Welfare = mongoose.model("Welfare", WelfareSchema);

module.exports = Welfare;
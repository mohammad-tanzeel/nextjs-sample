const { mongoose } = require("mongoose")

const userSchemaRule = {
    email: {
        type: String,
        require:true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    isDeleted: {
        type: Boolean,
        required: true,
        default: false
    }
    
}

const userSchema = mongoose.Schema(userSchemaRule, {timestamps:true});

module.exports = {
    userSchemaRule,
    userSchema
}
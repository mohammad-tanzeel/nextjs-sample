const { default: mongoose } = require("mongoose");
const { userSchema } = require("./user.schema");

module.exports = {

    userModel: mongoose.model('user', userSchema)
}
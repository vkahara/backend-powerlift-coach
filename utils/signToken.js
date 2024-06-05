const jwt = require("jsonwebtoken")

const signToken = (token) => {
    return jwt.sign(token, process.env.JWT_SECRET)
}
module.exports = signToken
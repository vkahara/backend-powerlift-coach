const argon2 = require("argon2")

const verifyPassword = async (hash, password) => {
    return await argon2.verify(hash, password)
}

module.exports = verifyPassword
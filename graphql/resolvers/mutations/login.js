const User = require("../../../models/User")
import { signToken, verifyPassword } from "../../../utils"

export const login = async (parent, args, context) => {
    const {password, username } = args.input
    const result = await User.findOne({username: username})
    const passwordIsValid = await verifyPassword(result.password, password)

    if (!passwordIsValid) {
        return "Invalid password"
    }

    return {
        id: result.id,
        username: result.username,
        token: signToken({userId: result.id})
    }
}
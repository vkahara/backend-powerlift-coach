import { signToken, hashPassword } from "../../../utils";
const { v4: uuidv4 } = require("uuid");
const User = require("../../../models/User")

export const register = async (parent, args, context) => {
    const { password, ...rest} = args.input
    const hashedPassword = await hashPassword(password)
    const newUser = new User({
        id: uuidv4(),
        username: args.username,
        password: hashPassword,
        squatMax: args.squatMax,
        benchMax: args.benchMax,
        deadliftMax: args.deadliftMax
    })
    newUser.save()
    return {
        id: newUser.id,
        username: newUser.username,
        password: newUser.password,
        token: signToken({ userId: newUser.id})
    }
}
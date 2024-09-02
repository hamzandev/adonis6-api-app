import User from "#models/user";
import { loginUserValidator, registerUserValidator } from "#validators/auth";
import { HttpContext } from "@adonisjs/core/http";

export default class AuthService {
  static async login({ request }: HttpContext) {
    const { email, password } = await request.validateUsing(loginUserValidator)
    const user = await User.verifyCredentials(email, password)

    // setiap kali login, mmebuat access token baru
    return User.accessTokens.create(user)
  }

  static async register({ request }: HttpContext) {
    const data = await request.validateUsing(registerUserValidator)
    const createdUser = await User.create(data)

    return User.accessTokens.create(createdUser)
  }

  static async logout({ auth }: HttpContext) {
    const user = auth.user!
    await User.accessTokens.delete(user, user.currentAccessToken.identifier)
    return { message: 'success' }
  }

  static async me({ auth }: HttpContext) {
    await auth.check()
    return {
      message: 'success profile',
      user: auth.user
    }
  }
}
import AuthService from '#services/auth_service'
import type { HttpContext } from '@adonisjs/core/http'

export default class AuthController {

  async login(ctx: HttpContext) {
    return AuthService.login(ctx)
  }

  async register(ctx: HttpContext) {
    return AuthService.register(ctx)
  }

  async me(ctx: HttpContext) {
    return AuthService.me(ctx)
  }

  async logout(ctx: HttpContext) {
    return AuthService.logout(ctx)
  }

}
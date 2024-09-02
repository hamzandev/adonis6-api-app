import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'

export default class ProductCommentsMiddleware {
  async handle(_: HttpContext, next: NextFn) {
    /**
     * Middleware logic goes here (before the next call)
     */
    // console.log(ctx)
    console.info('Hello from Product-Comments Middleware ✨')

    /**
     * Call next method in the pipeline and return its output
     */
    const output = await next()
    return output
  }
}

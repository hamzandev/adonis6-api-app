import ProductService from '#services/product_service'
import { createProductValidator, updateProductValidator } from '#validators/product'
import type { HttpContext } from '@adonisjs/core/http'

export default class ProductsController {
  async index(ctx: HttpContext) {
    return ProductService.getAllProducts(ctx)
  }

  async store({ request }: HttpContext) {
    const data = await request.validateUsing(createProductValidator)
    return ProductService.createProduct(data)
  }

  async show({ params }: HttpContext) {
    return ProductService.getProductById(params.id)
  }

  async update({ params, request }: HttpContext) {
    const data = await request.validateUsing(updateProductValidator)
    return ProductService.updateProduct(params.id, data)
  }

  async destroy({ params }: HttpContext) {
    return ProductService.deleteProduct(params.id)
  }
}

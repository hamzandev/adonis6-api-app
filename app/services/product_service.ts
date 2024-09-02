import Product from "#models/product"
import { HttpContext } from "@adonisjs/core/http"

export default class ProductService {

  static async getAllProducts({ request }: HttpContext) {
    // console.log(auth.user) // User
    // console.log(auth.authenticatedViaGuard) // 'api'
    // console.log(auth.user?.currentAccessToken) // AccessToken

    const { limit = 5, page = 1, q } = request.qs()
    let products;
    if (q) {
      products = await Product
        .query()
        .where('name', 'like', `%${q}%`)
        .orderBy('created_at', 'desc')
        .paginate(page, limit)
    }
    products = await Product.query().paginate(page, limit)
    return {
      message: 'success get all products',
      data: {
        products
      }
    }
  }

  static async getProductById(id: string) {
    const product = await Product.query().where('id', id)
      .preload('category').firstOrFail()

    return {
      message: 'success',
      data: {
        product
      }
    }
  }

  static async createProduct(product: Partial<Product>) {
    const newProduct = await Product.create(product)
    return {
      message: 'success',
      data: {
        product: newProduct
      }
    }
  }

  static async updateProduct(id: string, data: Partial<Product>) {
    const product = await Product.findOrFail(id)
    product.name = data?.name as string
    product.price = data?.price as number
    product.description = data?.description
    product.categoryId = data?.categoryId
    await product.save()
    return {
      message: 'success',
      data: {
        product
      }
    }
  }

  static async deleteProduct(id: string) {
    const product = await Product.findOrFail(id)
    await product.delete()
    return {
      message: 'success',
      data: {
        product
      }
    }
  }

}
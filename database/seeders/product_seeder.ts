import Product from '#models/product'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {

  randCategoryId() {
    return Math.floor(Math.random() * 5) + 1
  }

  async run() {
    await Product.createMany([
      ...Array(10).fill(null).map((_, i) => ({
        name: `Product ${i + 1}`,
        price: (i + 1) * 10000,
        description: `Product ${i + 1}`,
        categoryId: this.randCategoryId()
      })),
    ])
  }
}
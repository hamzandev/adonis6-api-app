import Category from '#models/category'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {

    await Category.updateOrCreateMany('name', [
      { name: 'Food' },
      { name: 'Accessories' },
      { name: 'Electronic' },
      { name: 'Clothing' },
      { name: 'Book' },
      { name: 'Gadget' },
      { name: 'Furniture' },
      { name: 'Cosmetics' },
    ])
  }
}
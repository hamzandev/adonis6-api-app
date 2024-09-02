import Category from "#models/category";
import { HttpContext } from "@adonisjs/core/http";

export default class CategoryService {
  static async getAllCategories({request}: HttpContext) {
    const {q, page = 1, limit = 5} = request.qs()
    let categories: Category[];
    
    if(q) {
      categories = await Category
        .query()
        .where('name', 'like', `%${q}%`)
        .orderBy('created_at', 'desc')
        .paginate(page, limit)
    }

    categories = await Category.query()
      .orderBy('created_at', 'desc')
      .paginate(page, limit)

    return {
      message: 'success Get all categories',
      data: {
        categories
      }
    }
  }

  static async getById(id: number) {
    const category: Category = await Category.findOrFail(id)

    return {
      message: 'success Get category by id',
      data: {
        category
      }
    }
  }

  static async createCategory(data: Partial<Category>) {
    const created = await Category.create(data as any)

    return {
      message: 'success create new Category',
      data: {
        category: created,
      }
    }
  }

  static async updateCategory(id: number, data: Partial<Category>) {
    const category = await Category.findOrFail(id)
    category.name = data.name as string
    await category.save()

    return {
      message: 'success update Category',
      data: {
        category
      }
    }
  }

  static async deleteCategory(id: number) {
    const category = await Category.findOrFail(id)
    await category.delete()
    return {
      message: 'success delete Category',
      data: {
        category
      }
    }
  }
}
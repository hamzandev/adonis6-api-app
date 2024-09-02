import CategoryService from '#services/category_service'
import { createCategoryValidator, updateCategoryValidator } from '#validators/category'
import type { HttpContext } from '@adonisjs/core/http'

export default class CategoriesController {
  async index(ctx: HttpContext) {
    return CategoryService.getAllCategories(ctx)
  }

  async store({ request }: HttpContext) {
    const data = await request.validateUsing(createCategoryValidator)
    return CategoryService.createCategory(data)
  }

  async show({ params }: HttpContext) {
    return CategoryService.getById(params.id)
  }

  async update({ params, request }: HttpContext) {
    const data = await request.validateUsing(updateCategoryValidator)
    return CategoryService.updateCategory(params.id, data)
  }

  async destroy({ params }: HttpContext) {
    return CategoryService.deleteCategory(params.id)
  }
}
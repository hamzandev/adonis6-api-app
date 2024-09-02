import CommentService from '#services/comment_service'
import type { HttpContext } from '@adonisjs/core/http'

export default class CommentsController {
  index({ params }: HttpContext) {
    const { product_id } = params
    return CommentService.getAllComments(product_id)
  }

  store({ request, params }: HttpContext) {
    const { product_id } = params
    return CommentService.createComment(product_id, request.body())
  }

  show({ params }: HttpContext) {
    const { id, product_id } = params
    return CommentService.getCommentById(product_id, id)
  }

  update({ params, request }: HttpContext) {
    const { id, product_id } = params
    return CommentService.updateComment(product_id, id, request.body())
  }

  destroy({ params }: HttpContext) {
    const { id, product_id } = params
    return CommentService.deleteComment(product_id, id)
  }
}

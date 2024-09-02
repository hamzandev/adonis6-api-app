export default class CommentService {

  static getAllComments(productId: string) {
    return {
      message: 'success',
      data: {
        product_id: productId,
        comments: [],
      }
    }
  }

  static getCommentById(productId: string, id: string) {
    return {
      message: 'success',
      data: {
        comment: {
          id,
          product_id: productId
        }
      }
    }
  }

  static createComment(productId: string, comment: any) {
    return {
      message: 'success',
      data: {
        product_id: productId,
        comment
      }
    }
  }

  static updateComment(productId: string, id: string, comment: any) {
    return {
      message: 'success',
      data: {
        comment: {
          id,
          product_id: productId,
          ...comment
        }
      }
    }
  }

  static deleteComment(productId: string, id: string,) {
    const comment = {
      comment_id: id,
      product_id: productId,
      comment: 'This is a product comment',
    }
    return {
      message: 'success',
      data: {
        comment
      }
    }
  }

}
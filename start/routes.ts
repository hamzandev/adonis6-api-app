
import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'
// lazy import the controller for better boot-up time
const ProductsController = () => import('#controllers/products_controller')
const CommentsController = () => import('#controllers/comments_controller')
const CategoriesController = () => import('#controllers/categories_controller')
const AuthController = () => import('#controllers/auth_controller')

router.get('/', () => {
  return {
    message: 'It\'s works!',
  }
})

router
  .group(function () {
    router
      .resource('products', ProductsController)
      .apiOnly()
      .use('*', middleware.products())
      .where('id', router.matchers.uuid())
      .use('*', middleware.auth())
    // Router with nested resource
    router
      .resource('products.comments', CommentsController)
      .use('*', middleware.productComments())
      .use('*', middleware.auth())
      .apiOnly()
    router.resource('categories', CategoriesController)
      .use('*', middleware.auth())
      .apiOnly()

    // Authentication with token
    router.group(function () {
      router.post('/register', [AuthController, 'register']).as('register')
      router.post('/login', [AuthController, 'login']).as('login')
      router.get('/me', [AuthController, 'me'])
        .use(middleware.auth())
        .as('me')
      router.delete('/logout', [AuthController, 'logout'])
        .use(middleware.auth())
        .as('logout')
    }).prefix('/auth').as('auth')
  })
  .prefix('/api')

'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.group(() => {
  Route.get('memes', 'MemeController.index')
  Route.post('meme', 'MemeController.store')
  Route.get('meme/:id', 'MemeController.show')
  Route.delete('meme/:id', 'MemeController.delete')
  Route.post('comment', 'CommentController.store')
  Route.post('reply', 'ReplyController.store')
  Route.delete('comment/:id', 'CommentController.delete')
  Route.delete('reply/:id', 'ReplyController.delete')
}).prefix('bootcamp')

Route.group(() => {
  Route.post('login', 'UserController.signin')
  Route.post('register', 'UserController.signup')
  Route.post('logout','UserController.logout')
}).prefix('bootcamp/user')


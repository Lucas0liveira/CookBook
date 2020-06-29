const express = require('express')
const routes = express.Router()
const UserController = require('./Controllers/UserController')
const CategoryController = require('./Controllers/CategoryController')
const FolderController = require('./Controllers/FolderController')
const CommentsController = require('./Controllers/CommentsController')
const RecipeController = require('./Controllers/RecipeController')
const InitializeDatabase = require('./Controllers/InitializeDatabase')

//inicia o banco com as categorias
routes.get('/startup', InitializeDatabase.databaseStart)

//lista de rotas reacianoada a loguin e usuários
routes.get('/users', UserController.index)
routes.get('/users/:id', UserController.getUser)
routes.get('/users/follow', UserController.followIndex)
routes.get('/users/nFollowers/:follow_id', UserController.getNFolowers)
routes.get('/users/nFollows/:followed_id', UserController.getNFolowed)
routes.get('/users/followers/:follow_id', UserController.getFollowers)
routes.get('/users/follows/:followed_id', UserController.getFollowed)
routes.post('/singin', UserController.create)
routes.post('/login', UserController.login)
routes.post('/users/follow', UserController.follow)
routes.delete('/users/unfollow/:followed_id', UserController.unfollow)

//lista de rotas para receitas
routes.get('/recipes', RecipeController.index)
routes.get('/recipeByUser/:user_id', RecipeController.indexByUser)
routes.get('/recipes/show/:id', RecipeController.getRecipe)
routes.get('/recipes/:category', RecipeController.filtered)
routes.get('/filter/rating', RecipeController.recipesByStars)
routes.post('/recipes', RecipeController.create)
routes.post('/recipes/edit', RecipeController.edit)
routes.post('/recipes/rating', RecipeController.rating)
routes.delete('/recipes/:id', RecipeController.delete)

//lista de rotas para pastas
routes.get('/folders', FolderController.index)
routes.get('/folders/recipes/:folder_id', FolderController.recipeOfFolder)
routes.get('/folders/:user_id', FolderController.getUsersFolders)
routes.post('/folders/add', FolderController.recipeOnFolder)
routes.post('/folders', FolderController.create)
routes.post('/folders/readLater', FolderController.addToReadLater)
routes.post('/folders/change', FolderController.changeFolder)
routes.delete('/folders/:id', FolderController.delete)
routes.delete('/folders/recipe', FolderController.deleteRecipe)

//lista de rotas para categorias
routes.get('/categories', CategoryController.index)
routes.post('/categories', CategoryController.create)
routes.delete('/categories/:id', CategoryController.delete)

//lista de rotas para comentarios
routes.get('/comments/index', CommentsController.index)
routes.get('/comments/:recipe_id', CommentsController.getComments)
routes.post('/comments', CommentsController.newComment)
routes.delete('/comments', CommentsController.delComment)


module.exports = routes
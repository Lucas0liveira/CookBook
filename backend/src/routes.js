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
routes.post('/singin', UserController.create)
routes.post('/login', UserController.login)
routes.get('/users', UserController.index)

//lista de rotas para categorias
routes.post('/categories', CategoryController.create)
routes.get('/categories', CategoryController.index)
routes.delete('/categories/:id', CategoryController.delete)

//lista de rotas para receitas
routes.post('/recipes', RecipeController.create)
routes.get('/recipes', RecipeController.index)
routes.delete('/recipes/:id', RecipeController.delete)
routes.get('/recipes/:category', RecipeController.filtered)


//lista de rotas para pastas
routes.post('/folders', FolderController.create)
routes.get('/folders', FolderController.index)
routes.delete('/folders/:id', FolderController.delete)
routes.post('/folder/content', FolderController.recipeOnFolder)
routes.get('/recipies/folder', FolderController.recipeOfFolder)

//lista de rotas para comentarios
routes.post('/comments', CommentsController.addComment)
routes.get('/comments/:id', CommentsController.getComments)
routes.post('/folder_content', FolderController.recipeOnFolder)


module.exports = routes
const connection = require('../Database/conection')

module.exports = {
    async create(request, response) {
        const user_id = request.headers.authorization
        const { folder_name } = request.body

        const verifica = await connection('folders').select('*').where({
            user_id: user_id,
            folder_name: folder_name
        }).first()

        if (verifica == null) {
            try {
                const [id] = await connection('folders').insert({
                    folder_name,
                    user_id
                })
                //caso não ocorra nenhum problema será retornado o id da nova pasta
                return response.json({ id })
            } catch (e) {
                return response.json({ erro: "não foi possivel criar a pasta" })
            }
        } else {
            return response.json({ erro: "Pasta com o mesmo nome já existe" })
        }
    },

    //função que retorna todas as pastas do banco
    async index(request, response) {
        const folders = await connection('folders').select('*')
        return response.json(folders)
    },

    //função que deleta uma pasta do banco
    async delete(request, response) {
        //precisa do id da pasta a ser deletada
        const { id } = request.parms

        await connection('folder_content').where('folder_id').del()
        await connection('folders').where('id', id).del()
        return response.status(204).send()
    },

    //função para adicionar uma receita a uma pasta
    async recipeOnFolder(request, response) {
        //necessita do id da pasta a ser adicionada e do id da receita que será adicionada a pasta
        const { folder_id, recipe_id } = request.body

        try {
            //adiciona ao banco de dados a correlação entre a receita e a nova pasta
            const [id] = await connection('folder_content').insert({
                folder_id,
                recipe_id
            })
            //caso não haja problemas é retornado o id da correlação entre a pasta e a receita
            return response.json({ id })
        } catch (err) {
            //caso haja um erro uma mensagem é enviada comunicamdo que não foi possivel adicionar a receia a pasta
            return response.json({ error: 'Não foi possível adicionar a receita na pasta' })
        }
    },

    //função que busca todas as receitas que estão em uma pasta
    async recipeOfFolder(request, response) {
        //necessita do id da pasta
        const { folder_id } = request.body

        // busca no banco pelas receitas em uma pasta
        const recepies = await connection('folder_content')
            .select('recipes.id')
            .where('folder_id', folder_id)
            .join('recipes', 'recipes.id', '=', 'folder_content.recipe_id')

        //retorna uma lista de receitas da pasta
        return response.json(recepies)
    },

    async getUsersFolders(request, response) {
        const { id } = request.parms

        const folders = await connection('folders').select('*').where('user_id', id)
        return response.json(folders)
    },

    async deleteRecipe(request, response) {
        const { folder_id, recipe_id } = request.body

        await connection('folder_content').where({
            folder_id: folder_id,
            recipe_id: recipe_id
        }).del()

        return response.status(204).send()
    },

    async addToReadLater(request, response) {
        const user_id = request.headers.authorization

        const { recipe_id } = request.body

        const f_id = await connection('folders').select('id').where({
            user_id: user_id,
            folder_name: "read later"
        }).first()

        const folder_id = f_id.id

        //adiciona ao banco de dados a correlação entre a receita e a nova pasta
        const [id] = await connection('folder_content').insert({
            folder_id,
            recipe_id
        })
        //caso não haja problemas é retornado o id da correlação entre a pasta e a receita
        return response.json({ id })
    },

    async changeFolder(request, response) {
        const { newFolder_id, folder_id, recipe_id } = request.body

        try {
            await connection('folder_content').where({
                folder_id: folder_id,
                recipe_id: recipe_id
            }).update('folder_id', newFolder_id)
            return response.status(204).send()
        } catch (e) {
            return response.json({ erro: "não foi possivel muder a pasta" })
        }
    }
} 

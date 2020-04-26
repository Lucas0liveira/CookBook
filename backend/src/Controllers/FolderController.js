const connection = require('../Database/conection')

module.exports = {
    async create(request, response) {
        const { name } = request.body
        const user_id = require.headers.authorization

        try {
            // adiciona ao banco uma nova pasta com o nome e o id do usuario
            const [id] = await connection('folders').insert({
                    name,
                    user_id
                })
                //caso não ocorra nenhum problema será retornado o id da nova pasta
            return response.json({ id })
        } catch (err) {
            //caso haja algum erro será enviada uma mensagem de erro
            return response.json({ error: "Não foi possível criar pasta" })
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

        //deleta a pasta com o id que foi passado
        await connection('folders').where('id', id).delete()
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
            return response.json({ error: "Não foi possível adicionar a receita na pasta" })
        }

    },

    //função que busca todas as receitas que estão em uma pasta
    async recipeOfFolder(request, response) {
        //necessita do id da pasta
        const { folder_id } = request.body

        // busca no banco pelas receitas em uma pasta
        const recepies = await connection('folder_content').select('recipe_id').where('folder_id', folder_id)
            .join('recipes', 'id', '=', 'recipe_id')

        //retorna uma lista de receitas da pasta
        return response.json(recepies)
    }
}
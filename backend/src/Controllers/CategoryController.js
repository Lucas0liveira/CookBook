const connection = require('../Database/conection')

module.exports = {

    //função que cria categorias
    async create(request, response) {
        // para a criação de uma categoria é necessario um nome
        const { name } = request.body

        try {
            //nova categoria é adicionada ao banco
            const [id] = await connection('categories').insert({ name })
            //o novo id da categoria é retornado caso a incerção seja bem sucedida
            return response.json({ id })

        } catch (error) {
            //caso não seja possivel a incerção do é retornado uma msg de erro
            return response.json({ erro: "Não foi possível adicionar a categoria" })
        }
    },

    // função index retorna dotas as categorias do banco
    async index(request, response) {
        const categories = await connection('categories').select('*')
        return response.json(categories)
    },

    //função que deleta uma categoria do banco
    async delete(request, response) {
        //a categoria é buscada pelo seu id
        const { id } = request.params

        //remoção da categoria no banco
        await connection('categories').where('id', id).del()
        return response.status(204).send()
    }
}
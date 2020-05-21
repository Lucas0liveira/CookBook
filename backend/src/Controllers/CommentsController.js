const connection = require('../database/conection')
module.exports = {

    async newComment(request, response) {
        const { recipe_id, user_id, comment } = request.body
        try {
            await connection('comment_list').insert({
                recipe_id,
                user_id,
                comment
            })
            return response.status(204).send()
        } catch (e) {
            return response.json({ error: 'não foi possivel realizar essa operação' })
        }
    },

    async getComments(response, request) {
        const { recipe_id } = request.body

        const comments = await connection('comment_list').select('*').where('recipe_id', recipe_id)
        return response.json(comments)
    },

    async delComment(response, request) {
        const { recipe_id, user_id } = request.body

        await connection('comment_list').where({
            recipe_id: recipe_id,
            user_id: user_id
        }).del()

        return response.status(204).send()
    }
}
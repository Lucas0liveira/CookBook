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

    async getComments(request, response) {
        const { recipe_id } = request.params


        const comments = await connection('comment_list').join('users', 'comment_list.user_id', 'users.id')
            .where('comment_list.recipe_id', recipe_id).select('comment_list.comment', 'users.name')
        return response.json(comments)
    },

    async delComment(request, response) {
        const { recipe_id, user_id } = request.body

        await connection('comment_list').where({
            recipe_id: recipe_id,
            user_id: user_id
        }).del()

        return response.status(204).send()
    },

    async index(request, response) {
        const comments = await connection('comment_list').select('*')
        return response.json(comments)
    }
}
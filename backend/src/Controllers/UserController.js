const connection = require('../database/conection')

module.exports = {
    //função que adiciona um nov usuario ao banco
    async create(request, response) {
        //necessita de nome email e senha
        const { name, email, password } = request.body


        try {
            //adiciona o novo usuario ao banco
            await connection('users').insert({
                name,
                email,
                password
            })
        } catch (e) {
            return response.json({ error: 'erro ao criar usuario' })
        }


        //busca id do usuario
        const id = await connection('users').select('id').where({
            email: email,
            password: password
        }).first()

        try {
            //cria a pasta read later para o usuario
            const user_id = id.id
            const folder_name = "Ler Mais Tarde"
            await connection('folders').insert({
                folder_name,
                user_id
            })
        } catch (e) {
            return response.json({ error: 'não foi possivel adicionar a pasta folder para o usuario criado', id })
        }

        //caso não haja problemas é retornado o id no novo usuário
        return response.json(id)
    },

    //função que realia o loguin de um usuario
    async login(request, response) {
        //requer email e senha para o loguin
        const { email, password } = request.body
        //procura pelo par email e senha no banco
        const id = await connection('users').select('id').where({
            email: email,
            password: password
        }).first()

        //caso alguma correlação seja encontrada é devolvido o id do usuario que possiu a exata combinação de email e senha
        if (id != null)
            return response.json(id)
        else
            //caso contrario é enviado uma mensagem informando que o usuario não foi encontrado
            return response.json({ erro: "usuario não encontrado" })
    },

    //retorna todos os usuarios registrdos no banco
    async index(request, response) {
        const usuarios = await connection('users').select('*')
        return response.json(usuarios)
    },

    async followIndex(request, response) {
        const follow_list = await connection('follow_list').select('*')
        return response.json(follow_list)
    },

    async follow(request, response) {
        const { follow_id, followed_id } = request.body
        try {
            await connection('follow_list').insert({
                follow_id,
                followed_id
            })
            return response.status(204).send()
        } catch (e) {
            return response.json({ error: 'não foi possivel realizar essa operação' })
        }
    },

    async getNFolowers(request, response) {
        const { follow_id } = request.params
        const nFollowers = await connection('follow_list').count('id', { as: 'nFollowers' }).where('follow_id', follow_id)
        return response.json(nFollowers)
    },

    async getNFolowed(request, response) {
        const { followed_id } = request.params
        const nFollowers = await connection('follow_list').count('id', { as: 'nFollows' }).where('followed_id', followed_id)
        return response.json(nFollowers)
    },

    async getFollowers(request, response) {
        const { follow_id } = request.params
        const followers_id = await connection('follow_list').select('followed_id').where('follow_id', follow_id)
        followers = []
        for (i = 0; i < followers_id.length; i++) {
            const user = await connection('users').select('*').where('id', followers_id[i].followed_id)
            followers.push(user)
        }
        return response.json(followers)
    },

    async getFollowed(request, response) {
        const { followed_id } = request.params
        const follows_id = await connection('follow_list').select('follow_id').where('followed_id', followed_id)
        follows = []
        for (i = 0; i < follows_id.length; i++) {
            const user = await connection('users').select('*').where('id', follows_id[i].follow_id)
            follows.push(user)
        }
        return response.json(follows)
    },

    async unfollow(request, response) {
        const user_id = request.headers.authorization
        const { followed_id } = request.params

        await connection('follow_list').where({
            follow_id: user_id,
            followed_id: followed_id
        }).del()

        return response.status(204).send()
    },

    async getUser(request, response) {
        const { id } = request.params

        const user = await connection('users').select('*').where('id', id).first()

        if (user != null) {
            return response.json(user)
        }
        return response.json({ error: "usuário não encontrado" })
    }
}
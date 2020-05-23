const connection = require('../Database/conection')

module.exports = {

    //função para criar uma nova receita
    async create(request, response) {
        const { name, description, qtt, msr, ingr, prepare, image, video, category_id, prepTime, prepUnit } = request.body

        try {
            //nova receita é adiciaonada ao banco
            const rating = 1
            const [id] = await connection('recipes').insert({
                name,
                description,
                prepare,
                image,
                video,
                category_id,
                prepTime,
                prepUnit,
                rating
            })
            const recipe_id = id

            for (i = 0; i < ingr.length; i++) {
                const ingredient = ingr[i]
                const measure = msr[i]
                const quantity = qtt[i]

                await connection('ingredients').insert({
                    recipe_id,
                    quantity,
                    measure,
                    ingredient
                })
            }
            return response.json({ id })

        } catch (err) {
            console.log(err)
            return response.json({ err: "Não foi possível adicionar receita" })
        }
    },

    //função que retorna todas as receitas do banco
    async index(request, response) {
        let recipes = await connection('recipes').select('*').orderBy("id", "desc")
        let aux = []
        for (i = 0; i < recipes.length; i++) {
            aux.push([recipes[i], await connection('ingredients').select('quantity', 'measure', 'ingredient').where('recipe_id', recipes[i].id)])
        }
        return response.json(aux)
    },

    async indexOne(request, response) {
        const id = request.params
        let recipes = await connection('recipes').select('*').where('id', id.id)
        let aux = []
        aux.push(recipes)
        aux.push(await connection('ingredients').select('quantity', 'measure', 'ingredient').where('recipe_id', id.id))
        return response.json(aux)
    },

    //função que retorna receitas fintradas por uma caregoria
    async filtered(request, response) {
        const { category } = request.params

        let recipes = await connection('recipes').select('*').orderBy('name').where('category_id', category)
        let aux = []
        for (i = 0; i < recipes.length; i++) {
            aux.push([recipes[i], await connection('ingredients').select('quantity', 'measure', 'ingredient').where('recipe_id', recipes[i].id)])
        }
        return response.json(aux)
    },

    //função que deleta uma receita do banco
    async delete(request, response) {
        const { id } = request.params

        await connection('ingredients').where('recipe_id', id).del()
        await connection('recipes').where('id', id).del()
        return response.status(204).send()
    },

    async edit(request, response) {
        const { id, name, description, prepare, image, video } = request.body

        try {
            await connection('recipe').where('id', id).update({
                name: name,
                description: description,
                prepare: prepare,
                image: image,
                video: video
            })
        } catch (e) {
            return response.json({ erro: 'não foi possível editar a receita' })
        }
        return response.json(id)

    },

    async indexByStars(request, response) {
        let recipes = await connection('recipes').select('*').orderBy("rating")
        let aux = []
        for (i = 0; i < recipes.length; i++) {
            aux.push([recipes[i], await connection('ingredients').select('quantity', 'measure', 'ingredient').where('recipe_id', recipes[i].id)])
        }
        return response.json(aux)
    },

    async rating(request, response) {
        const { id, nStars } = request.body

        let oldRating = await connection('recipes').select('rating').where('id', id)
        oldRating = Object.values(oldRating[0])
        const newRating = Number(oldRating) + Number(nStars)
        console.log(oldRating)
        console.log(newRating)
        try {
            await connection('recipes').where('id', id).update('rating', newRating)
            return response.status(204).send()
        } catch (e) {
            return response.json({ error: 'não foi possivel realizar essa operação' })
        }
    }
}
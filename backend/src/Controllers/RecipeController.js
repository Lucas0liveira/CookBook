const connection = require('../Database/conection')

module.exports = {

    //função para criar uma nova receita
    async create(request, response) {
        const { name, description, qtt, msr, ingr, prepare, prepTime, prepUnit, image, video, category_id, user_id, author } = request.body

        const corte = "https://www.youtube.com/watch?v="
        const videourl = "https://www.youtube.com/embed/" + video.substring(video.indexOf(corte) + corte.length)

        try {
            //nova receita é adiciaonada ao banco
            const rating = 0
            const [id] = await connection('recipes').insert({
                name,
                description,
                prepare,
                prepTime,
                prepUnit,
                image,
                videourl,
                category_id,
                prepTime,
                prepUnit,
                user_id,
                rating,
                author
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
            return response.json({ err: "Não foi possível adicionar receita" })
        }
    },

    //função que retorna todas as receitas do banco
    async index(request, response) {

        let recipes = await connection('recipes').select('*').orderBy('recipes.name')
        let aux = []
        for (i = 0; i < recipes.length; i++) {
            aux.push([recipes[i], await connection('ingredients').select('quantity', 'measure', 'ingredient').where('recipe_id', recipes[i].id)])
        }
        return response.json(aux)
    },

    async indexByUser(request, response) {
        const{ user_id } = request.params
        let recipes = await connection('recipes').select('*').where('user_id', user_id)
        let aux = []
        for (i = 0; i < recipes.length; i++) {
            aux.push([recipes[i], await connection('ingredients').select('quantity', 'measure', 'ingredient').where('recipe_id', recipes[i].id)])
        }
        return response.json(aux)
    },

    async getRecipe(request, response) {
        const { id } = request.params
        let recipes = await connection('recipes')
            .select('*').where('recipes.id', id)
        let aux = []
        aux.push(recipes)
        aux.push(await connection('ingredients').select('quantity', 'measure', 'ingredient').where('recipe_id', id))
        return response.json(aux)
    },

    //função que retorna receitas fintradas por uma caregoria
    async filtered(request, response) {
        const { category } = request.params

        let recipes = await connection('recipes').select('*').orderBy('recipes.name')
            .where('recipes.category_id', category)
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
        const { name, description, qtt, msr, ingr, prepare, prepTime, prepUnit, image, video, category_id, user_id, author } = request.body

        try {
            await connection('recipe').where('id', id).update({
                name: name,
                description: description,
                qtt: qtt,
                msr: msr,
                ingr: ingr,
                prepare: prepare,
                prepTime: prepTime,
                prepUnit: prepUnit,
                image: image,
                video: video,
                category_id: category_id,
                user_id: user_id,
                author: author
            })
        } catch (e) {
            return response.json({ erro: 'não foi possível editar a receita' })
        }
        return response.json(id)

    },

    async recipesByStars(request, response) {
        let recipes = await connection('recipes').select('*').orderBy('recipes.rating', 'desc')
        let aux = []
        for (i = 0; i < recipes.length; i++) {
            aux.push([recipes[i], await connection('ingredients').select('quantity', 'measure', 'ingredient').where('recipe_id', recipes[i].id)])
        }
        return response.json(aux)
    },

    async rating(request, response) {
        const { id, nStars } = request.body
        if (typeof nStars === 'number') {
            let oldRating = await connection('recipes').select('rating').where('id', id)
            oldRating = Object.values(oldRating[0])

            var newRating
            if (oldRating != 0) {
                newRating = (Number(oldRating) + Number(nStars)) / 2
            } else {
                newRating = nStars
            }
            try {
                await connection('recipes').where('id', id).update('rating', newRating)
                return response.status(204).send()
            } catch (e) {
                return response.json({ error: 'não foi possivel realizar essa operação' })
            }
        } else {
            return response.json({ error: 'não foi possivel realizar essa operação' })
        }
    }
}
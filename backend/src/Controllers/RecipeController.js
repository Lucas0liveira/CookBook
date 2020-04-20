const connection = require('../Database/conection')

module.exports = {
    async create(request, response) {
        const { name, description, qtt, msr, ingr, prepare, image, video, category_id } = request.body

        try {
            const [id] = await connection('recipes').insert({
                name,
                description,
                prepare,
                image,
                video,
                category_id
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

    async index(request, response) {

        try {
            let count = await connection('recipes').count('id')
            count = Object.values(count[0])

            let aux = []
            for (i = 1; i <= count; i++) {
                let thisRecipe = await connection('recipes')
                    .select('*')
                    .where('id', i)

                let ingredients = await connection('ingredients')
                    .select('quantity', 'measure', 'ingredient')
                    .where('recipe_id', i)

                aux.push(thisRecipe.concat(ingredients))
            }
            const recipes = aux
            return response.json(recipes)
        } catch (err) {
            return response.json({ err: "Banco vazio" })
        }

    },

    async delete(request, response) {
        const { id } = request.params

        await connection('recipes').where('id', id).delete()
        return response.status(204).send()
    }
}
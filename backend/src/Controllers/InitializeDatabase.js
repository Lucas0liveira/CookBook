const connection = require('../Database/conection')

module.exports = {
    async databaseStart(request, response) {

        var names = ["Asiática", "Brasileira", "Coreana", "Drinks", "Francesa", "Hamburguer", "Indiana", "Italiana",
        "Japonesa", "Low Carb", "Mexicana", "Saladas", "Sem Glúten", "Sopas", "Sobremesas", "Snacks", "Tailandesa", "Vegana",
        "Vegetariana"]

        try {
            names.forEach(async function (name) {
                await connection('categories').insert({
                    name
                })
            })
        } catch (e) {
            return response.json({ error: 'banco já iniciado' })
        }
        return response.status(204).send()
    }

}
const connection = require('../Database/conection')

module.exports = {
    async databaseStart(request, response) {

        var names = ["Asiátia", "Brasileira", "Mexicana", "Outra"]

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
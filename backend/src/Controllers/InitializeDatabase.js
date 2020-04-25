const connection = require('../Database/conection')

module.exports = {
    async databaseStart(request, response) {

        var names = ["Asiátia", "Brasileira", "Mexicana"]

        try {
            names.forEach(async function(name) {
                await connection('categories').insert({
                    name
                })
            })
        } catch (e) {
            return response.json({ error: 'banco já iniciado' })
        }
        return response.json({ OK: true })
    }

}
const characterService = require('../domain/services/characters.services')

module.exports = (app, opts) =>{
    app.get('/characters', async (req, res) =>{
        const characters = await characterService.listName()
        res.json(characters)
    })

    app.get('/dead-characters', async (req, res) => {
        const characters = await characterService.findDeadCharacters()
        res.json(characters)
    })
}

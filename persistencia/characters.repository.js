const charactersApi = require('./api/characters.api')

const listCharacters = async () => {
    return await charactersApi.listCharacters()
}



module.exports = {
    listCharacters
}
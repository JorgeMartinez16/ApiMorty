const charactersRepository = require('../../persistencia/characters.repository')

const listName = async () => {
    const characters = await charactersRepository.listCharacters()
    return characters.map(character => character.name)
}

const find = async (word) => {
    const characters = await listName()
    return characters.filter(character => character.includes(word))
}

const findDeadCharacters = async () => {
    const characters = await charactersRepository.listCharacters()
    return characters.filter(character => character.status.includes('Dead'))
}


module.exports= {listName, findDeadCharacters}
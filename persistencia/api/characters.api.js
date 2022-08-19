const axios = require('axios')

const listCharacters = async () => {
    const response = await axios('https://rickandmortyapi.com/api/character')
    return response.data.results
}

/* const fullCharacters= async () =>{
    const 
} */

// exportando metodos y variables 
module.exports = {
    listCharacters
}
const { default: axios } = require("axios")

axios.get('https://random-words-api.vercel.app/word')
    .then((data, res)=>{
        console.log(data, res)
    })
    .catch((error)=>{
        console.log(error)
    })



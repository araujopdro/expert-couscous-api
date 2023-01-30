const asyncHandler = require('express-async-handler')

const Character = require('./models/characterModel')

// get all characters
// api/characters
const getCharacters = asyncHandler(async (req, res) => {
    const characters = await Character.find()

    res.status(200).json(characters);
})

// create character
// api/characters/:id
const createCharacter = asyncHandler(async (req, res) => {
    if(!req.body){
        res.status(400)
        throw new Error('Erro seu troxa')
    }
    
    const character = await Character.create(req.body)

    res.status(200).json(character);
})

// update character
// api/characters/:id
const updateCharacter = asyncHandler(async (req, res) => {
    const character = await Character.findById(req.params.id)
    if(!character){
        res.status(400)
        throw new Error('Char n existe')
    }

    const updatedChar = await Character.findByIdAndUpdate(req.params.id, req.body, {new: true})

    res.status(200).json(updatedChar);
})

// delete character
// api/characters/:id
const deleteCharacter = asyncHandler(async (req, res) => {
    const character = await Character.findById(req.params.id)
    if(!character){
        res.status(400)
        throw new Error('Char n existe')
    }else{
        
    }
    
    await character.remove()

    res.status(200).json({ id:req.params.id });
})

module.exports = { getCharacters, createCharacter, updateCharacter, deleteCharacter, }
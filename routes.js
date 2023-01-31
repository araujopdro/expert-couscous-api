const express = require('express')
const cors = require('cors')

const router = express.Router()
router.use(cors())
console.log("router cors")
const { getCharacters, createCharacter, updateCharacter, deleteCharacter } = require('./controller.js');

router.route('/').get(getCharacters).post(createCharacter)
router.route('/:id').put(updateCharacter).delete(deleteCharacter)

module.exports = router
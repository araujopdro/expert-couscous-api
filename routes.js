const express = require('express')
const router = express.Router()
const { getCharacters, createCharacter, updateCharacter, deleteCharacter } = require('./controller.js');

router.route('/').get(getCharacters).post(createCharacter)
router.route('/:id').put(updateCharacter).delete(deleteCharacter)

module.exports = router
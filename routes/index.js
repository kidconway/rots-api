const { Router } = require('express')

const characters = require('./characters')
const cities = require('./cities')
const resides = require('./resides')

const router = Router()

router.use('/characters', characters)
router.use('/cities', cities)
router.use('/resides', resides)

module.exports = router

const { Router } = require('express')
const pool = require('../db')
const router = Router()


router.get('/:city', (req, res, next) => {
  const { city } = req.params
  pool.query('SELECT * FROM resides WHERE LOWER(cityName) = LOWER($1)', [ city ], (err, query) => {
    if(err) return next(err)
    console.log(query.rows)
    res.json(query.rows)
  })
})

module.exports = router

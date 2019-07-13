const { Router } = require('express')
const pool = require('../db')



const router = Router()


// Get all cities
router.get('/', (req, res, next) => {
  pool.query('SELECT * FROM cities ORDER BY id ASC', (err, response) => {
    if(err) return next(err)

    res.json(response.rows)
  })
})

// Get one city
router.get('/:id', (req, res) => {
  const { id } = req.params
  pool.query('SELECT * FROM cities WHERE id=($1)', [id], (err, response) => {
    if (err) return next(err)
    console.log(`City found`)
    res.json(response.rows)
  })
})

// Add new city
router.post('/', (req, res, next) => {
  const { name, location } = req.body
  pool.query(
    'INSERT INTO cities(name, location) VALUES($1, $2)',
    [name, location],
    (err, city) => {
      if (err) return next(err)
      console.log(`City added: ${city.name}`)
      res.redirect('/cities')
    })
})

// Update a city
router.put('/:id', (req, res, next) => {
  const { id } = req.params
  const keys = ["name", "location"]
  const fields_to_update = []

  keys.forEach(key => {
    if( req.body[key] ) fields_to_update.push(key)
  })

  fields_to_update.forEach((entry, idx) => {
    pool.query(
      `UPDATE cities SET ${entry}=($1) WHERE id=($2)`,
      [req.body[entry], id],
      (err, city) => {
        if (err) return next(err)
        if (idx === fields_to_update.length  - 1) {
          res.redirect('/cities')
          console.log(`City updated`)
        }
    })
  })
})

module.exports = router

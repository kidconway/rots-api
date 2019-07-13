const { Router } = require('express')
const pool = require('../db')



const router = Router()


// Get all characters
router.get('/', (req, res, next) => {
  pool.query('SELECT * FROM characters ORDER BY id ASC', (err, response) => {
    if(err) return next(err)

    res.json(response.rows)
  })
})

// Get one character
router.get('/:id', (req, res) => {
  const { id } = req.params
  pool.query('SELECT * FROM characters WHERE id = $1', [id], (err, query) => {
    if (err) return next(err)
    console.log(`Character found: ${ query.rows.name }`)
    res.json(query.rows)
  })
})

// Add new character
router.post('/', (req, res, next) => {
  const { name, personality, race, level, classType } = req.body
  pool.query(
    'INSERT INTO characters(name, personality, race, level, classtype) VALUES($1, $2, $3, $4, $5)',
    [name, personality, race, level, classType],
    (err, character) => {
      if (err) return next(err)
      console.log('Character Added')
      res.redirect('/characters')
    }
  );
})

router.put('/:id', (req, res, next) => {
  const { id } = req.params
  const keys = ["name", "personality", "race", "level", "classType" ]

  const fields_to_update = []

  keys.forEach(key => {
    if( req.body[key] ) fields_to_update.push(key)
  })

  fields_to_update.forEach((entry, idx) => {
    pool.query(
      `UPDATE characters SET ${entry}=($1) WHERE id=($2)`,
      [req.body[entry], id],
      (err, character) => {
        if (err) return next(err)
        if (idx === fields.length  - 1) {
          res.redirect('/characters')
          console.log('Character Updated')
        }
      }
    )
  })
})

router.delete('/:id', (req, res, next) => {
  const { id } = req.params
  pool.query('DELETE FROM characters WHERE id=($1)', [id], (err, response) => {
    if (err) return next(err)
    console.log('Character Deleted')
  })
})


module.exports = router

const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.post('/', (req, res) => {

  // this query text gets genre information for the one id sent to the database
  const query = `SELECT mg.movie_id, mg.genre_id, g.name FROM movies_genres as mg
  JOIN genres as g ON g.id = mg.genre_id
  WHERE mg.movie_id=$1;`;

  pool.query(query, [req.body.id])
    .then(result => {
      // console.log('*******************', result.rows, '*******************');
      res.send(result.rows);

    })
    .catch(err => {
      console.log('ERROR: Get all movies', err);
      res.sendStatus(500);
    })

});

router.get('/', (req, res) => {

  const query = `SELECT * FROM genres;`;

  pool.query(query)
  .then(result => {
    // console.log('*******************', result.rows, '*******************');
    res.send(result.rows);

  })
  .catch(err => {
    console.log('ERROR: Get all movies', err);
    res.sendStatus(500);
  })



});

module.exports = router;
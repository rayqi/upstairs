const router = require('express').Router()
const { Drinks } = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
    Drinks.findAll()
        .then(allDrinks => res.send(allDrinks))
        .catch(next)
})
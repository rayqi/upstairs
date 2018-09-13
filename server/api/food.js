const router = require('express').Router()
const { Food } = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
    Food.findAll({
        include: { all: true }
    })
        .then(allFood => res.json(allFood))
        .catch(next)
})

// router.get('/', async = () => {
//     try {
//         const food = await Food.findAll()
//         res.send(food)
//     }
//     catch (err) {
//         console.error(err)
//     }
// })

router.get('/:type', (req, res, next) => {
    Food.findAll({
        where: {
            type: req.params.type
        },
        include: { all: true }
    })
        .then(filteredFood => res.json(filteredFood))
        .catch(next)
})
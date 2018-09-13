const Sequelize = require('sequelize')
const db = require('../db')

const Food = db.define('food', {
    name: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },
    type: {
        type: Sequelize.ENUM('appetizer', 'entree', 'dessert'),
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    price: {
        type: Sequelize.INTEGER,
        validate: {
            min: 8,
            max: 100
        }
    },
    imageUrl: {
        type: Sequelize.STRING,
        defaultValue: 'https://i.kinja-img.com/gawker-media/image/upload/t_original/sqvqmd50vcm9i7jd59mx.png',
        validate: {
            isUrl: true
        }
    },
    quantity: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        allowNull: false
    }
})

module.exports = Food
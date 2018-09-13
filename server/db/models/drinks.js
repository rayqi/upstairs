const Sequelize = require('sequelize')
const db = require('../db')

const Drinks = db.define('drinks', {
    name: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },
    type: {
        type: Sequelize.ENUM('alcholic', 'non-alcholic')
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    price: {
        type: Sequelize.INTEGER,
        validate: {
            min: 1,
            max: 20
        }
    },
    imageUrl: {
        type: Sequelize.STRING,
        defaultValue: 'https://www.littleblackwood.com/wp-content/uploads/2015/09/little-blackwood-wine2.jpg',
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

module.exports = Drinks
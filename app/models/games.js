const Sequelize = require('sequelize')


Game.sync()

Game.findAll({}).then(function(results) {
})

module.exports = Game
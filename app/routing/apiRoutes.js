let db = require('../models/')

module.exports = function(app) {
    app.get('/api/games', function(req, res) {
        db.games.findAll({}).then(function(results) {
            res.json(results)
        })
    })

    app.get('/:query', function(req, res) {
        db.games.findAll({where: {game_name: {[db.Sequelize.Op.like]: `%${req.params.query}%`}}}).then(function(results) {
            res.json(results)
        })
    })

    app.get('/filter/:filter', function(req, res) {
        let filters = req.params.filter.split('+')
        const platformValues = ['PC', 'Playstation', 'Xbox', 'Nintendo']
        const genreValues = ['RPG', 'Shooter', 'Platform', 'Strategy']
        let platform = []
        let genre = []
        
        for (let i = 0; i < filters.length; i++) {
            if (platformValues.includes(filters[i])) {
                platform.push(filters[i])
            } else if (genreValues.includes(filters[i])) {
                genre.push(filters[i])
            }
        }

        if (filters[filters.length - 1] === 'AZ') {
            db.games.findAll({order: ['game_name'],
                              where: {platform: {[db.Sequelize.Op.like]: `%${[platform.join(', ')]}%`},
                                      genre: [genre]}               
                            })
            .then(function(results) {
                res.json(results)  
            })
 
        } else {
            db.games.findAll({order: [['game_name', 'DESC']]}).then(function(results) {
                res.json(results)
            })
        }
    })
}
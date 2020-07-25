const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 3000
const app = express()
const parse = require('body-parser')

app.use(parse.urlencoded({ extended: true }))
app.use(parse.json())

app.use(express.static(path.join(__dirname, './app/public')))

const db = require('./app/models/index')

require('./app/routing/htmlRoutes')(app)
require('./app/routing/apiRoutes')(app)

db.sequelize.sync({force: true}).then(function() {
    db.games.create({
        cover_art: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co2ade.jpg',
        game_name: 'VALORANT',
        platform: 'PC',
        genre: 'Shooter'
    })
    
    db.games.create({
        cover_art: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1r0o.jpg',
        game_name: 'The Last of Us: Part II',
        platform: 'Playstation',
        genre: 'Shooter'
    })
    
    db.games.create({
        cover_art: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co233r.jpg',
        game_name: 'Minecraft Dungeons',
        platform: 'PC, Playstation, Xbox, Nintendo',
        genre: 'RPG'
    })
    
    db.games.create({
        cover_art: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1lx6.jpg',
        game_name: 'Maneater',
        platform: 'PC, Playstation, Xbox',
        genre: 'RPG'
    })
    
    db.games.create({
        cover_art: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1wyy.jpg',
        game_name: 'The Witcher 3: Wild Hunt',
        platform: 'PC, Playstation, Xbox',
        genre: 'RPG'
    })
    
    db.games.create({
        cover_art: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co23jy.jpg',
        game_name: 'Super Mario World',
        platform: 'Nintendo',
        genre: 'Platform'
    })
    
    db.games.create({
        cover_art: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1r76.jpg',
        game_name: 'Perrsona 5',
        platform: 'Playstation',
        genre: 'Platform'
    })
    
    db.games.create({
        cover_art: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co20ul.jpg',
        game_name: 'The Binding of Isaac: Afterbirth',
        platform: 'PC, Playstation, Xbox',
        genre: 'Strategy'
    })
    
    db.games.create({
        cover_art: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1xhg.jpg',
        game_name: 'Halo 5: Guardians',
        platform: 'Xbox',
        genre: 'Shooter'
    })
    
    db.games.create({
        cover_art: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co28j8.jpg',
        game_name: 'Sid Meier’s Civilization VI',
        platform: 'PC, Playstation, Xbox, Nintendo',
        genre: 'Strategy'
    })
    
    db.games.create({
        cover_art: 'https://images.igdb.com/igdb/image/upload/t_cover_big/mhsqgm3cya7jrhlwljd5.jpg',
        game_name: 'Football Manager 2012',
        platform: 'PC',
        genre: 'Strategy'
    })
    
    db.games.create({
        cover_art: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co2535.jpg',
        game_name: 'N++',
        platform: 'PC, Playstation, Xbox',
        genre: 'Platform'
    })
    app.listen(PORT, function() {
        console.log(`Listening on http://localhost:${PORT}`)
    })
})

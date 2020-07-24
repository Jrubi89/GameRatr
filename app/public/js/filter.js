$(document).ready(function() {
    let checkbox = {
        PC: false,
        Playstation: false,
        Xbox: false,
        Nintendo: false,
        RPG: false,
        Shooter: false,
        Platform: false,
        Strategy: false,
        AZ: true,
        ZA: false
    }

    $(':checkbox').click(function() {
        let check = $(this).val()

        for (let key in checkbox) {
            if (key === check) {
                if(!checkbox[check]) {
                    checkbox[check] = true
                }
                else {
                    checkbox[check] = false
                }
            }
        }
        let params = []

        for (let key in checkbox) {
            if (checkbox[key]) {
                params.push(key)
            }
        }

        let filter = params.join('+')

        $.get(`/filter/${filter}`, function(res) {
            renderGameCards(res)
        })
    })

    $('#a-z').click(function() {
        if ($(this).text() == 'Titles: A-Z') {
            checkbox.AZ = true
            checkbox.ZA = false
        } else {
            checkbox.AZ = false
            checkbox.ZA = true
        }
        let params = []

        for (let key in checkbox) {
            if (checkbox[key]) {
                params.push(key)
            }
        }

        let filter = params.join('+')
        $.get(`/filter/${filter}`, function(res) {
            renderGameCards(res)
        })
    })

    function renderGameCards(results) {
        $('.cards').empty()
        let newResults = _.groupBy(results, 'game_name')
        let parsedResults = Object.entries(newResults)
        for (let i = 0; i < parsedResults.length; i++) {
            let gameCard = $('<div>')
            let title = $('<h1>').html(parsedResults[i][0])
            let cover_art = $('<img>').attr('src', parsedResults[i][1][0].cover_art)
            let genre = $('<p>').html(`Genre: ${parsedResults[i][1][0].genre}`)
            let platArr = []
            for (let j = 0; j < parsedResults[i][1].length; j++) {
                platArr.push(parsedResults[i][1][j].platform)
            }
            let platform = $('<p>').html(`Platform(s): ${platArr.join(', ')}`)
            gameCard.append(cover_art, title, genre, platform)
            $('.cards').append(gameCard)
        }

    }
})
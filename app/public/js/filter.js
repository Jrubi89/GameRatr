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
            console.log(res)
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
            console.log(res)
        })
    })

    
})
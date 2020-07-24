$(document).ready(function() {
    let data = {}
    $('#submit').click(function() {
        if($('#photo').val() !== '') {
            data.cover_art = $('#photo').val()
            if($('#Game').val() !== '') {
                data.game_name = $('#Game').val()
                let platform = []
                $.each($('input[class="Platform"]:checked'), function() {
                    platform.push($(this).val())
                })
                if(platform.length > 0) {
                    data.platform = platform
                    let genre = $('input[name="genre"]:checked').val()
                    if(genre !== undefined) {
                        data.genre = genre
                        $.post('/add/game', data, function(res) {
                            $('.form-popup').empty()
                            $('.form-popup').text(res)
                            setTimeout(function() {
                                location.reload()
                            }, 5000)
                        })
                    } else {
                        $('#error').text('Please fill out all fields')
                    }
                } else {
                    $('#error').text('Please fill out all fields')
                }
            } else {
                $('#error').text('Please fill out all fields')
            }
        } else {
            $('#error').text('Please fill out all fields')
        }
    })
})

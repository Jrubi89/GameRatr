$(document).ready(function() {
    $.get('/api/games', function(results) {
        console.log(results)
    })
    $('#search').click(function() {
        let query = $('#search-bar').val()

        $.get(`/${query}`, function(results) {
            console.log(results)
        })
    })
})
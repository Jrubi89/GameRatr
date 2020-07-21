$('#dark').click(function() {
    document.documentElement.setAttribute('data-theme', 'dark')
})
$('#light').click(function() {
    document.documentElement.setAttribute('data-theme', 'light')
})



$('#drop1').click(function() {
    $("#drop-cont1").toggleClass('active')
    $('#caret1').toggleClass('fa-caret-up')
    $('#caret1').toggleClass('fa-caret-down')
})
$('#drop2').click(function() {
    $("#drop-cont2").toggleClass('active')
    $('#caret2').toggleClass('fa-caret-up')
    $('#caret2').toggleClass('fa-caret-down')
})
$('#drop3').click(function() {
    $("#drop-cont3").toggleClass('active')
    $('#caret3').toggleClass('fa-caret-up')
    $('#caret3').toggleClass('fa-caret-down')
})
$('#drop4').click(function() {
    $("#drop-cont4").toggleClass('active')
    $('#caret4').toggleClass('fa-caret-up')
    $('#caret4').toggleClass('fa-caret-down')
})

$('#a-z').click(function() {
    $(this).text($(this).text() == 'Titles: A-Z' ? 'Titles: Z-A': 'Titles: A-Z')
})
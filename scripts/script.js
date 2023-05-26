$(document).ready(function() {
    $('.menu__burger').click(function(event) {
        $('.menu__burger,.menu,.menu__list').toggleClass('active')
        $('body').toggleClass('lock');
    })
})
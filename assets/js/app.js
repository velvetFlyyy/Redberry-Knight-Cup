// Step 1

$('#start').click(function () {
    $('.bg-imgs > li').removeClass('fadeIn');
    $('.bg-imgs > li:first-child').addClass('fadeOut');
    $('.bg-imgs > li:nth-child(2)').addClass('fadeIn');

    $('.content-list > li:first-child').addClass('hidden');
    $('.content-list > li:nth-child(2)').removeClass('hidden');
});



// Step 2

$('#backHome').click(function () {
    $('.bg-imgs > li').removeClass('fadeIn');
    $('.bg-imgs > li:first-child').addClass('fadeIn');
    $('.bg-imgs > li:first-child').removeClass('fadeOut');
    $('.bg-imgs > li:nth-child(2)').addClass('fadeOut');

    $('.content-list > li:first-child').removeClass('hidden');
    $('.content-list > li:nth-child(2)').addClass('hidden');
});


$('#chessExperience').click(function () {
    $('.bg-imgs > li').removeClass('fadeIn');
    $('.bg-imgs > li:nth-child(2)').addClass('fadeOut');
    $('.bg-imgs > li:nth-child(3)').removeClass('fadeOut');
    $('.bg-imgs > li:nth-child(3)').addClass('fadeIn');

    $('.content-list > li:nth-child(2)').addClass('hidden');
    $('.content-list > li:nth-child(3)').removeClass('hidden');
});


// Step 3

$('#backInformation').click(function () {
    $('.bg-imgs > li').removeClass('fadeIn');
    $('.bg-imgs > li:nth-child(2)').addClass('fadeIn');
    $('.bg-imgs > li:nth-child(2)').removeClass('fadeOut');
    $('.bg-imgs > li:nth-child(3)').addClass('fadeOut');


    $('.content-list > li:nth-child(2)').removeClass('hidden');
    $('.content-list > li:nth-child(3)').addClass('hidden');
});


$('#finish').click(function () {
    $('.bg-imgs > li').removeClass('fadeIn');
    $('.bg-imgs > li:nth-child(3').addClass('fadeOut');
    $('.bg-imgs > li:nth-child(4)').removeClass('fadeOut');
    $('.bg-imgs > li:nth-child(4)').addClass('fadeIn');

    $('.content-list > li:nth-child(3)').addClass('hidden');
    $('.content-list > li:nth-child(4)').removeClass('hidden');
});





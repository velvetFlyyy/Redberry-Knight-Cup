

// Form
$('.input').keydown(function () {
    $(".step-list li:first-child span").addClass('active');
});


$('#nameInput').keyup(function () {
    let nameInput = $('#nameInput').val();

    localStorage.setItem("UserName", nameInput);


    if (nameInput.length > 2) {
        $(this).siblings().removeClass('hide');
        $(this).removeClass('alert');
    } else {
        $(this).siblings('.check').addClass('hide');
        $(this).addClass('alert');
    }

    if ($(this).val()) {
        let userName = $(this).val();
        $(this).addClass('flyLabel');
    } else {
        $(this).removeClass('flyLabel');
    }
});

function validateEmail($emailInput) {
    var emailReg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@(redberry.ge)$/;
    return emailReg.test($emailInput);
}

$('#emailInput').keyup(function () {
    let emailInput = $('#emailInput').val();

    localStorage.setItem("Email", emailInput);


    if (emailInput.length > 2 && validateEmail(emailInput)) {
        $(this).siblings().removeClass('hide');
        $(this).removeClass('alert');
    } else {
        $(this).siblings('.check').addClass('hide');
        $(this).addClass('alert');
    }

    if ($(this).val()) {
        let userName = $(this).val();
        $(this).addClass('flyLabel');
    } else {
        $(this).removeClass('flyLabel');
    }
});


$('#telInput').keyup(function () {
    let telInput = $('#telInput').val();

    localStorage.setItem("Tel", telInput);


    if (telInput.length == 9) {
        $(this).siblings().removeClass('hide');
        $(this).removeClass('alert');
    } else {
        $(this).siblings('.check').addClass('hide');
        $(this).addClass('alert');
    }

    if ($(this).val()) {
        let userName = $(this).val();
        $(this).addClass('flyLabel');
    } else {
        $(this).removeClass('flyLabel');
    }
});


$('#dateInput').blur(function () {
    let dateInput = $('#dateInput').val();

    localStorage.setItem("Date", dateInput);


    if (dateInput.length > 2) {
        $(this).siblings().removeClass('hide');
        $(this).removeClass('alert');
    } else {
        $(this).siblings('.check').addClass('hide');
        $(this).addClass('alert');
    }

    if ($(this).val()) {
        let userName = $(this).val();
        $(this).addClass('flyLabel');
    } else {
        $(this).removeClass('flyLabel');
    }
});


$('#registerForm input[name=participated]').on('change', function () {
    let participatedValue = $('input[name=participated]:checked', '#registerForm').val();
    localStorage.setItem("Participated", participatedValue);
});


// Number Only

(function ($) {
    $.fn.inputFilter = function (callback, errMsg) {
        return this.on("input keydown keyup mousedown mouseup select contextmenu drop focusout", function (e) {
            if (callback(this.value)) {
                // Accepted value
                if (["keydown", "mousedown", "focusout"].indexOf(e.type) >= 0) {
                    $(this).removeClass("input-error");
                    this.setCustomValidity("");
                }
                this.oldValue = this.value;
                this.oldSelectionStart = this.selectionStart;
                this.oldSelectionEnd = this.selectionEnd;
            } else if (this.hasOwnProperty("oldValue")) {
                // Rejected value - restore the previous one
                $(this).addClass("input-error");
                this.setCustomValidity(errMsg);
                this.reportValidity();
                this.value = this.oldValue;
                this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
            } else {
                // Rejected value - nothing to restore
                this.value = "";
            }
        });
    };
}(jQuery));

$(document).ready(function () {
    $("#telInput").inputFilter(function (value) {
        return /^\d*$/.test(value);    // Allow digits only, using a RegExp
    }, "Please enter numbers");


    // დასეტილის აღება
    const UserName = localStorage.getItem('UserName');
    const Email = localStorage.getItem('Email');
    const Tel = localStorage.getItem('Tel');
    const Date = localStorage.getItem('Date');
    const Participated = localStorage.getItem('Participated');

    if (Participated) {
        $("input[value=" + Participated + "]").prop("checked", true);
    }

    if (UserName) {
        $('#nameInput').val(localStorage.getItem("UserName"));
        $('#nameInput').addClass('flyLabel');
    } else {
        $('#nameInput').removeClass('flyLabel');
    }

    if (Email) {
        $('#emailInput').val(localStorage.getItem("Email"));
        $('#emailInput').addClass('flyLabel');
    } else {
        $('#emailInput').removeClass('flyLabel');
    }

    if (Tel) {
        $('#telInput').val(localStorage.getItem("Tel"));
        $('#telInput').addClass('flyLabel');
    } else {
        $('#telInput').removeClass('flyLabel');
    }

    if (Date) {
        $('#dateInput').val(localStorage.getItem("Date"));
        $('#dateInput').addClass('flyLabel');
    } else {
        $('#dateInput').removeClass('flyLabel');
    }


});





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
    let nameInput = $('#nameInput').val();
    let telInput = $('#telInput').val();
    let emailInput = $('#emailInput').val();
    let dateInput = $('#dateInput').val();


    if (nameInput.length > 2 && emailInput.length > 2 && dateInput.length > 2 && validateEmail(emailInput) && telInput.length == 9) {
        $('.bg-imgs > li').removeClass('fadeIn');
        $('.bg-imgs > li:nth-child(2)').addClass('fadeOut');
        $('.bg-imgs > li:nth-child(3)').removeClass('fadeOut');
        $('.bg-imgs > li:nth-child(3)').addClass('fadeIn');

        $('.content-list > li:nth-child(2)').addClass('hidden');
        $('.content-list > li:nth-child(3)').removeClass('hidden');

        $(".step-list li:first-child span").removeClass('active');
        $(".step-list li:first-child span").addClass('done');

        $('.messenger').removeClass('show');


    } else if (nameInput.length < 2) {
        let message = 'Filling the name field is mandatory, the number of characters must exceed 2';
        let title = 'Invalid Name';

        $('.messenger').addClass('show');
        $('.messenger h3').text(title);
        $('.messenger p').text(message);

    } else if (emailInput.length < 2 || !validateEmail(emailInput)) {
        let message = 'E-mail is mandatory, E-mail should end with redberry.ge, for example: Info@redberry.ge';
        let title = 'Invalid E-mail';

        $('.messenger').addClass('show');
        $('.messenger h3').text(title);
        $('.messenger p').text(message);

    } else if (telInput.length < 9) {
        let message = 'Phone field is mandatory, the number of characters must be 9';
        let title = 'Invalid phone';

        $('.messenger').addClass('show');
        $('.messenger h3').text(title);
        $('.messenger p').text(message);
    } else if (dateInput.length < 2) {
        let message = 'Date field is mandatory';
        let title = 'Invalid Date';

        $('.messenger').addClass('show');
        $('.messenger h3').text(title);
        $('.messenger p').text(message);
    }
});


$('.close').click(function () {
    $(this).parent().removeClass('show');
});

// Step 3

$('#backInformation').click(function () {
    $('.bg-imgs > li').removeClass('fadeIn');
    $('.bg-imgs > li:nth-child(2)').addClass('fadeIn');
    $('.bg-imgs > li:nth-child(2)').removeClass('fadeOut');
    $('.bg-imgs > li:nth-child(3)').addClass('fadeOut');


    $('.content-list > li:nth-child(2)').removeClass('hidden');
    $('.content-list > li:nth-child(3)').addClass('hidden');

    $(".step-list li:first-child span").addClass('active');
    $(".step-list li:first-child span").removeClass('done');
});


$('#finish').click(function () {
    $('.bg-imgs > li').removeClass('fadeIn');
    $('.bg-imgs > li:nth-child(3').addClass('fadeOut');
    $('.bg-imgs > li:nth-child(4)').removeClass('fadeOut');
    $('.bg-imgs > li:nth-child(4)').addClass('fadeIn');

    $('.content-list > li:nth-child(3)').addClass('hidden');
    $('.content-list > li:nth-child(4)').removeClass('hidden');
});


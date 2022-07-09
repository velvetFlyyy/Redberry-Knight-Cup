

// Form
$('.input').keydown(function () {
    $(".step-list li:first-child span").addClass('active');
});


$('#nameInput').keyup(function () {
    let nameInput = $('#nameInput').val();

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
    }, "გთხოვთ შეიყვანოთ ციფრები");
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
    } else if (nameInput.length < 2) {
        alert('სახელის ველის შევსება სავალდებულოა, სიმბოლოების რაოდენობა უნდა აღემატებოდეს 2-ს');
    } else if (emailInput.length < 2 || !validateEmail(emailInput)) {
        alert('ელ. ფოსტის ველის შევსება სავალდებულოა, ელ. ფოსტა უნდა მთავრდებოდეს redberry.ge, მაგალითად: Info@redberry.ge');
    } else if (telInput.length < 9) {
        alert('ტელეფონის ველის შევსება სავალდებულოა, სიმბოლოების რაოდენობა უნდა იყოს 9');
    } else if (dateInput.length < 2) {
        alert('თარიღის ველის შევსება სავალდებულოა');
    }
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


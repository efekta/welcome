$(document).ready(function() {
    $('form[id="welcome-form"]').validate({
        rules: {
            user_email: {
                required: true,
                email: true,
            },
            psword: {
                required: true,
                minlength: 8,
            }
        },
        messages: {
            user_email: 'Enter a valid email',
            psword: {
                minlength: 'Password must be atleast 8 characterslong'
            }
        },
        submitHandler: function(form) {
            form.submit();
        }
    });
    // $('#welcome-form').submit(function(e) {
    //     e.preventDefault();
    //     var email = $('#email').val();
    //     var password = $('#password').val();
    //
    //     $(".error").remove();
    //
    //     if (email.length< 1) {
    //         $('#email').after('<span class="error">This field is required</span>');
    //     } else {
    //         var regEx = /^[A-Z0-9][A-Z0-9._%+-]{0,63}@(?:[A-Z0-9-]{1,63}.){1,125}[A-Z]{2,63}$/;
    //         var validEmail = regEx.test(email);
    //         if (!validEmail) {
    //             $('#email').after('<span class="error">Enter a valid email</span>');
    //         }
    //     }
    //     if (password.length< 8) {
    //         $('#password').after('<span class="error">Password must be atleast 8 characterslong</span>');
    //     }
    // });
});



// "use strict"
//
// document.addEventListener('DOMContentLoaded', function (){
//     const form = document.getElementById('welcome-form');
//     form.addEventListener('submit', formSend);
//
//     async function formSend(e) {
//         e.preventDefault();
//
//         let error = formValidate(form);
//     }
//     function formValidate(form) {
//         let error = 0;
//         let formReq = document.querySelectorAll('._req');
//
//         for (let index = 0; index < formReq.length; index++) {
//             const input = formReq[index];
//             formRemoveError(input);
//             if(input.classList.contains('_email')) {
//                 if (emailTest(input)) {
//                     formAddError(input);
//                     error++;
//                 }
//             }
//         }
//     }
//     function formAddError(input) {
//         input.parentElement.classList.add('_error');
//         input.classList.add('_error');
//     }
//
//     function formAddError(input) {
//         input.parentElement.classList.remove('_error');
//         input.classList.remove('_error');
//     }
//     // Тест email
//     function emailTest(input) {
//         return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w)*(\.\w{2,8})+$/.test(input.value);
//     }
// });


// function validate(form_id,email) {
//     var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
//     var address = document.forms[form_id].elements[email].value;
//     if(reg.test(address) == false) {
//         alert('Введите корректный e-mail');
//         return false;
//     }
// }

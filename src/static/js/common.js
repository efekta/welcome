$(document).ready(function(){
// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    (function init100vh(){
        function setHeight() {
            var vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        }
        setHeight();
        window.addEventListener('resize', setHeight);
    })();


    var slider = document.querySelector('.range');


    var testAndWK = window.getComputedStyle(slider,'::-webkit-slider-thumb').height;
    if (!testAndWK) {
        slider.style.WebkitAppearance = 'slider-horizontal';
    }

    slider.addEventListener('input',startTimer,false);
    slider.addEventListener('change',startTimer,false);

    var timeout;
    function startTimer() {
        var that = this;
        clearTimeout(timeout);
        timeout = setTimeout(function () {
            handleEvent(that);
        },100);
    }

    function handleEvent(slider) {
        // Fires when user doesn't slide for 100ms
    }

    // JavaScript for label effects only
    $(window).load(function(){
        $(".rename-form__input").val("");

        $(".rename-form__input").focusout(function(){
            if($(this).val() != ""){
                $(this).addClass("has-content");
            }else{
                $(this).removeClass("has-content");
            }
        })
    });

});

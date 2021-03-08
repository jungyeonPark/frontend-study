(function (window, document) {
    'use strict';

    const $toggles = document.querySelectorAll('.toggle'); // NodeList(배열이랑 비슷)
    const $toggleBtn = document.getElementById('toggle-btn');

    $toggleBtn.addEventListener('click', function () {
        toggleElements();
    });

    window.addEventListener('resize', function () {
        if(window.innerWidth > 1024) {
            // Off toggle element
            offElements();
        }
    });

    function toggleElements() {
        [].forEach.call($toggles, function (toggle) {
            toggle.classList.toggle('on');  // on클래스가 있으면 지우고 없으면 만듦
        });
    }

    function offElements() {
        [].forEach.call($toggles, function (toggle) {
            toggle.classList.remove('on');  // on클래스가 있으면 지우고 없으면 만듦
        });
    }
})(window, document)
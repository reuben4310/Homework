(function () {

    'use strict';
    const page = $('#page');
    const load = $('#file');
    const theForm = $('#load');
    const spin = $('#spin');
    spin.hide();


    theForm.submit(event => {

        spin.show();

        event.preventDefault();
        setTimeout(() => {
            fetch(load.val())
                .then(r => r.text())
                .then((text) => page.text(text))
                .catch(() => window.pcs.messageBox.show('ERORR!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!', true))
                .then(spin.hide());
            //theForm.trigger('reset');
            theForm[0].reset();

        }, 5000);


    });
}());



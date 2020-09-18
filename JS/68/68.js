/* global $*/

(function () {
    'use strict';
    const list = $('#list');

    $('#search').click(function (event) {
        list.empty();
        event.preventDefault();
        const myVal = $('#tag').val();
        $.getJSON(`https://api.flickr.com/services/feeds/photos_public.gne?tags=${myVal}&format=json&jsoncallback=?`)
            .then(data => {
                console.log(data);
                data.items.forEach(item => {
                    let url = (item.media && item.media.m) ? item.media.m : "";

                    $(`<li><span>${item.title}</span>
                <br>
                    <img src= ${url}>
                </li>`)
                        .appendTo(list);

                });
            })
            .catch(e => console.error(e));
    });

}());
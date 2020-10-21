/* global google*/
/* global $*/
window.initMap = function () {
    'use strict';

    const lakewood = { lat: 40.095657332825816, lng: -74.22207079649733 };

    const map = new google.maps.Map(document.getElementById('map'), {
        center: lakewood,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.SATELLITE
    });

    const placesList = $('#sidebar ul');
    const tagInput = $("#tag");
    const rowsInput = $("#rows");
    const infoWindow = new google.maps.InfoWindow({ maxWidth: 500 });

    // let selectedPlace;

    $('#searchform').submit(e => {
        e.preventDefault();

        fetch(`http://api.geonames.org/wikipediaSearch?q=${tagInput.val()}&maxRows=${rowsInput.val()}&username=reuben4310&type=json`)
            .then(r => {
                if (!r.ok) {
                    throw new Error(`${r.status} ${r.statusText}`);
                }
                return r.json();
            })
            .then(wikiData => {
                console.log(wikiData);

                const bounds = new google.maps.LatLngBounds();

                wikiData.geonames.forEach(place => {
                    const marker = new google.maps.Marker({
                        position: { lat: place.lat, lng: place.lng },
                        map: map,
                        animation: google.maps.Animation.DROP,
                        title: place.title,
                        icon: place.thumbnailImg ? {
                            url: place.thumbnailImg,
                            scaledSize: new google.maps.Size(50, 50)
                        } : null
                    });

                    const placeElem = $(`<li>
            <img src="${place.thumbnailImg || 'https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi2_hdpi.png'}" alt="${place.title}">
            <span class="title">${place.title}</span>
            <div class="summary">${place.summary}</div>
          </li>`)
                        .appendTo(placesList)
                        .click(() => {
                            const b = map.getBounds();
                            b.extend(marker.position);
                            map.fitBounds(b);

                            setTimeout(() => {
                                map.panTo(marker.position);
                                setTimeout(() => map.setZoom(18), 1000);
                            }, 1000);

                            placeSelected();
                        });

                    function placeSelected() {
                        infoWindow.setContent(`${place.summary}<hr>
              <a target="_blank" href="http://${place.wikipediaUrl}">more info</a>`);
                        infoWindow.open(map, marker);
                        $('.summary').slideUp('slow');
                        placeElem.find('.summary').slideDown('slow');
                    }

                    marker.addListener('click', () => {

                        placeSelected();
                    });

                    bounds.extend(marker.position);
                });

                map.fitBounds(bounds);
            })
            .catch(e => alert(e.message));
    });

    //////////////////////////////////////
    const markers = [];

    const drawingManager = new google.maps.drawing.DrawingManager();
    drawingManager.setMap(map);

    google.maps.event.addListener(drawingManager, 'overlaycomplete', event => {
        console.log(event);
        if (event.type === 'marker') {
            console.log(event.overlay.position.lat(), event.overlay.position.lng());

            markers.push(event.overlay.position);
            localStorage.markers = JSON.stringify(markers);
        }
    });

    const circles = [];

    google.maps.event.addListener(drawingManager, 'circlecomplete', cicr => {

        console.log(cicr);
        circles.push({ center: cicr.center, radius: cicr.radius });
        localStorage.circles = JSON.stringify(circles);
    });
    const rectangles = [];

    google.maps.event.addListener(drawingManager, 'rectanglecomplete', rect => {
        rectangles.push(rect.bounds);
        localStorage.rectangles = JSON.stringify(rectangles);
        console.log(rect);
    });
    const polylines = [];

    google.maps.event.addListener(drawingManager, 'polylinecomplete', poly => {
        polylines.push(poly.getPath().getArray());
        localStorage.polylines = JSON.stringify(polylines);
        console.log(poly);
    });

    const polygones = [];

    google.maps.event.addListener(drawingManager, 'polygoncomplete', polg => {
        polygones.push(polg.getPath().getArray());
        localStorage.polygones = JSON.stringify(polygones);
        console.log(polg);
    });

    if (localStorage.markers) {
        const m = JSON.parse(localStorage.markers);
        m.forEach(pos => {
            new google.maps.Marker({
                position: pos,
                map: map,
                animation: google.maps.Animation.DROP
            });
        });
    }

    if (localStorage.circles) {
        const c = JSON.parse(localStorage.circles);
        c.forEach(cir =>
            new google.maps.Circle({
                map: map,
                center: cir.center,
                radius: cir.radius
            }));

    }

    if (localStorage.rectangles) {
        const r = JSON.parse(localStorage.rectangles);
        r.forEach(rec =>
            new google.maps.Rectangle({
                map: map,
                bounds: rec
            }));

    }

    if (localStorage.polylines) {
        const p = JSON.parse(localStorage.polylines);
        p.forEach(pol =>
            new google.maps.Polyline({
                map: map,
                path: pol

            }));
    }

    if (localStorage.polygones) {
        const pg = JSON.parse(localStorage.polygones);
        pg.forEach(polg =>
            new google.maps.Polygon({
                map: map,
                path: polg

            }));
    }
};

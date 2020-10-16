/* global google */

/* global $ */

function initMap() {
    'use strict';

    const loc = { lat: 40.095657332825816, lng: -74.22207079649733 };

    const map = new google.maps.Map(document.getElementById('map'), {
        center: loc,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.SATELLITE
    });

    const infoWindow = new google.maps.InfoWindow();

    $("#search").click(function (event) {

        event.preventDefault();

        const myVal = $('#tag').val();
        fetch(`http://api.geonames.org/wikipediaSearch?q=${myVal}&maxRows=10&username=reuben4310&type=json`)
            .then(r => {
                if (!r.ok) {
                    throw new Error(`${r.status} ${r.statusText}`);
                }
                return r.json();
            })
            .then(data => {
                const bounds = new google.maps.LatLngBounds();
                data.geonames.forEach(item => {
                    console.log(item);

                    const itemLoc = { lat: item.lat, lng: item.lng };
                    bounds.extend(itemLoc);
                    const itemMarker = new google.maps.Marker({
                        position: itemLoc,
                        map: map,
                        icon: item.thumbnailImg,
                        title: item.title
                    });
                    itemMarker.addListener('click', () => {
                        const summary = item.summary + `<br><a target="_blank" href="https://${item.wikipediaUrl}">More info</a>`
                        infoWindow.setContent(
                            summary
                        );
                        infoWindow.open(map, itemMarker);
                    });

                });
                map.fitBounds(bounds);
            })
            .catch(e => console.error(e));
    });
}

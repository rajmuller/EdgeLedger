function initMap() {
    const map = new google.maps.Map(document.querySelector('.map'), {
        center: {
            lat: 47.505002,
            lng: 19.057748,
        },
        zoom: 14
    });

    const maker = new google.maps.Marker({
        position: {
            lat: 47.505002,
            lng: 19.057748,
        },
        map: map
    });
}
let map;
var beachData = {
    "streedagh": {"swimming": true, "surfing": true, "location": {lat: 54.403749, lng: -8.559093}},
    "strandhill": {"swimming": false, "surfing": true, "location": {lat: 54.2695947, lng: -8.6127064}}
};

function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        center: {lat: 54.2767272, lng: -8.5064695},
        zoom: 9,
        restriction: {
            latLngBounds: {
                north: 55,
                south: 53.8,
                east: -7.5,
                west: -9.3,
            },
        },
    });

    const image = {
        url:
            "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
        // This marker is 20 pixels wide by 32 pixels high.
        size: new google.maps.Size(20, 32),
        // The origin for this image is (0, 0).
        origin: new google.maps.Point(0, 0),
        // The anchor for this image is the base of the flagpole at (0, 32).
        anchor: new google.maps.Point(0, 32),
    };

    for (const [key, value] of Object.entries(beachData)) {
        marker = new google.maps.Marker({
            position: value['location'],
            icon: image,
            map: map,
            title: key,
        })
        var content = "Beach is good for:";
        if( value['swimming']){
            content += " swimming";
        }
        const infowindow = new google.maps.InfoWindow({
            content: content,
        });
        marker.addListener("click", () => {
            infowindow.open(map, marker);
        });
    }
}

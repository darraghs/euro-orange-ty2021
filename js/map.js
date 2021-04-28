let map;
var beachData = {
    "streedagh": {"swimming": true, "surfing": true, "location": {lat: 54.403749, lng: -8.559093}, "description" : "Streedagh Strand is a vast sandy beach with dunes and a lagoon behind with fantastic views over the sea to the mountains of Donegal, and behind to the famous Ben Bulben, at the foot of which lies the grave of WB Yeats. Streedagh Strand is an exposed beach and reef break that has reasonably consistent surf and can work at any time of the year. Located close to the village of Grange with restaurants and pubs and an outdoor play area. It is both a swimming beach and  a surfing beach. In 1588 3 ships from the armarda ship wrecked on streedagh beach after a storm and you can still see parts of the ship wrecks today. "},
    "strandhill": {"swimming": false, "surfing": true, "location": {lat: 54.2695947, lng: -8.6127064}, "description" : "Strandhill is a vibrant seaside village and holiday resort located on the R292 – it is roughly 7 miles form Sligo town. With its wild Atlantic waves is also a very popular spot for surfers throughout the year. It is said that it is one of the best places in Europe to surf! Along the seafront, you will find Shells Cafe, Voya Seaweed Baths, Surf Clubs, The Strand Bar. Close by, you will find Strandhill Golf Course, Sligo Airport, Sligo Enterprise & Technology Centre, and more restaurants and pubs. Surf lessons are available throughout the year with the local surf shops, and when there is no surf, there is stand up paddling! This is not a becah for swimming."},
    "easkey": {"swimming": false, "surfing": true, "location": {lat: 54.2695947, lng: -8.6127064}, "description" : "Easky (also called Easkey) Beach is an Eldorado for surfers. The rocky coast breaks the waves and shapes them perfectly for surfing.     At Easky Pier, O’Dowd Castle should not be missed, a very well-preserved tower house which was built in the early 13th century."},
    
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

let map;

var beachData = {
    "Streedagh": { 
            "swimming": true, 
            "surfing": true, 
            "location": { lat: 54.403749, lng: -8.559093 }, 
            "description": "Streedagh Strand is a vast sandy beach with dunes and a lagoon behind with fantastic views over the sea to the mountains of Donegal, and behind to the famous Ben Bulben, at the foot of which lies the grave of WB Yeats. Streedagh Strand is an exposed beach and reef break that has reasonably consistent surf and can work at any time of the year. Located close to the village of Grange with restaurants and pubs and an outdoor play area. It is both a swimming beach and  a surfing beach. In 1588 3 ships from the armarda ship wrecked on streedagh beach after a storm and you can still see parts of the ship wrecks today. ",
            "cafes" : "the jam pt cafe" 
        },
    "Strandhill": { 
        "swimming": false, 
        "surfing": true, 
        "location": { lat: 54.2695947, lng: -8.6127064 }, 
        "description": "Strandhill is a vibrant seaside village and holiday resort located on the R292 – it is roughly 7 miles form Sligo town. With its wild Atlantic waves is also a very popular spot for surfers throughout the year. It is said that it is one of the best places in Europe to surf! Along the seafront, you will find Shells Cafe, Voya Seaweed Baths, Surf Clubs, The Strand Bar. Close by, you will find Strandhill Golf Course, Sligo Airport, Sligo Enterprise & Technology Centre, and more restaurants and pubs. Surf lessons are available throughout the year with the local surf shops, and when there is no surf, there is stand up paddling! This is not a becah for swimming.", 
        "cafes" : "mama jonstons cafes"
    },
    "Easkey": { 
        "swimming": false, 
        "surfing": true, 
        "location": { lat: 54.291672, lng: -8.952884 }, 
        "description": "Easky (also called Easkey) Beach is an Eldorado for surfers. The rocky coast breaks the waves and shapes them perfectly for surfing.     At Easky Pier, O’Dowd Castle should not be missed, a very well-preserved tower house which was built in the early 13th century." ,
        "cafes" : "Fordes gerneral store"
    },
    "Mullaghmore": { 
        "swimming": true, 
        "surfing": true, 
        "location": { lat: 54.463087, lng: -8.452364 }, 
        "description": "Mullaghmore Beach is situated in North Sligo next to the picturesque village of Mullaghmore, 25km from Sligo town via the N15. This rural sandy beach is backed by an extensive dune system and with view of Ben Bulben, overlooked by the majestic Classiebawn Castle on the headland. The village of Mullaghmore comprises of beautiful seaside bars and cafés, a sure place to spend an afternoon enjoying a refreshing meal in the sunshine. Mullaghmore Beach is a busy family friendly beach and is guarded on a daily basis by life guards from June to September with life buoys and torpedo buoys available on the beach. In 2013, travel bible The Lonely Planet recognised the waves off the Mullaghmore headland as one of the best surfing spots in the world for big wave surfing.",
        "cafes" : "Paddys Place shop"
    },
    "Rosses Point": { 
        "swimming": true, 
        "surfing": false, 
        "location": { lat: 54.308884, lng: -8.571854 }, 
        "description": "Rosses Point Beach is a blue flag beach located in a seafaring village 8km from Sligo Town, on the North West Coast of Ireland. With 3 sandy beaches there will always be space to walk, run, or sit. The area inspired many of Jack B. Yeats artwork which you can see on exhibition from time to time at The Model Arts Centre in Sligo town. From Rosses Point Pier, you can take a tour boat to Coney Island, book a trip with Ewing Sea Angling Boat charters and spend the day fishing, or simply enjoy the scenic backdrop of Benbulben and Knocknarea from the beach itself." ,
        "cafes" : "the little cottage cafes"
    },
    "Rosses Point Second Beach": { 
        "swimming": true, 
        "surfing": false, 
        "location": { lat: 54.310547, lng: -8.570612 }, 
        "description": "Rosses Point Beach is a blue flag beach located in a seafaring village 8km from Sligo Town, on the North West Coast of Ireland. With 3 sandy beaches there will always be space to walk, run, or sit. The area inspired many of Jack B. Yeats artwork which you can see on exhibition from time to time at The Model Arts Centre in Sligo town. From Rosses Point Pier, you can take a tour boat to Coney Island, book a trip with Ewing Sea Angling Boat charters and spend the day fishing, or simply enjoy the scenic backdrop of Benbulben and Knocknarea from the beach itself." ,
        "cafes" : "the little cottage cafes"
    },
    "Dunmoran Strand": { 
        "swimming": false, 
        "surfing": true, 
        "location": { lat: 54.262669, lng: -8.724255 }, 
        "description": "Dunmoran Strand is a sheltered beach break that has quite reliable surf and can work at any time of the year. Ideal winds are from the south. most of the surf here comes from groundswells and the best swell direction is from the northwest. The beach break provides left and right handers. Good surf at all stages of the tide.The Green Coast Award is a symbol of excellence which recognizes excellent water quality, high environmental standards, good management and community involvement. Coast beaches are ideal for those wishing to enjoy a beach experience far removed from the intrusions normally associated with the traditional and more urban seaside beaches.This beach has been awarded the Green Coast Award for 2018." , 
        "cafes" : "The Beach Bar"
    },
    "Eniscrone": { 
        "swimming": true, 
        "surfing": true, 
        "location": { lat: 54.212569, lng: -9.097583 }, 
        "description": " Enniscrone beach is one of the safest and tidiest beaches along the west coast of Ireland.  Enniscrone beach, a safe blue flag fabulous golden beach which stretches for an amazing 5km.Surrounding the beach on one side is a lively little seaside town called Enniscrone, on the other side the beach meets Killala Bay. Activities range from surfing, golfing, walking, horse riding, fishing, swimming and a wide range of summer camps that are held throughout the summer months, there is something for everyone. Enniscrone Beach is an idyllic location for Surfing holidays in Ireland.With over two miles of excellent surfing conditions suitable for the novice and intermediate surfer. Two surf schools are available in a safe and enjoyable environment with surfboards and wet suits provided. Making Enniscrone the perfect location for a surfing holiday in Ireland." 
    },
    "Cullenamore": { 
        "swimming": true, 
        "surfing": false, 
        "location": { lat: 54.260564, lng: -8.609191 }, 
        "description": " Culleenamore is a wonderful sandy beach with safe bathing, located behind Strandhill beach, 9km from Sligo town. Culleenamore is locally known as a place where, around 3000 BC, people went down to the shore to collect shellfish to eat. Culleenamore is just one of many midden site’s along the Sligo coastline. The Culleenamore Annual Races takes place in June, this event is one of only a few beach races which still take place.The sound of ponies and horses galloping on the beach recreate an exciting background to a scene which has been going on for over 100 years." 
    },
    "Cartys Strand": { 
        "swimming": false, 
        "surfing": false, 
        "location": { lat: 54.2983618, lng: -8.592133 }, 
        "description": " Cartys Strand on Coney Island" 
    },
    "Aughris": { 
        "swimming": true, 
        "surfing": true, 
        "location": { lat: 54.269023, lng: -8.7567271 }, 
        "description": " Aughris", 
        "cafes" : "The Beach Bar"
    },
    "Tra Bhui": { 
        "swimming": false, 
        "surfing": true, 
        "location": { lat: 54.261205, lng: -8.794751 }, 
        "description": " Tra Bhui or yellow strand is long strand with some rocks" 
    },
    "Trawalua Strand": { 
        "swimming": false, 
        "surfing": true, 
        "location": { lat: 54.439411, lng: -8.467830 }, 
        "description": "Trawalua Strand is a seculded beach"
     }
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

    map.addListener("center_changed", () => {
        $("#info").text("");
        $("#title").text("");
      });

      for (const [key, value] of Object.entries(beachData)) {
        var image = ""
        if (value["swimming"] == true) {
            image = {
                url: "images/swimming.png",
                size: new google.maps.Size(32, 32),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(0, 32),
            }
        } else if (value["surfing"] == true) {
            image = {
                url: "images/surfing.png",
                size: new google.maps.Size(32, 32),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(0, 32),
            }
        }

        marker = new google.maps.Marker({
            position: value['location'],
            icon: image,
            map: map,
            title: key,
        })
        content = "Beach is good for:";
        if (value['swimming']) {
            content += " swimming";
        }
        infowindow = new google.maps.InfoWindow({
            content: content,
        });
        marker.addListener("click", () => {
            // infowindow.open(map, marker);
            $('#title').html("<h3>" + key + "</h3>");
            $("#info").text(value['description']);
            var cafe = "";
            if ('cafes' in value) {
                cafe = value['cafes'];
            } else {
                cafe = "No cafes/shops in the area";
            }
            getTemp(value['location']['lat'], value['location']['lng'], cafe);
        });
    }
}


function getTemp(lat, lng, cafes) {

    jQuery.get("https://api.worldweatheronline.com/premium/v1/marine.ashx?key=2ab1ba821e484429b8785133212904&format=json&q=" + lat + "," + lng + "&num_of_days=1", function(data, status) {
        var response = data;

        var newContent = $('#title').html();
        newContent = newContent + `
        <table>
            <tr>
                <td><b>Nearby Cafes</b></td>
                <td>${cafes}</td>
            </tr>
       
            <tr>
                <td><b>Sunrise</b>:</td>
                <td> ${response['data']['weather'][0]["astronomy"][0]['sunrise']}</td>
            </tr>
            <tr><td><b>Sunset</b>:</td>
                <td> ${response['data']['weather'][0]["astronomy"][0]['sunset']}</td>
            </tr>
            <tr><td><b>Min Temp</b>: </td>
                <td>${response['data']['weather'][0]["mintempC"]}</td>
            </tr>
            <tr><td><b>Max Temp</b>:</td>
                <td>${response['data']['weather'][0]["maxtempC"]}</td>
            </tr>
        </table>
        <table>
            <tr>
                <th>

                </th>
                 <th>
                    6am
                </th>
                <th>
                    9am
                </th>
                <th>
                    12pm
                </th>
                <th>
                    3pm
                </th>
                <th>
                    6pm
                </th>
                <th>
                    9pm
                </th>
            </tr>
            <tr>
                <td>
                    <b>Swell Height (m)</b>
                </td>
                <td>
                    ${response['data']['weather'][0]['hourly'][2]['swellHeight_m']}
                </td>
                <td>
                    ${response['data']['weather'][0]['hourly'][3]['swellHeight_m']}
                </td>
                <td>
                    ${response['data']['weather'][0]['hourly'][4]['swellHeight_m']}
                </td>
                <td>
                    ${response['data']['weather'][0]['hourly'][5]['swellHeight_m']}
                </td>
                <td>
                    ${response['data']['weather'][0]['hourly'][6]['swellHeight_m']}
                </td>
                <td>
                    ${response['data']['weather'][0]['hourly'][7]['swellHeight_m']}
                </td>
            </tr>
            <tr>
                <td>
                    <b>Swell direction</b>
                </td>
                <td>
                    ${response['data']['weather'][0]['hourly'][2]['swellDir16Point']}
                </td>
                <td>
                    ${response['data']['weather'][0]['hourly'][3]['swellDir16Point']}
                </td>
                <td>
                    ${response['data']['weather'][0]['hourly'][4]['swellDir16Point']}
                </td>
                <td>
                    ${response['data']['weather'][0]['hourly'][5]['swellDir16Point']}
                </td>
                <td>
                    ${response['data']['weather'][0]['hourly'][6]['swellDir16Point']}
                </td>
                <td>
                    ${response['data']['weather'][0]['hourly'][7]['swellDir16Point']}
                </td>
            </tr>
            <tr>
                <td>
                    <b>Swell period (secs)</b>
                </td>
                <td>
                    ${response['data']['weather'][0]['hourly'][2]['swellPeriod_secs']}
                </td>
                <td>
                    ${response['data']['weather'][0]['hourly'][3]['swellPeriod_secs']}
                </td>
                <td>
                    ${response['data']['weather'][0]['hourly'][4]['swellPeriod_secs']}
                </td>
                <td>
                    ${response['data']['weather'][0]['hourly'][5]['swellPeriod_secs']}
                </td>
                <td>
                    ${response['data']['weather'][0]['hourly'][6]['swellPeriod_secs']}
                </td>
                <td>
                    ${response['data']['weather'][0]['hourly'][7]['swellPeriod_secs']}
                </td>
            </tr>
            <tr>
                <td>
                   <b> Water Temp (oC)</b>
                    </td>
                    <td>
                        ${response['data']['weather'][0]['hourly'][2]['waterTemp_C']}
                    </td>
                    <td>
                        ${response['data']['weather'][0]['hourly'][3]['waterTemp_C']}
                    </td>
                    <td>
                        ${response['data']['weather'][0]['hourly'][4]['waterTemp_C']}
                    </td>
                    <td>
                        ${response['data']['weather'][0]['hourly'][5]['waterTemp_C']}
                    </td>
                    <td>
                        ${response['data']['weather'][0]['hourly'][6]['waterTemp_C']}
                    </td>
                    <td>
                        ${response['data']['weather'][0]['hourly'][7]['waterTemp_C']}
                    </td>
            </tr>
            <tr>
                <td>
                    <b>Wind Speed (kph)</b>
                </td>
                <td>
                 ${response['data']['weather'][0]['hourly'][2]['windspeedKmph']}
                </td>
                <td>
                    ${response['data']['weather'][0]['hourly'][3]['windspeedKmph']}
                </td>
                <td>
                    ${response['data']['weather'][0]['hourly'][4]['windspeedKmph']}
                </td>
                <td>
                    ${response['data']['weather'][0]['hourly'][5]['windspeedKmph']}
                </td>
                <td>
                    ${response['data']['weather'][0]['hourly'][6]['windspeedKmph']}
                </td>
                <td>
                    ${response['data']['weather'][0]['hourly'][7]['windspeedKmph']}
                </td>
            </tr>
            <tr>
                <td>
                    <b>Wind Direction</b>
                </td>

                <td>
                    ${response['data']['weather'][0]['hourly'][2]['winddir16Point']}
                </td>
                <td>
                    ${response['data']['weather'][0]['hourly'][3]['winddir16Point']}
                </td>
                <td>
                    ${response['data']['weather'][0]['hourly'][4]['winddir16Point']}
                </td>
                <td>
                    ${response['data']['weather'][0]['hourly'][5]['winddir16Point']}
                </td>
                <td>
                    ${response['data']['weather'][0]['hourly'][6]['winddir16Point']}
                </td>
                <td>
                    ${response['data']['weather'][0]['hourly'][7]['winddir16Point']}
                </td>
            </tr>
            <tr>
                <td>
                    <b>Precipitation (mm)</b>
                </td>

                <td>
                    ${response['data']['weather'][0]['hourly'][2]['precipMM']}
                </td>
                <td>
                    ${response['data']['weather'][0]['hourly'][3]['precipMM']}
                </td>
                <td>
                    ${response['data']['weather'][0]['hourly'][4]['precipMM']}
                </td>
                <td>
                    ${response['data']['weather'][0]['hourly'][5]['precipMM']}
                </td>
                <td>
                    ${response['data']['weather'][0]['hourly'][6]['precipMM']}
                </td>
                <td>
                    ${response['data']['weather'][0]['hourly'][7]['precipMM']}
                </td>
            </tr>
            <tr>
                <td>
                    <b>Weather</b>
                </td>
                <td>
                    <img src="${response['data']['weather'][0]['hourly'][2]['weatherIconUrl'][0]['value']}"/>
                </td>
                <td>
                    <img src="${response['data']['weather'][0]['hourly'][3]['weatherIconUrl'][0]['value']}"/>
                </td>
                <td>
                    <img src="${response['data']['weather'][0]['hourly'][4]['weatherIconUrl'][0]['value']}"/>
                </td>
                <td>
                    <img src="${response['data']['weather'][0]['hourly'][5]['weatherIconUrl'][0]['value']}"/>
                </td>
                <td>
                    <img src="${response['data']['weather'][0]['hourly'][6]['weatherIconUrl'][0]['value']}"/>
                </td>
                <td>
                    <img src="${response['data']['weather'][0]['hourly'][7]['weatherIconUrl'][0]['value']}"/>
                </td>
            </tr>
        </table>
        `;
       
        $('#title').html(newContent);
    });

}


function setupBeaches(){

    var beachContent = "";
    for (const [key, value] of Object.entries(beachData)) {
        beachContent = beachContent + "<p><a href=\"#\"  onclick=\"panToBeach('"+key+"')\">"+key+"</a></p>\n";
    }
    jQuery('#beaches').html(beachContent);
}


function panToBeach(beach){
    var value = beachData[beach];
    $('#title').html("<h3>" + beach + "</h3>");
    $("#info").text(value['description']);
    var cafe = "";
    if ('cafes' in value) {
        cafe = value['cafes'];
    } else {
        cafe = "No cafes/shops in the area";
    }
    getTemp(value['location']['lat'], value['location']['lng'], cafe);
}
let cords = [
    {
        name: "Emirates Stadium (Arsenal)",
        cord: { x: 51.5549, y: -0.1084 }
    },
    {
        name: "Villa Park (Aston Villa)",
        cord: { x: 52.5091, y: -1.8847 }
    },
    {
        name: "Gtech Community Stadium (Brentford)",
        cord: { x: 51.4862, y: -0.3026 }
    },
    {
        name: "Vitality Stadium / Dean Court (AFC Bournemouth)",
        cord: { x: 50.7352, y: -1.8383 }
    },
    {
        name: "Amex Stadium (Brighton & Hove Albion)",
        cord: { x: 50.8609, y: -0.0801 }
    },
    {
        name: "Stamford Bridge (Chelsea)",
        cord: { x: 51.4816, y: -0.1911 }
    },
    {
        name: "Selhurst Park (Crystal Palace)",
        cord: { x: 51.3983, y: -0.0855 }
    },
    {
        name: "Hill Dickinson Stadium (Everton)",
        cord: { x: 53.4385, y: -3.0019 }
    },
    {
        name: "Craven Cottage (Fulham)",
        cord: { x: 51.4748, y: -0.2216 }
    },
    {
        name: "Anfield (Liverpool)",
        cord: { x: 53.4308, y: -2.9609 }
    },
    {
        name: "Etihad Stadium (Manchester City)",
        cord: { x: 53.4830, y: -2.2002 }
    },
    {
        name: "Old Trafford (Manchester United)",
        cord: { x: 53.4630, y: -2.2913 }
    },
    {
        name: "St James' Park (Newcastle United)",
        cord: { x: 54.9755, y: -1.6216 }
    },
    {
        name: "City Ground (Nottingham Forest)",
        cord: { x: 52.9400, y: -1.1327 }
    },
    {
        name: "Tottenham Hotspur Stadium (Tottenham)",
        cord: { x: 51.6044, y: -0.0664 }
    },
    {
        name: "London Stadium (West Ham United)",
        cord: { x: 51.5383, y: -0.0165 }
    },
    {
        name: "Molineux Stadium (Wolverhampton)",
        cord: { x: 52.5904, y: -2.1306 }
    },
    {
        name: "Stadium of Light (Sunderland)",
        cord: { x: 54.9144, y: -1.3882 }
    },
    {
        name: "Elland Road (Leeds United)",
        cord: { x: 53.7777, y: -1.5722 }
    },
    {
        name: "Turf Moor (Burnley)",
        cord: { x: 53.7891, y: -2.2302 }
    }
];

let params = new URLSearchParams(window.location.search);
let teamName = params.get("team");
let teamLink = params.get("link");
let h1 = document.querySelector("h1");
let a = document.querySelector("#readmore");

let stadium = cords.find((s) => s.name.toLowerCase().includes(teamName.toLowerCase()));
console.log(stadium)
if(stadium) {
    let lat = stadium.cord.x;
    let lon = stadium.cord.y;
    var map = L.map("map").setView([lat, lon], 13);
     L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "© OpenStreetMap contributors",
      }).addTo(map);



    var redIcon = L.icon({
        iconUrl:
        "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
        shadowUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
    });

    // Use red marker
    L.marker([lat, lon], { icon: redIcon })
        .addTo(map)
        .bindPopup(`${stadium.name}`)
        .openPopup();

    h1.innerHTML = stadium.name;
    a.href = teamLink;
}

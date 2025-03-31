// In your JavaScript file
function generateFountainList(building) {
    let fountainList = `<h3>${building.name}</h3><h4>Water Fountains:</h4><div id="fountain-list">`;
    
    building.fountains.forEach((fountain, index) => {
        fountainList += `<button class="fountain-button" data-index="${index}" data-building="${building.name}">
                            ${fountain.description}
                         </button><br>`;
    });

    fountainList += '</div>';
    return fountainList;
}

// Loop through buildings and add markers
buildings.forEach(building => {
    let marker = L.marker([building.lat, building.lng])
        .addTo(map)
        .bindPopup(generateFountainList(building));
});

// Event listener for dynamically created buttons
document.body.addEventListener("click", function (event) {
    if (event.target.classList.contains("fountain-button")) {
        let button = event.target;
        let buildingName = button.getAttribute("data-building");
        let lat = parseFloat(button.getAttribute("data-lat"));
        let lng = parseFloat(button.getAttribute("data-lng"));
        let description = button.getAttribute("data-description");
        let tags = button.getAttribute("data-tags")?.split(",") || [];

        let isFunctional = tags[0] === "TRUE";
        let fountainType = tags[1];

        let detailedPopup = L.popup()
            .setLatLng([lat, lng])
            .setContent(
                `<h4>${buildingName}</h4>
                <p>Fountain: ${description}</p>
                <p>In Bathroom: ${isFunctional ? "Yes" : "No"}</p>
                <p>Type: ${fountainType}</p>`
            )
            .openOn(map);
    }
});


document.addEventListener("DOMContentLoaded", function () {
    let aboutButton = document.getElementById("about-button");
    let contributeButton = document.getElementById("contribute-button");
    let reportButton = document.getElementById("report-button");

    if (aboutButton) {
        aboutButton.addEventListener("click", function () {
            window.location.href = "about.html";
        });
    } else {
        console.error("About button not found.");
    }

    if (contributeButton) {
        contributeButton.addEventListener("click", function () {
            window.location.href = "contribute.html";
        });
    } else {
        console.error("Contribute button not found.");
    }

    if (reportButton) {
        reportButton.addEventListener("click", function () {
            window.location.href = "report.html";
        });
    } else {
        console.error("Report button not found.");
    }
});





  

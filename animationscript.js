//alert("hey");
window.onload = pageReady;
function pageReady () {
    //get the planet information
    var mercuryInfo = document.getElementById ("mercury-info");
    var venusInfo = document.getElementById ("venus-info");
    var earthInfo = document.getElementById ("earth-info");
    var marsInfo = document.getElementById ("mars-info");
    var jupiterInfo = document.getElementById ("jupiter-info");
    var saturnInfo = document.getElementById ("saturn-info");
    var uranusInfo = document.getElementById ("uranus-info");
    var neptuneInfo = document.getElementById ("neptune-info");
    var plutoInfo = document.getElementById ("pluto-info");
    var sunInfo = document.getElementById ("sun-info");  
    
    
    //get the planets
    var mercuryPlanet = document.getElementById("mercury");
    var venusPlanet = document.getElementById("venus");
    var earthPlanet = document.getElementById("earth");
    var marsPlanet = document.getElementById("mars");
    var jupiterPlanet = document.getElementById("jupiter");
    var saturnPlanet = document.getElementById("saturn");
    var uranusPlanet = document.getElementById("uranus");
    var neptunePlanet = document.getElementById("neptune");
    var plutoPlanet = document.getElementById("pluto");
    var sunStar = document.getElementById("sun");
    
    //get the spacecraft
    //var spacecraftPicture = document.getElementsByClassName("space-probe");
    //var spacecraftInfo = document.getElementsByClassName("fact-sheet");
    var parkerProbe = document.getElementById("parker-probe");
    var junoSpacecraft = document.getElementById("juno");
    var galileoSpacecraft = document.getElementById("galileo");
    var cassiniSpacecraft = document.getElementById("cassini");
    var newHorizons = document.getElementById("new-horizons");
    var voyagerSpacecraft = document.getElementById("voyager");
    var apolloSpacecraft = document.getElementById("apollo");
    
    //get the spacecraftfactsheet
    var parkerInfo = document.getElementById("parker-probe-info");
    var junoInfo = document.getElementById("juno-info");
    var galileoInfo = document.getElementById("galileo-info");
    var cassiniInfo = document.getElementById("cassini-info");
    var newHorizonsInfo = document.getElementById("new-horizons-info");
    var voyagerInfo = document.getElementById("voyager-info");
    var apolloInfo = document.getElementById("apollo-info");

    
    //get all planet divs
    var allPlanetInfo = document.getElementById("planets-information");
    
    //set up listener
    //planet listener
    mercuryPlanet.onclick = displayInfo1;
    venusPlanet.onclick = displayInfo2;
    earthPlanet.onclick = displayInfo3;
    marsPlanet.onclick = displayInfo4;
    jupiterPlanet.onclick = displayInfo5;
    saturnPlanet.onclick = displayInfo6;
    uranusPlanet.onclick = displayInfo7;
    neptunePlanet.onclick = displayInfo8;
    plutoPlanet.onclick = displayInfo9;
    sunStar.onclick = displayInfo10;
    
    //spacecraft listener
    parkerProbe.onclick = displayFactsheet1;
    junoSpacecraft.onclick = displayFactsheet2;
    galileoSpacecraft.onclick = displayFactsheet3;
    cassiniSpacecraft.onclick = displayFactsheet4;
    newHorizons.onclick = displayFactsheet5;
    voyagerSpacecraft.onclick = displayFactsheet6;
    apolloSpacecraft.onclick = displayFactsheet7;
    
    //function
    function displayInfo1 () {
            mercuryInfo.style.display = "block";
            allPlanetInfo.style.display = "block";
    }
    function displayInfo2 () {
            venusInfo.style.display = "block";
            allPlanetInfo.style.display = "block";
    }
    function displayInfo3 () {
            earthInfo.style.display = "block";
            allPlanetInfo.style.display = "block";
    }
    function displayInfo4 () {
            marsInfo.style.display = "block";
            allPlanetInfo.style.display = "block";
    }
    function displayInfo5 () {
            jupiterInfo.style.display = "block";
            allPlanetInfo.style.display = "block";
    }
    function displayInfo6 () {
            saturnInfo.style.display = "block";
            allPlanetInfo.style.display = "block";
    }
    function displayInfo7 () {
            uranusInfo.style.display = "block";
            allPlanetInfo.style.display = "block";
    }
    function displayInfo8 () {
            neptuneInfo.style.display = "block";
            allPlanetInfo.style.display = "block";
    }
    function displayInfo9 () {
            plutoInfo.style.display = "block";
            allPlanetInfo.style.display = "block";
    }
     function displayInfo10 () {
            sunInfo.style.display = "block";
            allPlanetInfo.style.display = "block";
    }
    
    //display spacecraft factsheet
    function displayFactsheet1 () {
        parkerInfo.style.display = "block";
    }
    function displayFactsheet2 () {
        junoInfo.style.display = "block"
    }
     function displayFactsheet3 () {
        galileoInfo.style.display = "block"
    }
     function displayFactsheet4 () {
        cassiniInfo.style.display = "block"
    }
     function displayFactsheet5 () {
        newHorizonsInfo.style.display = "block"
    }
    function displayFactsheet6 () {
        voyagerInfo.style.display = "block"
    }
    function displayFactsheet7 () {
        apolloInfo.style.display = "block"
    }
    //future step: factor the code using for loop
    spacecraftPicture.onclick = displayFactsheet;
    function displayFactsheet () {
        for (var i=0; i <= spacecraftInfo.length; i++) {
           spacecraftInfo[i].style.display = "block";  
        }
    }
        
}
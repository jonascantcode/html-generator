// Hent elementer fra DOM-en
var fargeInput = document.getElementById("farge-input");
var fargeButton = document.getElementById("farge-button");
var elementInput = document.getElementById("element-input");
var elementButton = document.getElementById("element-button");
var contentInput = document.getElementById("content-input");
var elementHome = document.getElementById("element-home")
//
var container = document.querySelector(".container");
var containerHat = document.querySelector("#container-hat")


// Lytt etter klikk på knappen for å endre bakgrunnsfarge
fargeButton.addEventListener("click", function () {
    var farge = fargeInput.value;
    document.body.style.backgroundColor = farge;
});

// Legg til nytt HTML-element når knappen klikkes
elementButton.addEventListener("click", function () {
    console.log("test");
    var elementType = elementInput.value;
    var content = contentInput.value;
    var place = elementHome.value;
    // var placed = place.options[place.selectedIndex].value;
    console.log(place);
    var newElement = document.createElement(elementType);
    // newElement.textContent = `Dette er et nytt ${elementType} element`;
    newElement.textContent = content;
    console.log("test2");

    // Legg til style for det nye elementet
    newElement.style.padding = "20px";
    newElement.style.marginBottom = "10px";
    newElement.style.backgroundColor = "#f2f2f2";
    newElement.style.borderRadius = "5px";
    console.log("test3");

    // Legg til det nye elementet i DOM-en
    if (place == "topp") {
        containerHat.appendChild(newElement);
    } else {
        container.appendChild(newElement);
    }
    console.log("test4");
});

function showCoords(event) {
        let x = event.clientX;
        let y = event.clientY;
        let text = "X coords: " + x + ", Y coords: " + y;
        document.getElementById("coordinates").innerHTML = text;

}
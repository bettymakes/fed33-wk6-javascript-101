// Verify whether your javascript is connected
console.log("Hello");

var temp = 40;
// Get the temperature element
var tempElement = document.getElementById('temp');
// Update the temperature element's text to the value in `temp`
tempElement.innerHTML = temp + "&deg;C";

// Get the body element
var bodyElement = document.getElementById('weather-app');

// Get the paragraph element
var detailsElement = document.getElementById('details');


if (temp >= 20) {
  bodyElement.style.backgroundColor = '#fab1a0';
  detailsElement.innerText = "Yikes! It's too hot 🔥."
  console.log("It's too hot");
}
else if (temp >= 0) {
  bodyElement.style.backgroundColor = '#55efc4';
  detailsElement.innerText = "It's just right 👍."
  console.log("It's just right");
}
else {
  bodyElement.style.backgroundColor = '#74b9ff';
  detailsElement.innerText = "Brr! It's too cold ❄️."
  console.log("It's too cold");
}

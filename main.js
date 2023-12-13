function updateHeading() {
  var input = document.getElementById("myInput");
  var heading = document.getElementById("myHeading");
  heading.textContent = input.value || "Yourname";
}
// Add event listener to set default value in h1 tag when page loads
window.addEventListener("load", function () {
  var heading = document.getElementById("myHeading");
  var input = document.getElementById("myInput");
  heading.textContent = input.value || "Yourname";
});

//Change color

var currentColor = "neon-red";

function changeNeonColor(color) {
  var heading = document.getElementById("myHeading");

  // Remove existing neon color class
  heading.classList.remove(currentColor);

  // Add the appropriate neon color class based on the button clicked
  if (color === "red") {
    heading.classList.add("neon-red");
    currentColor = "neon-red";
  } else if (color === "pink") {
    heading.classList.add("neon-pink");
    currentColor = "neon-pink";
  } else if (color === "yellow") {
    heading.classList.add("neon-yellow");
    currentColor = "neon-yellow";
  } else if (color === "blue") {
    heading.classList.add("neon-blue");
    currentColor = "neon-blue";
  } else if (color === "skyblue") {
    heading.classList.add("neon-skyblue");
    currentColor = "neon-skyblue";
  } else if (color === "green") {
    heading.classList.add("neon-green");
    currentColor = "neon-green";
  }
}

// JavaScript function to change the font family

window.onload = function() {
    var defaultFont = "Vanilla Macchiato";
    var text = document.getElementById("myHeading");
    text.style.fontFamily = defaultFont;
  };
  
  function changeFont(button) {
    var font = button.getAttribute("data-value");
    var text = document.getElementById("myHeading");
    var inputText = document.getElementById("myInput");
    inputText.style.fontFamily = font;
    text.style.fontFamily = font;
  }
  
  
//Update Price

// const price =()=>{
//   let neonChar = document.getElementById("myHeading");
//   let textContent = neonChar.textContent;
//   let numChar = textContent.length;

//   if (numChar === 0) {
//     let price = document.getElementById('price');
//     let newPrice = 00;
//   }
//   console.log(numChar)
// }

// Function to update the heading and calculate price
// function updateHeading() {
//   var userInput = document.getElementById('myInput').value;
//   var characterCount = userInput.length;
//   var price = 10 * 15 * 4 * characterCount;

//   document.getElementById('myHeading').textContent = userInput;
//   document.getElementById('price').textContent = '₹ ' +  price;
// }

// // Function to handle the initial page load
// function initializePage() {
//   document.getElementById('myInput').addEventListener('input', updateHeading);
// }

// // Call the initializePage function when the DOM is loaded
// document.addEventListener('DOMContentLoaded', initializePage);

function updateHeading() {
  var userInput = document.getElementById('myInput').value;
  var characterCount = userInput.length;
  var price = 10 * 15 *4 * characterCount;

  document.getElementById('myHeading').textContent = userInput;
  document.getElementById('price').textContent = '₹ ' + formatPrice(price);
}

function formatPrice(price) {
  var formattedPrice = price.toLocaleString('en-IN');
  return formattedPrice;
}
//Update width
function updateWidth() {
  var userInput = document.getElementById('myInput').value;
  var width1 = document.getElementById('width1');
  var width2 = document.getElementById('width2');
  var width3 = document.getElementById('width3');

  var widthValue1 = '"' + userInput.length * 3 + '"';
  var widthValue2 = '"' + userInput.length * 4 + '"';
  var widthValue3 = '"' + userInput.length * 5 + '"';

  width1.textContent = widthValue1;
  width2.textContent = widthValue2;
  width3.textContent = widthValue3;
}

// Call the updateWidth function when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('myInput').addEventListener('input', updateWidth);
});

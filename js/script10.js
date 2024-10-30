// script10.js

// Get references to the image and button elements
const displayImage = document.getElementById('displayImage');
const imageButton = document.getElementById('imageButton');

// Array of image sources
const images = [
    '../img/Tao2.jpg',
    '../img/Tao.png',  // Add more image paths as needed
    '../img/barcaxan.jpg'
];

let currentImageIndex = 0;

// Function to change the image
function changeImage() {
    // Increment the index to the next image
    currentImageIndex = (currentImageIndex + 1) % images.length;
    // Update the image source
    displayImage.src = images[currentImageIndex];
}

// Add event listener to the button
imageButton.addEventListener('click', changeImage);

// Optional: Change background color function
const colorButton = document.getElementById('colorButton');

function changeBackgroundColor() {
    document.body.style.backgroundColor = 
        '#' + Math.floor(Math.random()*16777215).toString(16); // Random color
}

colorButton.addEventListener('click', changeBackgroundColor);

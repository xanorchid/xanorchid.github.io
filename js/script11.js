// Initialize a variable to track the darkening state
let isDarkened = false;

// Function to display the selected image
function displayImage(src) {
    const displayedImg = document.querySelector('.displayed-img'); // Select the displayed image
    displayedImg.src = src; // Update the displayed image source
}

// Function to toggle the darkening effect
function toggleDarkenEffect() {
    const displayedImg = document.querySelector('.displayed-img'); // Select the displayed image
    const darkenButton = document.getElementById('darken-button'); // Select the button

    isDarkened = !isDarkened; // Toggle the state

    // Apply or remove the darkening effect
    displayedImg.style.filter = isDarkened ? 'brightness(50%)' : 'none'; 
    darkenButton.textContent = isDarkened ? 'Lighten' : 'Darken'; // Change button text
}

// Add event listener to the button
document.getElementById('darken-button').addEventListener('click', toggleDarkenEffect);

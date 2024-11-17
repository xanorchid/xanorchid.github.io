// API endpoint for fetching a random Chuck Norris joke
const apiEndpoint = 'https://api.chucknorris.io/jokes/random';

// Function to get a joke
function getJoke() {
    console.log("Button clicked! Fetching a joke...");
    fetch(apiEndpoint)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(data.value); // Log the joke to the console
            displayRes(data.value); // Display the joke in the paragraph
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
            alert('Failed to fetch a joke. Please try again.');
        });
}

// Function to display the fetched joke
function displayRes(joke) {
    const jokeDisplay = document.getElementById('jokeDisplay');
    jokeDisplay.textContent = joke; // Update the paragraph with the joke
}

// Event listener for button click
document.getElementById('jokeButton').addEventListener('click', getJoke);

// Fetch a joke on page load
window.onload = getJoke;


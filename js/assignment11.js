document.getElementById('comicButton').addEventListener('click', getRandomComic);

function getRandomComic() {
    // Generate a random comic number (1 to 3000)
    const comicNumber = Math.floor(Math.random() * 3000) + 1;
    
    // Construct the URL using the proxy service
    const url = `https://corsproxy.io/?https://xkcd.com/${comicNumber}/info.0.json`;
    
    // Fetch the comic data
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Update the comic title, image, alt text, and date in the HTML
            document.getElementById('comicTitle').innerText = data.title; // Set the comic title
            document.getElementById('comicImage').src = data.img; // Set the comic image source
            document.getElementById('comicImage').alt = data.alt; // Set the alt text for the image
            document.getElementById('comicDate').innerText = `Published on: ${data.day}/${data.month}/${data.year}`; // Set the publication date
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}
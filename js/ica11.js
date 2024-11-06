document.addEventListener('DOMContentLoaded', () => {
     // Fortune Teller Function
     function tellFortune(children, partnerName, location, jobTitle) {
        const fortune = `You will be a ${jobTitle} in ${location}, and married to ${partnerName} with ${children} kids.`;
        document.getElementById('fortune-output').innerHTML += `<p>${fortune}</p>`;
    }

    // Call the tellFortune function three times with different values
    tellFortune(2, "Alice", "New York", "Software Engineer");
    tellFortune(3, "Bob", "Los Angeles", "Graphic Designer");
    tellFortune(1, "Charlie", "Chicago", "Teacher");
});
    
    
    // Dog Age Calculator
    document.getElementById('calculate-button').addEventListener('click', () => {
        const dogAge = parseInt(document.getElementById('dog-age').value);
        const dogAgeInDogYears = dogAge * 7; // Simple conversion
        document.getElementById('dog-age-output').innerText = `Dog's age in dog years: ${dogAgeInDogYears}`;
    });

    // Number Reverser
    document.getElementById('reverse-button').addEventListener('click', () => {
        const number = document.getElementById('number-input').value;
        const reversedNumber = number.split('').reverse().join('');
        document.getElementById('number-output').innerText = `Reversed number: ${reversedNumber}`;
    });

    // Alphabetical Order String
    document.getElementById('sort-button').addEventListener('click', () => {
        const inputString = document.getElementById('string-input').value;
        const sortedString = inputString.split(' ').sort().join(' ');
        document.getElementById('string-output').innerText = `Sorted string: ${sortedString}`;
    });

    // Capitalize First Letter of Each Word
    document.getElementById('capitalize-button').addEventListener('click', () => {
        const sentence = document.getElementById('capitalize-input').value;
        const capitalizedSentence = sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        document.getElementById('capitalize-output').innerText = `Capitalized sentence: ${capitalizedSentence}`;
    });

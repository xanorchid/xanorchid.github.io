const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

// Storing the big long string of text
const storyText = "It was a spooky evening, with fog lingering and owls hooting, so :insertX: went for a jog. When they got to :insertY:, they stared in horror for a few moments, then :insertZ:. Bob saw the whole thing, but was not surprised — :insertX: is a werewolf, and there was a full moon";

// Storing the first set of three strings in an array
const insertX = [
  "Lexi the Clown",
  "Queen Latifa",
  "P Diddy"
];

// Storing the second set of three strings in an array
const insertY = [
  "eldora",
  "the edge of the cliff",
  "the sundown saloon"
];

// Storing the third set of three strings in an array
const insertZ = [
  "lit up in flames",
  "devoured his soul and did a flip",
  "melted into a sea of blood"
];

randomize.addEventListener('click', result);

function result() {
  // Create a new story based on the original storyText
  let newStory = storyText;

  // Get random items from the arrays
  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  // Replace placeholders with random items
  newStory = newStory.replace(/:insertX:/g, xItem);
  newStory = newStory.replace(/:insertY:/g, yItem);
  newStory = newStory.replace(/:insertZ:/g, zItem);

  // Check if a custom name has been entered
  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace(/Bob/g, name);
  }

  // Check if the UK radio button is selected
  if (document.getElementById("uk").checked) {
    const weight = Math.round(300 / 14) + ' stone'; // Convert pounds to stones
    const temperature = Math.round((94 - 32) * 5 / 9) + ' centigrade'; // Convert Fahrenheit to centigrade

    // Replace the weight and temperature in the story
    newStory = newStory.replace(/94 fahrenheit/g, temperature);
    newStory = newStory.replace(/300 pounds/g, weight);
  }

  // Update the story text content
  story.textContent = newStory;
  story.style.visibility = 'visible';
}

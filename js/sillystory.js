const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

// Storing the big long string of text
const storyText = "It was 94 fahrenheit outside, so :insertX: went for a walk. When they got to :insertY:, they stared in horror for a few moments, then :insertZ:. Bob saw the whole thing, but was not surprised — :insertX: weighs 300 pounds, and it was a hot day.";

// Storing the first set of three strings in an array
const insertX = [
  "Willy the Goblin",
  "Big Daddy",
  "Father Christmas"
];

// Storing the second set of three strings in an array
const insertY = [
  "the soup kitchen",
  "Disneyland",
  "the White House"
];

// Storing the third set of three strings in an array
const insertZ = [
  "spontaneously combusted",
  "melted into a puddle on the sidewalk",
  "turned into a slug and crawled away"
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
document.querySelector('.randomize').addEventListener('click', generateStory);

function generateStory() {
    // Get the custom name input
    const customName = document.getElementById('customname').value;
    const name = customName ? customName : 'Bob';

    // Check the selected radio button
    const isUK = document.getElementById('uk').checked;

    // Define the story template
    let story = `Once upon a time, ${name} was walking in the park. Suddenly, a giant chicken appeared and started dancing. It weighed 100 pounds and was 6 feet tall!`;

    // Convert units if UK is selected
    if (isUK) {
        story = story.replace('100 pounds', '45 kilograms');
        story = story.replace('6 feet', '1.83 meters');
    }

    // Display the story
    const storyParagraph = document.querySelector('.story');
    storyParagraph.textContent = story;
    storyParagraph.style.visibility = 'visible'; // Make the story visible
}
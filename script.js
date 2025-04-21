// Header
document.getElementById("Header").textContent = "Welcome To The Zombies World";

// Initialize the current state to track the user's position in the story
let currentState = 'start';

// Function to render the current story and choices based on the current state
function renderQuestion() {
    const questionContainer = document.getElementById('question');
    const answersContainer = document.getElementById('answers');

    // Clear previous content
    answersContainer.innerHTML = '';
    
    // Switch-case structure to navigate through the story based on currentState
    switch (currentState) {
        case 'start':
            questionContainer.textContent = 'You are trapped in a school...';
            addAnswerButton('Escape through the vents', 'escape');
            addAnswerButton('Barricade the classroom', 'barricade');
            break;
        case 'escape':
            questionContainer.textContent = 'You chose to escape through the vents. What next?';
            addAnswerButton('Trust another student', 'trust');
            addAnswerButton('Go your own way', 'distrust');
            break;
        case 'barricade':
            questionContainer.textContent = 'You barricaded the classroom. What next?';
            addAnswerButton('Trust another student', 'trust');
            addAnswerButton('Go your own way', 'distrust');
            break;
        case 'trust':
            questionContainer.textContent = 'You trusted the student. Will you save them?';
            addAnswerButton('Sacrifice them to escape', 'sacrifice');
            addAnswerButton('Try to save everyone', 'save');
            break;
        case 'distrust':
            questionContainer.textContent = 'You decided to go your own way. Will you survive?';
            addAnswerButton('Sacrifice another to escape', 'sacrifice');
            addAnswerButton('Risk everything to save everyone', 'save');
            break;
        case 'sacrifice':
            questionContainer.textContent = 'You sacrificed another student to escape. You survived... but at what cost?';
            addAnswerButton('Restart the game', 'start');
            break;
        case 'save':
            questionContainer.textContent = 'You tried to save everyone. You all made it out alive!';
            addAnswerButton('Restart the game', 'start');
            break;
        default:
            questionContainer.textContent = 'Your adventure begins now...';
            addAnswerButton('Escape through the vents', 'escape');
            addAnswerButton('Barricade the classroom', 'barricade');
    }
}

function addAnswerButton(answerText, nextState) {
    const button = document.createElement('button');
    button.textContent = answerText;

    // Add ARIA role and properties to improve accessibility
    button.setAttribute('role', 'button');
    button.setAttribute('aria-label', answerText);

    // Ensure the button is focusable for keyboard navigation
    button.tabIndex = 0;

    // Add event listener to handle the button click
    button.addEventListener('click', function() {
        currentState = nextState;
        renderQuestion();
    });

    // adds the dynamically created button
    document.getElementById('answers').appendChild(button);
}

// Display the first question when the page is loaded
renderQuestion();

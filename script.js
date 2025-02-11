document.getElementById('proposalButton').addEventListener('click', function() {
    startProposal();
});

function startProposal() {
    const proposalDiv = document.getElementById('proposal');
    proposalDiv.innerHTML = `
        <p>Will you be my Valentine, today and forever? 💖</p>
        <button id="yesButton">Yes! 💖</button>
        <button id="noButton">Nah ah ... 😅</button>
    `;

    document.getElementById('yesButton').addEventListener('click', function() {
        proposalDiv.innerHTML = '<p>Yay! You just made me the happiest person in the world! 🥰💖</p>';
    });

    document.getElementById('noButton').addEventListener('click', handleNoClick);
}

function handleNoClick() {
    let funnyMessages = [
        "Are you sure? Think again! 😏",
        "No isn't an option! 😆",
        "Try again... maybe hit 'Yes' this time? 😘",
        "C'mon, don't break my heart! 💔",
        "You’re playing hard to get, huh? 🤭",
        "You're testing my patience... but I still love you! 😜",
        "I'll wait... but you know the right answer! 😘",
        "The 'No' button is just decoration. Press 'Yes'! 😆",
        "Do you really want to say no to this cute face? 🥺",
        "Fine... but I'll ask again! 😏",
        "You can't escape my love! 🥰",
        "Resistance is futile, say YES! 😜",
        "Let's not make this harder than it needs to be! 😅",
        "I'll keep asking until you say yes! 😘",
        "I believe in second chances... and third... and fourth! 😂"
    ];
    let randomMessage = funnyMessages[Math.floor(Math.random() * funnyMessages.length)];

    const proposalDiv = document.getElementById('proposal');
    proposalDiv.innerHTML = `
        <p>${randomMessage}</p>
        <button id="yesButton">Fine, Yes! 💖</button>
        <button id="noButton">Noo... 😅</button>  <!-- No button appears again -->
    `;

    document.getElementById('yesButton').addEventListener('click', function() {
        proposalDiv.innerHTML = '<p>Yay! You just made me the happiest person in the world! 🥰💖</p>';
    });

    document.getElementById('noButton').addEventListener('click', handleNoClick); // No button keeps appearing!
}
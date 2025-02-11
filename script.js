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
        <button id="noButton">Noo... 😅</button>
    `;

    document.getElementById('yesButton').addEventListener('click', function() {
        proposalDiv.innerHTML = '<p>Yay! You just made me the happiest person in the world! 🥰💖</p>';
    });

    document.getElementById('noButton').addEventListener('click', handleNoClick);
}

document.getElementById('musicButton').addEventListener('click', function() {
    let music = document.getElementById('romanticMusic');
    if (music.paused) {
        music.play();
        this.textContent = "⏸ Pause Music";
    } else {
        music.pause();
        this.textContent = "🎶 Play Music";
    }
});

// Auto-play music (muted at first for user-friendly experience)
window.onload = function() {
    let music = document.getElementById('romanticMusic');
    music.volume = 0.5;

    // Show each message one by one
    let messages = ['message1', 'message2', 'message3', 'message4'];
    let index = 0;

    function showNextMessage() {
        if (index > 0) {
            document.getElementById(messages[index - 1]).style.display = 'none';
        }
        if (index < messages.length) {
            document.getElementById(messages[index]).style.display = 'block';
            setTimeout(showNextMessage, 3000); // Show each message for 3 seconds
            index++;
        } else {
            // Hide preloader and show main content
            setTimeout(() => {
                document.getElementById('preloader').classList.add('hidden');
                document.getElementById('mainContent').style.display = 'block';
            }, 2000);
        }
    }

    showNextMessage(); // Start message sequence
};

function generateCharacter() {
    fetch('names.txt')
        .then(response => response.text())
        .then(names => {
            const name = getRandomValue(names.split('\n'));
            document.getElementById('name').value = name.trim();
        });

    fetch('personality.txt')
        .then(response => response.text())
        .then(personalities => {
            const personality = getRandomValue(personalities.split('\n'));
            document.getElementById('personality').value = personality.trim();
        });

    fetch('goals.txt')
        .then(response => response.text())
        .then(goals => {
            const goal = getRandomValue(goals.split('\n'));
            document.getElementById('goal').value = goal.trim();
        });

    fetch('flaws.txt')
        .then(response => response.text())
        .then(flaws => {
            const flaw = getRandomValue(flaws.split('\n'));
            document.getElementById('flaw').value = flaw.trim();
        });
}

function resetCharacter() {
    document.getElementById('name').value = '';
    document.getElementById('personality').value = '';
    document.getElementById('goal').value = '';
    document.getElementById('flaw').value = '';
}

function getRandomValue(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

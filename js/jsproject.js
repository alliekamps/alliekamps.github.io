let volumeLevel = 0;

function moveHere(element) {
    alert('Moved to ' + element.innerText);
    setTimeout(() => {
        document.querySelectorAll('.path').forEach(p => p.style.backgroundColor = '#4CAF50');
    }, 3000);
}

function adjustVolume(change) {
    volumeLevel += change;
    console.log('Volume adjusted to: ', volumeLevel);
    alert('Volume adjusted to ' + volumeLevel + '. Resetting maze...');
    document.getElementById('volume-display').innerText = 'Volume: ' + volumeLevel;
    resetMaze();
}

function resetMaze() {
    document.querySelectorAll('.path').forEach(p => {
        if (!p.id.includes("volume")) {
            p.style.backgroundColor = 'green';
        }
    });
}

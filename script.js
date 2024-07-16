document.getElementById('continue-button').addEventListener('click', function() {
    document.getElementById('instructions').style.display = 'none';
    document.getElementById('link-instructions').style.display = 'block';
});

document.getElementById('done-button').addEventListener('click', function() {
    window.location.href = 'vr_home.html';
});

function openGame() {
    document.getElementById('game-iframe-container').style.display = 'flex';
}

function closeGame() {
    document.getElementById('game-iframe-container').style.display = 'none';
}

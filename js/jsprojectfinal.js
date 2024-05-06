const indicator = document.getElementById('volume-indicator');
const container = document.querySelector('.volume-control-container');

indicator.addEventListener('dragstart', (event) => {
    event.dataTransfer.setData("text", event.target.id);
});

container.addEventListener('dragover', (event) => {
    event.preventDefault();
});

container.addEventListener('drop', (event) => {
    event.preventDefault();
    const id = event.dataTransfer.getData("text");
    const dropX = event.clientX - container.offsetLeft;
    indicator.style.left = `${Math.max(0, Math.min(container.offsetWidth - indicator.offsetWidth, dropX))}px`;

    const volumeLevel = Math.ceil((dropX / container.offsetWidth) * 10);
    alert(`Your current volume is now: ${volumeLevel}/10`);
});

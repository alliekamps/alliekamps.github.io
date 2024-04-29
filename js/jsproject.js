function moveHere(element) {
   
    alert('Moved to ' + element.innerText);
    
    setTimeout(() => {
        document.querySelectorAll('.path').forEach(p => p.style.backgroundColor = '#4CAF50');
    }, 3000);
}

function adjustVolume(change) {
    console.log('Volume adjusted by: ', change);
    alert('Volume adjusted by ' + change + '. Resetting maze...');
   
}

let currentIndex = 0;
const bilder = [
    'img/pic/Alaska.jpg', 'img/pic/Anime.jpg', 'img/pic/Atmosphere.jpg',
    'img/pic/Blue-Tit.jpg', 'img/pic/Hurricane.jpg', 'img/pic/Lake.jpg',
    'img/pic/Moorente.jpg', 'img/pic/Sea.jpg', 'img/pic/Snow-Bunting.jpg',
    'img/pic/Snow-Leopard.jpg', 'img/pic/Travel.jpg', 'img/pic/Winter.jpg'
];

function pic() {
    const container = document.getElementById('container');
    container.innerHTML = '';
    for (let i = 0; i < bilder.length; i++) {
        const door = document.createElement('div');
        door.style.backgroundImage = `url('${bilder[i]}')`;
        door.style.backgroundSize = 'cover';
        door.style.backgroundPosition = 'center';
        door.tabIndex = 0;
        door.onclick = function() {
            openOverlay(i);
        };
        door.onkeydown = function(event) {
            if (event.key === 'Enter') {
                openOverlay(i);
            }
        };
        container.appendChild(door);
    }
}



function openOverlay(i) {
    currentIndex = i;
    const dialog = document.getElementById('overlay');
    
    updateOverlay();
    dialog.showModal(); 
}

function closeOverlay() {
    const dialog = document.getElementById('overlay');
    dialog.close(); 
}



document.addEventListener('keydown', (event) => {
    const dialog = document.getElementById('overlay');
    

    if (!dialog.open) return;

    if (event.key === 'ArrowRight') {
        nextImage();
    } else if (event.key === 'ArrowLeft') {
        prevImage();
    }

});



function updateOverlay() {
    const img = document.getElementById('overlay-img');
    const counter = document.getElementById('image-counter');
    const title = document.getElementById('overlay-title');
    
    let currentPath = bilder[currentIndex];
    img.src = currentPath;
    counter.innerText = `${currentIndex + 1} / ${bilder.length}`;
    
    let fileName = currentPath.split('/').pop().split('.')[0];
    title.innerText = fileName;
}

function nextImage() {
    currentIndex = (currentIndex + 1) % bilder.length;
    updateOverlay();
}

function prevImage() {
    currentIndex = (currentIndex - 1 + bilder.length) % bilder.length;
    updateOverlay();
}
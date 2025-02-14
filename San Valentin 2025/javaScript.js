document.getElementById("yes").addEventListener("click", function() {
    showImage('https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMjkzYWk4c3pzb2RianF1NWhxaTdmZWEwdzk4ZzBjcTNkeXBzZ3NxZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/nUQm3AirLKdRBq1yhv/giphy.gif'); 
});

document.getElementById("no").addEventListener("click", function() {
    showImage('img/imagen.jpg');
});

document.getElementById("close-overlay").addEventListener("click", function() {
    closeOverlay();
});

function showImage(imageSrc) {
    const overlay = document.getElementById("overlay");
    const overlayImage = document.getElementById("overlay-image");
    const overlayVideo = document.getElementById("overlay-video");

    // Esconde el video si ya está visible
    overlayVideo.style.display = "none";
    
    overlayImage.src = imageSrc;
    overlayImage.style.display = "block";  // Muestra la imagen
    overlay.style.display = "flex"; 
}

function showVideo(videoSrc) {
    const overlay = document.getElementById("overlay");
    const overlayImage = document.getElementById("overlay-image");
    const overlayVideo = document.getElementById("overlay-video");

    // Esconde la imagen si está visible
    overlayImage.style.display = "none";
    
    overlayVideo.src = videoSrc;
    overlayVideo.style.display = "block";  // Muestra el video
    overlay.style.display = "flex"; 
}

function closeOverlay() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("overlay-video").style.display = "none";
    document.getElementById("overlay-image").style.display = "none";
}

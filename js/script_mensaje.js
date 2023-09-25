document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('confirmacionMensaje').style.display = 'block';
    setTimeout(function() {
        location.reload();
    }, 3000);
});

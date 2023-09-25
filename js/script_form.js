document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let nombre = document.getElementById('nombre').value.trim();
    let email = document.getElementById('email').value.trim();
    let mensaje = document.getElementById('mensaje').value.trim();
    if (!nombre || !email || !mensaje) {
        alert('Por favor, completa todos los campos.');
        return;
    }
    if (!isValidEmail(email)) {
        alert('Por favor, ingresa un correo electrónico válido.');
        return;
    }
    alert('Formulario enviado correctamente.');
    this.reset();
});
function isValidEmail(email) {
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
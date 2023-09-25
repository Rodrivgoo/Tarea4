var miEdad = 20;

function calcularDiferenciaEdad() {
    var otraEdad = parseInt(document.getElementById('otraEdad').value);

    if (!isNaN(otraEdad)) {
        var diferencia = Math.abs(miEdad - otraEdad);
        document.getElementById('resultadoDiferencia').innerHTML = 'La diferencia de edad es ' + diferencia + ' años.';
    } else {
        document.getElementById('resultadoDiferencia').innerHTML = 'Por favor ingresa un numero válido.';
    }
}

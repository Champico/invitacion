const fechaObjetivo = new Date("2026-01-10T14:00:00").getTime();

function actualizarContador() {
    const ahora = new Date().getTime();
    const diferencia = fechaObjetivo - ahora;

    if (diferencia <= 0) {
        document.querySelector('.contador').textContent = "¡Es hoy!";
        return;
    }

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diferencia / (1000 * 60)) % 60);
    const segundos = Math.floor((diferencia / 1000) % 60);

    document.getElementById("dias").textContent = String(dias).padStart(2, '0');
    document.getElementById("horas").textContent = String(horas).padStart(2, '0');
    document.getElementById("minutos").textContent = String(minutos).padStart(2, '0');
    document.getElementById("segundos").textContent = String(segundos).padStart(2, '0');
}

actualizarContador();
setInterval(actualizarContador, 1000);

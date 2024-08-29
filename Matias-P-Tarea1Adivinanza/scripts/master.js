
function randomEntreCeroYCien(min, max) {
    num = Math.random() * (max - min) + min
    return Math.round(num);
}

function adivinanza() {
    let numeroSecreto = randomEntreCeroYCien(1, 100);
    let intentos = 0;
    let nombreJugador = prompt("ingrese su nombre para empezár a jugar: ");
    let correcto = false;

    while (!correcto) {
        let conjetura = parseInt(prompt("adivina un número entre 1 y 100:"));
        
        intentos++;

        if (conjetura === numeroSecreto) {
            alert(`${nombreJugador} adivinaste el número ${numeroSecreto} en ${intentos} intentos`);
            correcto = true;
        } else if (conjetura > numeroSecreto) {
            alert("conjetura muy alta. intenta otro");
        } else if (conjetura < numeroSecreto) {
            alert("conjetura muy baja. intenta otro");
        }
    }

    let jugador = {
        nombre: nombreJugador,
        intentos: intentos
    };

    console.log(jugador);
}

adivinanza(); //PARA INICIAR EL JUEGOOOOOO

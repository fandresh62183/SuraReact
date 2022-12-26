function iniciajuego() {
  let botonMascotaJugador = document.getElementById('botonmascota');
  botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador);
}
function seleccionarMascotaJugador() {
  let inputdragon = document.getElementById('dragon');
  let inputBallena = document.getElementById('Ballena');
  let inputSerpiente = document.getElementById('Serpiente');
  let spainmascotaJugador = document.getElementById('mascotaJugador')

  if (inputdragon.checked) {
    spainmascotaJugador.innerHTML = 'dragon'
    //alert('selecionaste a Dragon');
  } else if (inputBallena.checked) {
    spainmascotaJugador.innerHTML = 'Ballena'
    //alert('selecionaste a Ballena');
  } else if (inputSerpiente.checked) {
    spainmascotaJugador.innerHTML = 'Serpiente'
    //alert('selecionaste a Serpiente');
  }else{
     alert('Seleciona una mascota')
  }
  seleccionarMascotaEnemigo() 
}
function seleccionarMascotaEnemigo(){
    let ataqueAleatorio = aleatorio(1,3)
    let spainmascotaEnemigo = document.getElementById('mascotaEnemigo')
    

    if (ataqueAleatorio == 1) {
        spainmascotaEnemigo.innerHTML = 'dragon'
        // dragon
    }else if (ataqueAleatorio == 2) {
        spainmascotaEnemigo.innerHTML = 'Ballena'
        // Ballena
    }else {
        spainmascotaEnemigo.innerHTML = 'Serpiente'
        // Serpiente
    }
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

window.addEventListener("load", iniciajuego);

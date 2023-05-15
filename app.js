const cuadrado = document.querySelectorAll(".cuadrado");
const tiempofaltante = document.querySelector("#tiempo");
let puntaje = document.getElementById("puntaje");

let resultado = 0;
let tiempoaactual = tiempofaltante.textContent;

function cuadradoazar {
  cuadrado.forEach(nombredeclase => {
    nombredeclase.classList.remove("topo");
  })
  let posicionalzar = cuadrado [Math.floor (Math.random() * 9)]
  posicionalazar.classList.add("topo");
  posiciontopo.posicionalazar.Id
}

cuadrado.forEach (identificador => {
  identificador.addEventListener("click" () => {
    if (identificador.Id === posiciontopo) {
      resultado = resultado + 1;
      puntaje.textContent = resultado;
      posiciontopo = null;
    }
  })
})
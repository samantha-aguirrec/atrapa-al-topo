const cuadrado = document.querySelectorAll(".cuadrado");
const tiempofaltante = document.querySelector("#Tiempo");
let puntaje = document.getElementById("puntaje");

let resultado = 0;
let tiempoactual = tiempofaltante.textContent;

function cuadradoazar { 
  cuadrado.forEach(nombredeclase => { 
    nombredeclase.classList.remove("topo");
     })
     let posicionalazar = cuadrado [Math.floor (Math.randon() *9)]
     posicionalazar.classlist.add("topo");
     posiciontopo.posicionalazar.Id
}
cuadrado.forEach (identificador => { 
  identificador.addEventListener("click" () => { 
    if (identificador.Id === posiciontopo) { 
      resultado = resultado + 1;
      puntaje.textcontent = resultado;
      posiciontopo = null;
     }
     })
 })

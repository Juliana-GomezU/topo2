const cuadrado = document.queryselectorAlL("cuadrado");
const tiempofaltante = document .querySelector ("#tiempo");
let puntuje = document. getElementById("puntaje");

let resultado = 0;
let tiempoactual=tiempofaltante. textcontent;

function cuadradoazar {
  cuadrado.forEach(nombredeclase => {
      nombredeclase.classList.remove("topo");

  })
  let posicionalazar = cuadrado [Math. floor (Math.randon() * 9)]
  posicionalazar.classList.add("topo");
  posiciontopo.posicionalazar.Id
}
cuadrado.foreach (identificador => {
  identificador.addEventListener("click" () => {
if (identificador.Id === posiciontopo) {
  resultado = resultado + 1;
  puntaje.textContent =resultado;
  posiciontopo=null,
    }
  })
})
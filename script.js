// 💖 FECHA EN QUE SE CONOCIERON (10 DE AGOSTO)
const inicio = new Date(2025, 8, 10); 

function actualizarContador() {
  const ahora = new Date();
  let diferencia = ahora - inicio;

  let segundos = Math.floor(diferencia / 1000);
  let minutos = Math.floor(segundos / 60);
  let horas = Math.floor(minutos / 60);
  let dias = Math.floor(horas / 24);

  horas %= 24;
  minutos %= 60;
  segundos %= 60;

  document.getElementById("contador").textContent =
    `${dias} días ${horas} horas ${minutos} minutos ${segundos} segundos`;
}

setInterval(actualizarContador, 1000);
actualizarContador();

/* 🌸 PETALOS DE CORAZÓN */
const tree = document.querySelector(".tree");

function crearPetalo() {
  const petalo = document.createElement("div");
  petalo.classList.add("petalo");
  petalo.textContent = ["💜","💖","💕","❤️","🍷"][Math.floor(Math.random() * 5)];

  petalo.style.left = Math.random() * 160 + "px";
  petalo.style.animationDuration = (3 + Math.random() * 3) + "s";

  tree.appendChild(petalo);

  setTimeout(() => {
    petalo.remove();
  }, 6000);
}

setInterval(crearPetalo, 400);

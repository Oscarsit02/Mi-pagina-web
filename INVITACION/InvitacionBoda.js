// === CONFIG ===
// Cambia la fecha y hora del evento aquí (YYYY, M-1, D, H, M, S)
// Ej: new Date(2025, 9, 12, 17, 0, 0) -> 12 Oct 2025 17:00 (nota: mes base 0)
const eventDate = new Date(2025, 11, 20, 17, 0, 0);

// Reemplaza con tu correo para RSVP (mailto)
const btnConfirmar = document.getElementById('confirmar');

// === ELEMENTS ===
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const playBtn = document.getElementById("playBtn");
const musicStatus = document.getElementById("musicStatus");
const bgAudio = document.getElementById("bgAudio");
const rsvpBtn = document.getElementById("rsvp");
const openMap = document.getElementById("openMap");

// Prevent autoplay issues: only play after user gesture
let isPlaying = false;
playBtn.addEventListener("click", function(){
  if(!isPlaying){
    // intenta reproducir
    bgAudio.play().then(()=>{
      isPlaying = true;
      playBtn.textContent = "❚❚ Pausar música";
      musicStatus.textContent = "Reproduciendo";
    }).catch((err)=>{
      // Si falla, solo indicamos estado y el usuario puede intentar de nuevo
      console.warn("Audio play failed:", err);
      musicStatus.textContent = "No se pudo reproducir (click otra vez)";
    });
  } else {
    bgAudio.pause();
    isPlaying = false;
    playBtn.textContent = "► Reproducir música";
    musicStatus.textContent = "Pausado";
  }
});

// Countdown
function updateCountdown(){
  const now = new Date();
  const diff = eventDate - now;

  if(diff <= 0){
    daysEl.textContent = "00";
    hoursEl.textContent = "00";
    minutesEl.textContent = "00";
    secondsEl.textContent = "00";
    // opcional: mostrar mensaje en pantalla
    return;
  }

  const secTotal = Math.floor(diff / 1000);
  const days = Math.floor(secTotal / (3600*24));
  const hours = Math.floor((secTotal % (3600*24)) / 3600);
  const minutes = Math.floor((secTotal % 3600) / 60);
  const seconds = secTotal % 60;

  daysEl.textContent = String(days).padStart(2,"0");
  hoursEl.textContent = String(hours).padStart(2,"0");
  minutesEl.textContent = String(minutes).padStart(2,"0");
  secondsEl.textContent = String(seconds).padStart(2,"0");
}

// Actualiza cada segundo
updateCountdown();
setInterval(updateCountdown, 1000);



btnConfirmar.addEventListener('click', () => {
    const numero = "+595973908532"; // tu número con código de país
    const mensaje = "Hola Oscar, confirmo mi asistencia Para tu boda";
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

    // Mensaje temporal al usuario
    alert("Serás redirigido a WhatsApp para confirmar tu asistencia.");

    // Abrir en nueva pestaña o app
    const nuevaVentana = window.open(url, "_blank");

    // En caso de que el navegador bloquee pop-ups
    if (!nuevaVentana) {
        // Mostrar mensaje alternativo
        alert("Tu navegador bloqueó la apertura automática. Haz clic aquí: " + url);
    }
});


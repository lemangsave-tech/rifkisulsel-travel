// --- TESTIMONI HANDLER ---
const testimoniForm = document.getElementById("testimoni-form");
const testimoniList = document.getElementById("testimoni-list");

testimoniForm?.addEventListener("submit", (e) => {
  e.preventDefault();
  const nama = document.getElementById("nama").value;
  const pesan = document.getElementById("pesan").value;

  const div = document.createElement("div");
  div.classList.add("testimoni-item");
  div.innerHTML = `<strong>${nama}</strong><p>${pesan}</p>`;
  testimoniList.appendChild(div);

  testimoniForm.reset();
});

// --- RESERVASI HANDLER ---
const reservasiForm = document.getElementById("reservasi-form");
reservasiForm?.addEventListener("submit", (e) => {
  e.preventDefault();
  const nama = document.getElementById("r-nama").value;
  const tanggal = document.getElementById("r-tanggal").value;
  const waktu = document.getElementById("r-waktu").value;

  const text = `Halo RifkiSulsel Travel! Saya ${nama} ingin melakukan reservasi pada tanggal ${tanggal} pukul ${waktu}.`;
  const waURL = `https://wa.me/62881010475176?text=${encodeURIComponent(text)}`;
  window.open(waURL, "_blank");
});

// === SLIDER FUNCTION ===
let slides = document.querySelectorAll(".hero-slider .slide");
let index = 0;

function showSlide(i) {
  slides.forEach((slide, idx) => {
    slide.classList.remove("active");
    if (idx === i) slide.classList.add("active");
  });
}

function nextSlide() {
  index = (index + 1) % slides.length;
  showSlide(index);
}

setInterval(nextSlide, 4000); // ganti slide tiap 4 detik

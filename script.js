let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const nextBtn = document.getElementById('nextBtn');
const popup = document.getElementById('popup');
const sendBtn = document.getElementById('sendBtn');
const messageInput = document.getElementById('message');

// Event listeners
nextBtn.addEventListener('click', handleNextClick);
sendBtn.addEventListener('click', sendMessage);

const emptyMessagePopup = document.getElementById('emptyMessagePopup');
const closePopupBtn = document.getElementById('closePopupBtn');

function sendMessage() {
  const message = messageInput.value;
  const phoneNumber = "6281553599549"; // Ganti dengan nomor WhatsApp Anda

  if (message.trim()) { // Cek jika pesan tidak kosong
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  } else {
    showEmptyMessagePopup(); // Panggil fungsi untuk menampilkan pop-up
  }
}

function showEmptyMessagePopup() {
  emptyMessagePopup.style.display = 'block';
}

closePopupBtn.addEventListener('click', () => {
  emptyMessagePopup.style.display = 'none';
});

function showSlide(slideIndex) {
  slides.forEach((slide, index) => {
    slide.classList.remove('active');
    if (index === slideIndex) {
      slide.classList.add('active');
    }
  });

  if (slideIndex === totalSlides - 1) {
    nextBtn.textContent = "Kirim Pesan ke Pacarmu yang Ganteng ini";
  } else {
    nextBtn.textContent = "Next";
  }
}

function handleNextClick() {
  if (currentSlide < totalSlides - 1) {
    currentSlide++;
    showSlide(currentSlide);
  } else {
    showPopup();
  }
}

function showPopup() {
  popup.style.display = 'block';
}

// Tampilkan slide pertama
showSlide(currentSlide);

// Typed.js initialization
new Typed('#typed', {
  strings: ['I build AI systems.', 'I automate with cloud.'],
  typeSpeed: 60,
  backSpeed: 30,
  backDelay: 1800,
  loop: true
});

// Section reveal on scroll
const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });
sections.forEach(sec => observer.observe(sec));

// Contact form AJAX submission
document.querySelector('form[action="https://formspree.io/f/mgvzkeyb"]').addEventListener('submit', async function(e) {
  e.preventDefault();
  const form = e.target;
  const data = new FormData(form);
  const response = await fetch(form.action, {
    method: form.method,
    body: data,
    headers: { 'Accept': 'application/json' }
  });
  form.innerHTML = response.ok
    ? '<div style="padding:40px 0;font-size:1.2rem;color:var(--accent);">Thank you for your response!</div>'
    : '<div style="padding:40px 0;font-size:1.2rem;color:red;">Oops! Something went wrong. Please try again.</div>';
});

// Toggle clock between time and date on click
let showDate = false;
const clockEl = document.getElementById('clock');

clockEl.addEventListener('click', function () {
  if (!showDate) {
    const now = new Date();
    const dateStr = now.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    clockEl.textContent = dateStr;
    showDate = true;
  } else {
    showDate = false;
    updateClock();
  }
});

// Update time every second only if not showing date
function updateClock() {
  if (showDate) return;
  const now = new Date();
  let h = now.getHours();
  const m = String(now.getMinutes()).padStart(2, '0');
  const s = String(now.getSeconds()).padStart(2, '0');
  const ampm = h >= 12 ? 'PM' : 'AM';
  h = h % 12;
  h = h ? h : 12;
  clockEl.textContent = `${h}:${m}:${s} ${ampm}`;
}
setInterval(updateClock, 1000);
updateClock();

// GSAP Parallax and Social Bar Fade
gsap.registerPlugin(ScrollTrigger);
gsap.to("#hero", {
  backgroundPosition: "0% 100%",
  ease: "power1.out",
  scrollTrigger: {
    trigger: "#hero",
    start: "top top",
    end: "bottom top",
    scrub: true
  }
});
gsap.to(".social-bar.top-left", {
  opacity: 0,
  pointerEvents: "none",
  scrollTrigger: {
    trigger: "#hero",
    start: "bottom top",
    end: "+=1",
    toggleActions: "play none none reverse"
  }
});

// Tech stack color changes to white when mouse is near the clock
const techSpan = document.querySelector('#tech .track span');
const clock = document.getElementById('clock');

document.addEventListener('mousemove', function(e) {
  const rect = clock.getBoundingClientRect();
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  // Distance from mouse to center of clock
  const clockCenterX = rect.left + rect.width / 2;
  const clockCenterY = rect.top + rect.height / 2;
  const dist = Math.sqrt(
    Math.pow(mouseX - clockCenterX, 2) + Math.pow(mouseY - clockCenterY, 2)
  );
  // If mouse is within 120px of clock, change tech stack color to white
  if (dist < 120) {
    techSpan.style.color = "#fff";
    techSpan.classList.remove('neon');
  } else {
    techSpan.style.color = "";
    techSpan.classList.remove('neon');
  }
});

// Neon effect for project cards on hover
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('mouseenter', () => card.classList.add('neon'));
  card.addEventListener('mouseleave', () => card.classList.remove('neon'));
});

// Neon effect for clock when mouse is near
document.addEventListener('mousemove', function(e) {
  const clock = document.getElementById('clock');
  if (!clock) return;
  const rect = clock.getBoundingClientRect();
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  const clockCenterX = rect.left + rect.width / 2;
  const clockCenterY = rect.top + rect.height / 2;
  const dist = Math.sqrt(
    Math.pow(mouseX - clockCenterX, 2) + Math.pow(mouseY - clockCenterY, 2)
  );
  // If mouse is within 120px of clock, add neon effect
  if (dist < 120) {
    clock.classList.add('neon');
  } else {
    clock.classList.remove('neon');
  }
});

// Play click sound from local file for any button click
function playClickSound() {
  const audio = new Audio('Click-sound.wav');
  audio.currentTime = 0;
  audio.play();
}

// Attach click sound to all interactive elements
document.addEventListener('click', function(e) {
  // Social media buttons
  if (
    e.target.closest('.social-btn') ||
    // Education and project cards
    e.target.closest('.card') ||
    // Time (clock)
    e.target.closest('#clock') ||
    // Buttons
    e.target.matches('button, .btn, a.btn') ||
    e.target.closest('button, .btn, a.btn')
  ) {
    playClickSound();
  }
});
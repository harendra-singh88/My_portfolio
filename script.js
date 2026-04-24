// ── Custom Cursor ──
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursorRing');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX;
  my = e.clientY;
  cursor.style.left = (mx - 6) + 'px';
  cursor.style.top  = (my - 6) + 'px';
});

function animRing() {
  rx += (mx - rx) * 0.12;
  ry += (my - ry) * 0.12;
  ring.style.left = (rx - 18) + 'px';
  ring.style.top  = (ry - 18) + 'px';
  requestAnimationFrame(animRing);
}
animRing();

document.querySelectorAll('a, button, .tool-card, .project-card, .hex').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.style.transform = 'scale(2)';
    ring.style.transform   = 'scale(1.5)';
  });
  el.addEventListener('mouseleave', () => {
    cursor.style.transform = 'scale(1)';
    ring.style.transform   = 'scale(1)';
  });
});

// ── Floating Particles ──
const pContainer = document.getElementById('particles');
for (let i = 0; i < 20; i++) {
  const p = document.createElement('div');
  p.className = 'particle';
  p.style.left              = Math.random() * 100 + '%';
  p.style.animationDuration = (8 + Math.random() * 15) + 's';
  p.style.animationDelay    = (-Math.random() * 20) + 's';
  p.style.width = p.style.height = (1 + Math.random() * 2) + 'px';
  pContainer.appendChild(p);
}

// ── Scroll Reveal ──
const reveals = document.querySelectorAll('.reveal');
const obs = new IntersectionObserver(entries => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 80);
    }
  });
}, { threshold: 0.08 });
reveals.forEach(r => obs.observe(r));

// ── Active Nav Highlight ──
const sections = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let cur = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 200) cur = s.id;
  });
  navLinks.forEach(a => {
    a.style.color = a.getAttribute('href') === '#' + cur ? 'var(--accent)' : '';
  });
});

// ── Contact Form Send Button ──
const sendBtn = document.querySelector('.send-btn');
if (sendBtn) {
  sendBtn.addEventListener('click', () => {
    sendBtn.textContent = 'Sent! ✓';
    sendBtn.style.background = '#00b8ff';
  });
}

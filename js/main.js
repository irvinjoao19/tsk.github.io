document.getElementById('year').textContent = new Date().getFullYear();

const hdr = document.getElementById('hdr');
const onScroll = () => hdr.classList.toggle('solid', window.scrollY > window.innerHeight * 0.7);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

const langBtn = document.getElementById('langBtn');
let lang = 'en';
function setLang(l) {
  lang = l;
  document.documentElement.lang = l;
  document.querySelectorAll('[data-en]').forEach(el => el.innerHTML = el.getAttribute('data-' + l));
  langBtn.innerHTML = l === 'en' ? '<b>EN</b> / ES' : 'EN / <b>ES</b>';
}
langBtn.addEventListener('click', () => setLang(lang === 'en' ? 'es' : 'en'));

const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
menuToggle.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', open);
});
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

const io = new IntersectionObserver(
  (es) => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }),
  { threshold: .12 }
);
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

/* SwapKart — shared frontend behaviors */
function toggleNav() {
  var nav = document.getElementById('navLinks');
  var ham = document.getElementById('hamburger');
  if (nav) nav.classList.toggle('open');
  if (ham) ham.classList.toggle('active');
}

document.addEventListener('click', function (e) {
  var nav = document.getElementById('navLinks');
  var ham = document.getElementById('hamburger');
  if (!nav || !ham) return;
  if (!nav.contains(e.target) && !ham.contains(e.target)) {
    nav.classList.remove('open');
    ham.classList.remove('active');
  }
});

document.addEventListener('DOMContentLoaded', function () {
  var path = window.location.pathname;
  document.querySelectorAll('.sk-nav-links a').forEach(function (a) {
    var href = a.getAttribute('href');
    if (!href || href === '/logout/') return;
    if (path === href || (href !== '/' && path.startsWith(href))) {
      a.classList.add('active');
    }
  });

  document.querySelectorAll('.card-wishlist').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      if (btn.textContent.trim() === '♡') {
        btn.textContent = '❤';
        btn.classList.add('active');
      } else {
        btn.textContent = '♡';
        btn.classList.remove('active');
      }
    });
  });
});

function togglePassword(fieldId, btnId) {
  var field = document.getElementById(fieldId);
  var btn = document.getElementById(btnId);
  if (!field || !btn) return;
  if (field.type === 'password') {
    field.type = 'text';
    btn.textContent = 'Hide';
    btn.setAttribute('aria-label', 'Hide password');
  } else {
    field.type = 'password';
    btn.textContent = 'Show';
    btn.setAttribute('aria-label', 'Show password');
  }
}

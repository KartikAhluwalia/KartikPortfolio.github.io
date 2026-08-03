document.addEventListener('DOMContentLoaded', function () {

  /* ---- Mobile nav toggle ------------------------------------------------ */
  var menuToggle = document.getElementById('menu-toggle');
  var mobileNav = document.getElementById('mobile-nav');
  if (menuToggle && mobileNav) {
    menuToggle.addEventListener('click', function () {
      mobileNav.classList.toggle('open');
    });
    mobileNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () { mobileNav.classList.remove('open'); });
    });
  }

  /* ---- Live IST clock in hero status bar -------------------------------- */
  var clockEl = document.getElementById('hero-clock');
  function updateClock() {
    if (!clockEl) return;
    var now = new Date();
    var opts = { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
    var time = new Intl.DateTimeFormat('en-GB', opts).format(now);
    clockEl.textContent = 'BENGALURU, IN · ' + time + ' IST';
  }
  updateClock();
  setInterval(updateClock, 1000);

  /* ---- Rotating role line in hero ---------------------------------------- */
  var roles = [
    'building secure APIs.',
    'shipping observability tooling.',
    'migrating workloads to Kubernetes.',
    'hardening auth & rate limits.'
  ];
  var roleEl = document.getElementById('hero-role-text');
  if (roleEl) {
    var i = 0;
    setInterval(function () {
      i = (i + 1) % roles.length;
      roleEl.style.opacity = 0;
      setTimeout(function () {
        roleEl.textContent = roles[i];
        roleEl.style.opacity = 1;
      }, 300);
    }, 3200);
  }

  /* ---- Scroll reveal ------------------------------------------------------ */
  var revealEls = document.querySelectorAll('.reveal');
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealEls.forEach(function (el) { observer.observe(el); });

  /* ---- Smooth scroll for in-page anchors ---------------------------------- */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId.length < 2) return;
      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  /* ---- Header shadow on scroll --------------------------------------------- */
  var header = document.getElementById('site-header');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 12) {
      header.style.borderBottomColor = 'var(--border-bright)';
    } else {
      header.style.borderBottomColor = 'var(--border)';
    }
  });

});

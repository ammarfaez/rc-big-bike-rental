(function () {
  'use strict';

  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ============ MOBILE NAV ============ */
  var navToggle = document.getElementById('navToggle');
  var navMenu = document.getElementById('navMenu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function () {
      var open = navMenu.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    navMenu.addEventListener('click', function (e) {
      if (e.target.closest('.nav__link')) {
        navMenu.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ============ SCROLL REVEAL ============ */
  var revealEls = document.querySelectorAll('.section');
  revealEls.forEach(function (el) {
    el.classList.add('reveal');
  });

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealEls.forEach(function (el) { io.observe(el); });

  /* ============ FAQ ACCORDION (only one open at a time) ============ */
  var faqItems = document.querySelectorAll('.faq__item');
  faqItems.forEach(function (item) {
    item.addEventListener('toggle', function () {
      if (item.open) {
        faqItems.forEach(function (other) {
          if (other !== item) other.removeAttribute('open');
        });
      }
    });
  });

  /* ============ CONTACT FORM -> WHATSAPP ============ */
  var form = document.getElementById('contactForm');
  var WA_NUMBER = '60134484332';

  function getWhatsAppUrl(name, phone, message) {
    var lang = document.documentElement.getAttribute('lang') === 'ms' ? 'bm' : 'en';
    var greeting = lang === 'bm' ? 'Hai RC Big Bike Rental Malaysia!' : 'Hello RC Big Bike Rental Malaysia!';
    var prompt = lang === 'bm' ? 'Nama' : 'Name';
    var text = encodeURIComponent(greeting) + '%0A%0A'
      + encodeURIComponent(prompt) + ': ' + encodeURIComponent(name) + '%0A'
      + encodeURIComponent('Phone') + ': ' + encodeURIComponent(phone) + '%0A'
      + encodeURIComponent(lang === 'bm' ? 'Mesej' : 'Message') + ': ' + encodeURIComponent(message);
    return 'https://wa.me/' + WA_NUMBER + '?text=' + text;
  }

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = form.name.value.trim();
      var phone = form.phone.value.trim();
      var message = form.message.value.trim();
      window.open(getWhatsAppUrl(name, phone, message), '_blank');
    });
  }
})();

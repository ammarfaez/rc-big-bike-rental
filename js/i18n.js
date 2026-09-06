(function () {
  'use strict';

  var STORE = 'rcbr-lang';
  var DEFAULT_LANG = 'en';
  var ALLOWED = ['bm', 'en'];

  var I18N = {
    /* Document */
    'doc.title': {
      bm: 'RC Big Bike Rental Malaysia (RCBR)',
      en: 'RC Big Bike Rental Malaysia (RCBR)'
    },
    'doc.desc': {
      bm: 'RC Big Bike Rental Malaysia (RCBR) \u2014 sewa skuter, naked, sport dan cruiser. Kadar fleksibel, penghantaran ke pintu rumah, tempahan siap dalam beberapa minit di WhatsApp.',
      en: 'RC Big Bike Rental Malaysia (RCBR) — rent scooters, naked bikes, sport bikes and cruisers. Flexible rates, doorstep delivery, booked in minutes on WhatsApp.'
    },

    /* Navigation */
    'nav.fleet': { bm: 'Armada', en: 'The Fleet' },
    'nav.rates': { bm: 'Kadar', en: 'Rates' },
    'nav.about': { bm: 'Bengkel', en: 'The Garage' },
    'nav.faq': { bm: 'Soalan Lazim', en: 'FAQ' },
    'nav.reviews': { bm: 'Pelanggan', en: 'Riders' },
    'nav.book': { bm: 'Tempah Motosikal', en: 'Book a Bike' },

    /* Hero */
    'hero.kicker': { bm: 'Sewaan motosikal \u00b7 Est. 2016', en: 'Motorcycle rentals \u00b7 Est. 2016' },
    'hero.title': {
      bm: 'Ambil motor.<br />Jom <span class="hero__title-accent">meneroka.</span>',
      en: 'Grab a bike.<br />Go <span class="hero__title-accent">explore.</span>'
    },
    'hero.sub': {
      bm: 'Skuter, naked, sport dan cruiser \u2014 semuanya diservis di bengkel kami selepas setiap sewaan. Dihantar terus ke pintu rumah, dan tempahan hanya ambil beberapa minit melalui WhatsApp.',
      en: 'Scooters, nakeds, sport bikes and cruisers \u2014 serviced in our own garage after every ride, delivered to your door, and booked in minutes over WhatsApp.'
    },
    'hero.book': { bm: 'Tempah di WhatsApp', en: 'Book on WhatsApp' },
    'hero.fleet': { bm: 'Lihat armada kami', en: 'See the fleet' },
    'hero.tick1': { bm: 'Diservis selepas setiap kali sewaan', en: 'Serviced after every single ride' },
    'hero.tick2': { bm: 'Topi keledar, sarung tangan & peta laluan percuma disertakan', en: 'Two helmets, gloves & route maps included' },
    'hero.tick3': { bm: 'Bantuan kecemasan di jalan raya 24/7', en: '24/7 roadside assistance' },

    /* Fleet */
    'fleet.eyebrow': { bm: 'Armada', en: 'The Fleet' },
    'fleet.title': { bm: 'Satu mesin untuk<br />setiap penunggang.', en: 'A machine for<br />every rider.' },
    'fleet.scooter.name': { bm: 'Skuter', en: 'Scooter' },
    'fleet.scooter.desc': { bm: 'Ringan, senang dipandu dan mesra bandar. Cara paling mudah untuk bergerak dalam trafik.', en: 'Twist-and-go, light and city-friendly. The easiest way to dart through traffic.' },
    'fleet.scooter.rate': { bm: 'dari RM12 <small>/hari</small>', en: 'from RM12 <small>/day</small>' },
    'fleet.naked.name': { bm: 'Naked', en: 'Naked' },
    'fleet.naked.desc': { bm: 'Tegak, lasak dan serba boleh. Untuk kerja harian dan juga jalan gunung hujung minggu.', en: 'Upright, punchy and versatile. Commutes by day, canyon runs by weekend.' },
    'fleet.naked.rate': { bm: 'dari RM35 <small>/hari</small>', en: 'from RM35 <small>/day</small>' },
    'fleet.sport.name': { bm: 'Sport', en: 'Sport' },
    'fleet.sport.desc': { bm: 'Badan penuh aerodinamik, pendikit responsif. Sesuai untuk yang mahu rasa macam berlumba di jalan raya.', en: 'Full fairing, sharp throttle. For riders who want the track-day feel on the road.' },
    'fleet.sport.rate': { bm: 'dari RM55 <small>/hari</small>', en: 'from RM55 <small>/day</small>' },
    'fleet.cruiser.name': { bm: 'Cruiser', en: 'Cruiser' },
    'fleet.cruiser.desc': { bm: 'Tempat duduk rendah, jarak jauh, sesuai untuk lebuh raya dan kembara santai.', en: 'Low seat, long range, built for sweeping highways and relaxed touring.' },
    'fleet.cruiser.rate': { bm: 'dari RM40 <small>/hari</small>', en: 'from RM40 <small>/day</small>' },

    /* Rates */
    'rates.eyebrow': { bm: 'Kadar', en: 'Rates' },
    'rates.title': { bm: 'Harga mudah. Tiada kos tersembunyi.', en: 'Simple rates. No surprises.' },
    'rates.sub': {
      bm: 'Harian, mingguan atau bulanan \u2014 semakin lama anda menunggang, semakin jimat. Semua termasuk penghantaran, insurans & dua topi keledar.',
      en: 'Daily, weekly or monthly \u2014 the longer you ride, the cheaper it gets. All include delivery, insurance & two helmets.'
    },
    'rates.daily.label': { bm: 'Harian', en: 'Daily' },
    'rates.daily.price': { bm: '<span class="currency">RM</span>35 <small>/hari</small>', en: '<span class="currency">RM</span>35 <small>/day</small>' },
    'rates.daily.b1': { bm: 'Sesuai untuk trip sehari', en: 'Perfect for a day trip' },
    'rates.daily.b2': { bm: 'Termasuk dua topi keledar & sarung tangan', en: 'Two helmets & gloves included' },
    'rates.daily.b3': { bm: 'Bantuan kecemasan di jalan raya', en: 'Roadside assistance' },
    'rates.daily.cta': { bm: 'Tempah harian', en: 'Pick daily' },
    'rates.weekly.tag': { bm: 'Paling popular', en: 'Most popular' },
    'rates.weekly.label': { bm: 'Mingguan', en: 'Weekly' },
    'rates.weekly.price': { bm: '<span class="currency">RM</span>195 <small>/minggu</small>', en: '<span class="currency">RM</span>195 <small>/wk</small>' },
    'rates.weekly.b1': { bm: 'Paling jimat untuk lawatan jauh', en: 'Best value for longer tours' },
    'rates.weekly.b2': { bm: 'Penghantaran percuma ke pintu rumah', en: 'Free doorstep delivery' },
    'rates.weekly.b3': { bm: 'Servis percuma & boleh tukar motosikal bila-bila', en: 'Free maintenance & swap anytime' },
    'rates.weekly.cta': { bm: 'Tempah mingguan', en: 'Pick weekly' },
    'rates.monthly.label': { bm: 'Bulanan', en: 'Monthly' },
    'rates.monthly.price': { bm: '<span class="currency">RM</span>690 <small>/bulan</small>', en: '<span class="currency">RM</span>690 <small>/mo</small>' },
    'rates.monthly.b1': { bm: 'Pilihan terbaik untuk penduduk & ekspatriat', en: 'Best for residents & expats' },
    'rates.monthly.b2': { bm: 'Boleh tukar motosikal bila-bila masa', en: 'Swap bikes any time' },
    'rates.monthly.b3': { bm: 'Keutamaan tempahan dijamin', en: 'Priority booking guarantee' },
    'rates.monthly.cta': { bm: 'Tempah bulanan', en: 'Pick monthly' },
    'rates.note': { bm: 'Perlukan model tertentu atau sewa jangka panjang? Hantar mesej \u2014 kami akan cuba susunkan.', en: 'Need a specific model or a long-term lease? Message us \u2014 we\'ll make a plan work.' },

    /* About / Garage */
    'about.eyebrow': { bm: 'Bengkel', en: 'The Garage' },
    'about.title': { bm: 'Bengkel yang jujur dan telus.', en: 'A garage that behaves like one.' },
    'about.lead': {
      bm: 'RC Big Bike Rental Malaysia (RCBR) bermula pada 2016 sebagai bengkel kecil dua orang. Kami belajar setiap butiran enjin dan jatuh cinta dengan kerja yang jujur. Armada sewaan kami berkembang dari situ \u2014 mesin yang kami jaga seperti milik sendiri.',
      en: 'RC Big Bike Rental Malaysia (RCBR) started in 2016 as a two-person repair bench. We tore down old engines, learned every torque spec, and fell in love with honest work. The rental fleet grew out of that \u2014 machines we maintain and trust as our own.'
    },
    'about.copy': {
      bm: 'Setiap motosikal diservis, diperiksa dan diuji jalan di bengkel kami selepas setiap pemulangan. Anda bukan sekadar dapat mesin dari rak \u2014 anda dapat mesin yang kami sendiri sanggup bawa merentas negara.',
      en: 'Every single bike is serviced, checked and road-tested in our own garage after every return. You don\'t get a machine off a rack; you get one we\'d happily ride across the country ourselves.'
    },
    'about.f1': { bm: 'Ditubuhkan sebagai bengkel', en: 'Founded as a repair shop' },
    'about.f2': { bm: 'Motosikal, diservis in-house', en: 'Bikes, serviced in-house' },
    'about.f3': { bm: 'Penunggang setia dan terus meningkat', en: 'Riders and counting' },
    'about.f4': { bm: 'Purata rating penunggang', en: 'Average rider rating' },
    'about.cta': { bm: 'Jom jumpa kami', en: 'Come say hi' },

    /* Gallery */
    'gallery.eyebrow': { bm: 'Galeri', en: 'Gallery' },
    'gallery.title': { bm: 'Mesin, penunggang & jalan raya terbuka.', en: 'Machines, riders & the open road.' },

    /* FAQ */
    'faq.eyebrow': { bm: 'Soalan Lazim', en: 'FAQ' },
    'faq.title': { bm: 'Soalan anda. Jawapan terus terang.', en: 'Fair questions. Straight answers.' },
    'faq.q1': { bm: 'Apa yang perlu untuk sewa motosikal?', en: 'What do I need to rent a motorcycle?' },
    'faq.a1': { bm: 'Cukup dengan lesen motosikal yang sah, pengalaman menunggang yang baik dan deposit keselamatan yang boleh dikembalikan. Untuk skuter, lesen kereta juga sudah memadai.', en: 'A valid motorcycle driving licence, a decent riding history and a refundable security deposit. Scooters are more relaxed \u2014 a car licence may be enough.' },
    'faq.q2': { bm: 'Ada tak syarat umur minimum?', en: 'Is there a minimum age?' },
    'faq.a2': { bm: 'Umur minimum 21 tahun untuk menyewa. Untuk motosikal besar, anda juga perlu sekurang-kurangnya 2 tahun pengalaman menunggang berlesen.', en: 'You must be 21+ to rent, and at least 2 years licensed riding experience is required for our larger bikes.' },
    'faq.q3': { bm: 'Berapa deposit dan bila ia dipulangkan?', en: 'How much is the deposit, and when is it back?' },
    'faq.a3': { bm: 'Deposit keselamatan diambil semasa tempahan dan dipulangkan sepenuhnya sebaik sahaja motosikal dikembalikan dalam keadaan baik \u2014 biasanya dalam masa 24 jam.', en: 'A holding deposit is taken at booking and returned in full once the bike is back in good shape \u2014 usually within 24 hours.' },
    'faq.q4': { bm: 'Ada insurans untuk motosikal tak?', en: 'Are the bikes insured?' },
    'faq.a4': { bm: 'Setiap sewaan sudah termasuk insurans pihak ketiga. Anda boleh tambah perlindungan penuh premium untuk lebih tenang dalam perjalanan jauh.', en: 'Third-party insurance is included on every rental. You can add premium full cover for extra peace of mind on longer tours.' },
    'faq.q5': { bm: 'Ada perkhidmatan hantar dan ambil semula?', en: 'Do you deliver and pick up?' },
    'faq.a5': { bm: 'Ya! Kami hantar dan ambil semula di mana-mana sahaja dalam bandar dengan bayaran tetap yang murah, dan percuma untuk sewaan mingguan atau bulanan.', en: 'We deliver and pick up anywhere in the city at a small flat fee, and it\'s free with weekly or monthly rentals.' },
    'faq.q6': { bm: 'Macam mana kalau rosak di tengah jalan?', en: 'What if I break down on the road?' },
    'faq.a6': { bm: 'Jangan risau \u2014 setiap sewaan termasuk bantuan jalan raya 24/7. Satu panggilan di WhatsApp sudah cukup, kami hantar mekanik atau bawa motosikal ganti.', en: 'Every rental includes 24/7 roadside assistance. One call on WhatsApp and we\'ll get a mechanic to you or bring a replacement ride.' },

    /* Reviews */
    'reviews.eyebrow': { bm: 'Pelanggan', en: 'Riders' },
    'reviews.title': { bm: 'Apa kata pelanggan setia kami.', en: 'What the regulars say.' },
    'reviews.r1': { bm: '"Tempah naked dalam dua minit di WhatsApp. Motosikal bersih, dihantar terus ke hotel dan peta laluan memudahkan keseluruhan perjalanan."', en: '"Booked a naked bike in two minutes on WhatsApp. It was spotless, delivered to my hotel and the route map made the whole trip easy."' },
    'reviews.r1.role': { bm: 'Sewaan mingguan', en: 'Weekly rental' },
    'reviews.r2': { bm: '"Bawa sport bike melalui jalan gunung, ia sangat stabil. Topi keledar, sarung tangan dan bantuan semuanya disediakan. Sangat disyorkan."', en: '"Took a sport bike through the mountain passes and it handled like a dream. Helmets, gloves and assistance all included. Highly recommend."' },
    'reviews.r2.role': { bm: 'Penunggang lawatan', en: 'Tour rider' },
    'reviews.r3': { bm: '"Harga berpatutan, servis mesra dan skuter menjadikan perjalanan harian saya menyeronokkan. Memang dah jadi pelanggan bulanan sejak itu."', en: '"Fair prices, genuinely friendly service and the scooter made my daily commute a joy. Been a monthly customer ever since."' },
    'reviews.r3.role': { bm: 'Sewaan bulanan', en: 'Monthly rental' },

    /* Contact */
    'contact.eyebrow': { bm: 'Hubungi Kami', en: 'Contact' },
    'contact.title': { bm: 'Jom naik motosikal.', en: 'Let\'s get you on a bike.' },
    'contact.sub': { bm: 'Cara terpantas untuk tempah ialah hantar mesej di WhatsApp \u2014 kami biasanya membalas dalam masa sejam. Setiap hari.', en: 'The fastest way to book is a quick message on WhatsApp \u2014 we reply within the hour, most days.' },
    'contact.wa.title': { bm: 'Tempah di WhatsApp', en: 'Book on WhatsApp' },
    'contact.wa.sub': { bm: 'Balasan segera \u00b7 +60 13-448 4332', en: 'Instant replies \u00b7 +60 13-448 4332' },
    'contact.visit': { bm: 'Kunjungi', en: 'Visit' },
    'contact.hours': { bm: 'Waktu Operasi', en: 'Hours' },
    'contact.hours.val': { bm: 'Isnin\u2013Ahad \u00b7 8:00\u201320:00', en: 'Mon\u2013Sun \u00b7 8:00\u201320:00' },
    'contact.email': { bm: 'E-mel', en: 'Email' },

    /* Form */
    'contact.form.title': { bm: 'Atau hantar mesej kepada kami', en: 'Or drop us a line' },
    'form.name.label': { bm: 'Nama anda', en: 'Your name' },
    'form.name.ph': { bm: 'Nama anda', en: 'Jane Doe' },
    'form.phone.label': { bm: 'Nombor telefon / WhatsApp', en: 'Phone / WhatsApp number' },
    'form.message.label': { bm: 'Apa yang anda perlukan?', en: 'What do you need?' },
    'form.message.ph': { bm: 'Saya nak sewa naked bike untuk seminggu...', en: 'I\'d like a naked bike for a week...' },
    'form.submit': { bm: 'Hantar melalui WhatsApp', en: 'Send via WhatsApp' },
    'form.privacy': { bm: 'Mesej anda akan terus dibuka dalam WhatsApp, dah siap diisi. Tiada akaun diperlukan.', en: 'This opens WhatsApp with your message pre-filled \u2014 no account needed.' },

    /* Footer */
    'footer.tag': { bm: 'Pandu lebih. Risau kurang.', en: 'Ride more. Worry less.' },
    'footer.copy': { bm: 'RC Big Bike Rental Malaysia (RCBR) \u00b7 Hak cipta terpelihara.', en: 'RC Big Bike Rental Malaysia (RCBR) \u00b7 All rights reserved.' }
  };

  /* ============ Helpers ============ */
  function currentLang() {
    var stored = null;
    try { stored = localStorage.getItem(STORE); } catch (e) {}
    return ALLOWED.indexOf(stored) !== -1 ? stored : DEFAULT_LANG;
  }

  function setLang(lang) {
    if (ALLOWED.indexOf(lang) === -1) return;

    document.documentElement.setAttribute('lang', lang === 'bm' ? 'ms' : 'en');

    var textEls = document.querySelectorAll('[data-i18n]');
    textEls.forEach(function (el) {
      var val = I18N[el.getAttribute('data-i18n')];
      if (val) el.textContent = val[lang];
    });

    var htmlEls = document.querySelectorAll('[data-i18n-html]');
    htmlEls.forEach(function (el) {
      var val = I18N[el.getAttribute('data-i18n-html')];
      if (val) el.innerHTML = val[lang];
    });

    var phEls = document.querySelectorAll('[data-i18n-ph]');
    phEls.forEach(function (el) {
      var val = I18N[el.getAttribute('data-i18n-ph')];
      if (val) el.setAttribute('placeholder', val[lang]);
    });

    var title = I18N['doc.title'][lang];
    if (title) document.title = title;

    var desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', I18N['doc.desc'][lang]);

    document.querySelectorAll('.lang-switch__btn').forEach(function (btn) {
      btn.classList.toggle('is-active', btn.getAttribute('data-lang') === lang);
    });

    document.body.setAttribute('data-lang', lang);
  }

  /* ============ Wire up switches ============ */
  document.querySelectorAll('.lang-switch__btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var lang = btn.getAttribute('data-lang');
      try { localStorage.setItem(STORE, lang); } catch (e) {}
      setLang(lang);
    });
  });

  setLang(currentLang());
})();
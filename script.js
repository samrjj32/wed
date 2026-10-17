(() => {
  "use strict";

  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));

  /* ===================== Translations ===================== */
  const T = {
    en: {
      "intro.tapToContinue": "Tap to continue",
      "intro.invitation": "You are cordially invited to celebrate the wedding of",
      "intro.personalMessage": "We would like to invite you to celebrate with us the most special day of our lives. It would be an honor to have you present at this important moment.",
      "intro.scroll": "Scroll",
      "reveal.title": "Reveal",
      "reveal.subtitle": "Scratch to discover the date",
      "reveal.scratchHint": "Scratch all three circles to continue",
      "reveal.weddingAnnouncement": "We're getting married!",
      "countdown.title": "Countdown",
      "countdown.days": "Days", "countdown.hours": "Hours", "countdown.minutes": "Min", "countdown.seconds": "Sec",
      "countdown.forTheBigDay": "until the big day",
      "saveTheDate.celebrationAt": "The celebration will take place at",
      "saveTheDate.receptionToFollow": "Reception to Follow",
      "dressCode.title": "Dress Code",
      "dressCode.description": "We invite you to dress elegantly and formally to celebrate this special day with us.",
      "dressCode.formal": "Formal Attire",
      "dressCode.avoidWhite": "Please avoid wearing white",
      "gifts.weddingList": "Wedding registry",
      "gifts.title": "Gifts",
      "gifts.message": "Your presence is the best gift we could receive. However, if you wish to contribute to our new life together, you can do so via bank transfer.",
      "gifts.withLove": "With all our love",
      "gifts.bankDetails": "Bank details",
      "gifts.accountHolder": "ACCOUNT HOLDER",
      "gifts.concept": "REFERENCE: Sam & Sofia Wedding",
      "transport.howToGet": "How to get there",
      "transport.title": "Transport",
      "transport.description": "We have organized buses from the center of Florence to the villa so you can enjoy the celebration without worries.",
      "transport.departure": "Bus departure",
      "transport.returnTo": "Return to Florence",
      "transport.rsvpNote": "Please indicate in your RSVP if you need transport",
      "rsvp.thanks": "Thank you!",
      "rsvp.confirmation": "We have received your confirmation. See you soon!",
      "thankYou.title": "Thank You",
      "thankYou.message": "For joining us on this special day. Your presence is the best gift we could receive.",
      "form.customizable": "This form is fully customizable to your needs",
      "form.subtitle": "Confirm your attendance",
      "form.fullName": "Full Name",
      "form.fullNamePlaceholder": "Your name",
      "form.email": "Email (optional)",
      "form.willAttend": "Will you attend?",
      "form.yes": "Yes, I'll be there!",
      "form.no": "No, I can't make it",
      "form.guestCount": "How many guests in total?",
      "form.companionTitle": "Guest information",
      "form.companionNamePlaceholder": "Guest name",
      "form.companionDietaryPlaceholder": "Allergies, vegetarian, etc.",
      "form.dietaryTitle": "Your dietary requirements",
      "form.dietaryHelp": "Please let us know of any allergies or dietary restrictions:",
      "form.other": "Other:",
      "form.otherPlaceholder": "E.g., egg allergy",
      "form.transportTitle": "Transport",
      "form.transportHelp": "Do you need bus transport to the venue?",
      "form.transportYes": "Yes, I need transport",
      "form.transportNo": "No, I'll get there on my own",
      "form.songTitle": "Song request",
      "form.songHelp": "What song would you love to hear at our wedding?",
      "form.songPlaceholder": "Artist - Song name",
      "form.messageLabel": "Message for the couple (optional)",
      "form.messagePlaceholder": "Write us a few words...",
      "form.sending": "Sending...",
      "form.send": "Confirm",
      "form.nameRequired": "Please enter your name.",
      "form.namesRequiredDesc": "Please provide the names of all guests.",
      "form.errorDesc": "Could not submit your confirmation. Please try again.",
      "form.guest": "Guest",
      "diet.gluten": "Gluten-free / Celiac", "diet.lactose": "Lactose-free", "diet.vegetarian": "Vegetarian",
      "diet.vegan": "Vegan", "diet.nuts": "Nut allergy", "diet.seafood": "Seafood allergy"
    },
    it: {
      "intro.tapToContinue": "Tocca per continuare",
      "intro.invitation": "Siete cordialmente invitati a celebrare il matrimonio di",
      "intro.personalMessage": "Vorremmo invitarvi a festeggiare con noi il giorno più speciale della nostra vita. Sarebbe un onore avervi presenti in questo momento così importante.",
      "intro.scroll": "Scorri",
      "reveal.title": "Rivela",
      "reveal.subtitle": "Gratta per scoprire la data",
      "reveal.scratchHint": "Gratta tutti e tre i cerchi per continuare",
      "reveal.weddingAnnouncement": "Ci sposiamo!",
      "countdown.title": "Conto alla rovescia",
      "countdown.days": "Giorni", "countdown.hours": "Ore", "countdown.minutes": "Min", "countdown.seconds": "Sec",
      "countdown.forTheBigDay": "al grande giorno",
      "saveTheDate.celebrationAt": "La celebrazione si terrà presso",
      "saveTheDate.receptionToFollow": "A seguire il ricevimento",
      "dressCode.title": "Dress Code",
      "dressCode.description": "Vi invitiamo a vestirvi in modo elegante e formale per celebrare con noi questo giorno speciale.",
      "dressCode.formal": "Abbigliamento Formale",
      "dressCode.avoidWhite": "Per favore, evitate il bianco",
      "gifts.weddingList": "Lista nozze",
      "gifts.title": "Regali",
      "gifts.message": "La vostra presenza è il regalo più bello che possiamo ricevere. Tuttavia, se desiderate contribuire alla nostra nuova vita insieme, potete farlo tramite bonifico bancario.",
      "gifts.withLove": "Con tutto il nostro amore",
      "gifts.bankDetails": "Coordinate bancarie",
      "gifts.accountHolder": "INTESTATARIO",
      "gifts.concept": "CAUSALE: Matrimonio Sam & Sofia",
      "transport.howToGet": "Come arrivare",
      "transport.title": "Trasporto",
      "transport.description": "Abbiamo organizzato autobus dal centro di Firenze alla villa per permettervi di godervi la festa senza preoccupazioni.",
      "transport.departure": "Partenza autobus",
      "transport.returnTo": "Ritorno a Firenze",
      "transport.rsvpNote": "Indicate nel RSVP se avete bisogno del trasporto",
      "rsvp.thanks": "Grazie!",
      "rsvp.confirmation": "Abbiamo ricevuto la tua conferma. A presto!",
      "thankYou.title": "Grazie",
      "thankYou.message": "Per essere con noi in questo giorno speciale. La vostra presenza è il regalo più bello che possiamo ricevere.",
      "form.customizable": "Questo modulo è completamente personalizzabile",
      "form.subtitle": "Conferma la tua presenza",
      "form.fullName": "Nome completo",
      "form.fullNamePlaceholder": "Il tuo nome",
      "form.email": "Email (opzionale)",
      "form.willAttend": "Parteciperai?",
      "form.yes": "Sì, ci sarò!",
      "form.no": "No, non potrò venire",
      "form.guestCount": "Quanti invitati in totale?",
      "form.companionTitle": "Informazioni ospiti",
      "form.companionNamePlaceholder": "Nome dell'ospite",
      "form.companionDietaryPlaceholder": "Allergie, vegetariano, ecc.",
      "form.dietaryTitle": "Le tue esigenze alimentari",
      "form.dietaryHelp": "Facci sapere di eventuali allergie o restrizioni alimentari:",
      "form.other": "Altro:",
      "form.otherPlaceholder": "Es: allergia alle uova",
      "form.transportTitle": "Trasporto",
      "form.transportHelp": "Hai bisogno del trasporto in autobus per la venue?",
      "form.transportYes": "Sì, ho bisogno del trasporto",
      "form.transportNo": "No, arrivo per conto mio",
      "form.songTitle": "Richiesta canzone",
      "form.songHelp": "Quale canzone vorresti sentire al nostro matrimonio?",
      "form.songPlaceholder": "Artista - Titolo",
      "form.messageLabel": "Messaggio per gli sposi (opzionale)",
      "form.messagePlaceholder": "Scrivici qualche parola...",
      "form.sending": "Invio...",
      "form.send": "Conferma",
      "form.nameRequired": "Inserisci il tuo nome.",
      "form.namesRequiredDesc": "Indica i nomi di tutti gli ospiti.",
      "form.errorDesc": "Impossibile inviare la conferma. Riprova.",
      "form.guest": "Ospite",
      "diet.gluten": "Senza glutine / Celiaco", "diet.lactose": "Senza lattosio", "diet.vegetarian": "Vegetariano",
      "diet.vegan": "Vegano", "diet.nuts": "Allergia alle noci", "diet.seafood": "Allergia ai frutti di mare"
    }
  };

  let lang = "en";
  const t = (k) => (T[lang] && T[lang][k]) || T.en[k] || k;

  function applyLang() {
    document.documentElement.lang = lang;
    $$("[data-i18n]").forEach((el) => { el.textContent = t(el.dataset.i18n); });
    $$("[data-i18n-ph]").forEach((el) => { el.placeholder = t(el.dataset.i18nPh); });
    $$("#langSwitch button").forEach((b) => b.classList.toggle("active", b.dataset.lang === lang));
    renderCompanions();
  }

  $$("#langSwitch button").forEach((b) =>
    b.addEventListener("click", () => { lang = b.dataset.lang; applyLang(); })
  );
  window.addEventListener("scroll", () => {
    $("#langSwitch").classList.toggle("scrolled", window.scrollY > 100);
  }, { passive: true });

  /* ===================== Music ===================== */
  const music = $("#music");
  const musicBtn = $("#musicBtn");

  function startMusic() {
    music.play().then(() => {
      musicBtn.hidden = false;
      musicBtn.classList.add("playing");
    }).catch(() => {});
  }
  musicBtn.addEventListener("click", () => {
    if (music.paused) { music.play(); musicBtn.classList.add("playing"); }
    else { music.pause(); musicBtn.classList.remove("playing"); }
  });
  document.addEventListener("visibilitychange", () => {
    if (document.hidden && !music.paused) { music.pause(); musicBtn.classList.remove("playing"); }
  });

  /* ===================== Curtain intro ===================== */
  const intro = $("#intro");
  const video = $("#curtainVideo");
  let introState = "idle";

  document.body.style.overflow = "hidden";
  new Image().src = "/assets/curtain-open-C9MqdT6G.jpg"; // preload

  intro.addEventListener("click", () => {
    if (introState !== "idle") return;
    introState = "playing";
    document.body.style.overflow = "";
    intro.classList.add("playing");
    startMusic();
    video.play().catch(finishIntro);
  });

  video.addEventListener("timeupdate", () => {
    if (video.duration && video.duration - video.currentTime <= 4) intro.classList.add("show-names");
  });
  video.addEventListener("ended", finishIntro);

  function finishIntro() {
    video.pause();
    introState = "done";
    intro.classList.add("show-names", "done");
  }

  /* ===================== Scroll reveal ===================== */
  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("visible"); revealObs.unobserve(e.target); }
    });
  }, { threshold: 0.15 });
  $$(".reveal").forEach((el) => revealObs.observe(el));

  /* ===================== Scratch reveal ===================== */
  const scratchSection = $("#scratchSection");
  const scratchHint = $("#scratchHint");
  let revealedCount = 0;
  let locked = false;

  const preventScroll = (e) => { e.preventDefault(); e.stopPropagation(); return false; };
  const preventKeys = (e) => {
    if (["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End", " "].includes(e.key)) e.preventDefault();
  };

  function lockScroll() {
    if (locked) return;
    locked = true;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    window.addEventListener("wheel", preventScroll, { passive: false });
    window.addEventListener("touchmove", preventScroll, { passive: false });
    window.addEventListener("keydown", preventKeys, { passive: false });
    scratchHint.classList.add("active");
  }
  function unlockScroll() {
    locked = false;
    document.body.style.overflow = "";
    document.documentElement.style.overflow = "";
    window.removeEventListener("wheel", preventScroll);
    window.removeEventListener("touchmove", preventScroll);
    window.removeEventListener("keydown", preventKeys);
    scratchHint.classList.remove("active");
  }

  new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting && e.intersectionRatio >= 0.9 && revealedCount < 3) lockScroll();
    });
  }, { threshold: [0.9] }).observe(scratchSection);

  const scratchImg = new Image();
  scratchImg.src = "/assets/scratch-gold-DQrdz0lH.png";

  $$(".scratch canvas").forEach((canvas) => {
    const ctx = canvas.getContext("2d");
    let drawing = false;
    let done = false;

    const paint = () => ctx.drawImage(scratchImg, 0, 0, canvas.width, canvas.height);
    if (scratchImg.complete && scratchImg.naturalWidth) paint();
    else scratchImg.addEventListener("load", paint);

    function scratchAt(e) {
      const rect = canvas.getBoundingClientRect();
      const x = (e.clientX - rect.left) * (canvas.width / rect.width);
      const y = (e.clientY - rect.top) * (canvas.height / rect.height);
      ctx.globalCompositeOperation = "destination-out";
      ctx.beginPath();
      ctx.arc(x, y, 30, 0, Math.PI * 2);
      ctx.fill();
    }

    function check() {
      drawing = false;
      if (done) return;
      const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
      let clear = 0;
      for (let i = 3; i < data.length; i += 4) if (data[i] === 0) clear++;
      if (clear / (data.length / 4) > 0.5) {
        done = true;
        canvas.classList.add("cleared");
        onReveal();
      }
    }

    canvas.addEventListener("pointerdown", (e) => {
      if (done) return;
      drawing = true;
      canvas.setPointerCapture(e.pointerId);
      scratchAt(e);
    });
    canvas.addEventListener("pointermove", (e) => { if (drawing && !done) scratchAt(e); });
    canvas.addEventListener("pointerup", check);
    canvas.addEventListener("pointercancel", check);
  });

  function onReveal() {
    revealedCount++;
    if (revealedCount === 3) {
      $("#announce").classList.add("show");
      confetti();
      setTimeout(unlockScroll, 500);
    }
  }

  function confetti() {
    const wrap = document.createElement("div");
    wrap.className = "confetti";
    const shapes = ["circle", "square", "rectangle"];
    for (let i = 0; i < 60; i++) {
      const p = document.createElement("i");
      const size = 5 + Math.random() * 8;
      const shape = shapes[Math.floor(Math.random() * 3)];
      const sway = (Math.random() - 0.5) * 100;
      const duration = (3 + Math.random() * 2) * 1000;
      p.style.left = Math.random() * 100 + "%";
      p.style.width = size + "px";
      p.style.height = (shape === "rectangle" ? size * 2.5 : size) + "px";
      p.style.borderRadius = shape === "circle" ? "50%" : "2px";
      wrap.appendChild(p);
      p.animate([
        { transform: "translate(0,0) rotate(0deg)", opacity: 0 },
        { transform: `translate(${sway}px, ${window.innerHeight * 0.25}px) rotate(180deg)`, opacity: 1, offset: 0.25 },
        { transform: `translate(${-sway * 0.5}px, ${window.innerHeight * 0.5}px) rotate(360deg)`, opacity: 1, offset: 0.5 },
        { transform: `translate(${sway * 0.3}px, ${window.innerHeight * 0.75}px) rotate(540deg)`, opacity: 1, offset: 0.75 },
        { transform: `translate(0, ${window.innerHeight + 100}px) rotate(720deg)`, opacity: 0 }
      ], { duration, delay: Math.random() * 1500, easing: "linear", fill: "both" });
    }
    document.body.appendChild(wrap);
    setTimeout(() => wrap.remove(), 7000);
  }

  /* ===================== Countdown ===================== */
  const target = new Date("2026-10-31T16:30:00");
  const pad = (n) => String(n).padStart(2, "0");
  function tick() {
    const diff = Math.max(0, target - new Date());
    $("#cdDays").textContent = pad(Math.floor(diff / 864e5));
    $("#cdHours").textContent = pad(Math.floor(diff / 36e5) % 24);
    $("#cdMinutes").textContent = pad(Math.floor(diff / 6e4) % 60);
    $("#cdSeconds").textContent = pad(Math.floor(diff / 1e3) % 60);
  }
  tick();
  setInterval(tick, 1000);

  /* ===================== RSVP form ===================== */
  const SUPABASE_URL = "https://qsymxqsigmilfbmmnlqi.supabase.co";
  const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFzeW14cXNpZ21pbGZibW1ubHFpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA5MTI4NjQsImV4cCI6MjA4NjQ4ODg2NH0.BGruTJ0vu7Y4pWpCaGmqKxYX5g6lFxA9Q8upPEIU-iI";

  const form = $("#rsvpForm");
  const submitBtn = $("#submitBtn");
  const submitLabel = $("#submitLabel");
  const formError = $("#formError");
  const guestsInput = $("#guests");
  const state = { attendance: "", needs_bus: "", guest_count: 1 };
  let companions = [];

  $$(".choice-row").forEach((row) => {
    row.addEventListener("click", (e) => {
      const btn = e.target.closest(".choice");
      if (!btn) return;
      const group = row.dataset.group;
      state[group] = btn.dataset.value;
      $$(".choice", row).forEach((b) => b.classList.toggle("selected", b === btn));
      if (group === "attendance") {
        $("#attendingFields").hidden = state.attendance !== "yes";
        submitBtn.disabled = false;
      }
    });
  });

  function setGuestCount(n) {
    const count = Math.max(1, Math.min(10, n));
    state.guest_count = count;
    const needed = count - 1;
    while (companions.length < needed) companions.push({ name: "", dietary: "" });
    companions = companions.slice(0, needed);
    renderCompanions();
  }

  function renderCompanions() {
    const box = $("#companions");
    const list = $("#companionList");
    box.hidden = companions.length === 0;
    list.innerHTML = "";
    companions.forEach((c, i) => {
      const div = document.createElement("div");
      div.className = "companion";
      const label = document.createElement("span");
      label.textContent = `${t("form.guest")} ${i + 2}`;
      const name = document.createElement("input");
      name.type = "text";
      name.placeholder = t("form.companionNamePlaceholder");
      name.value = c.name;
      name.addEventListener("input", () => { companions[i].name = name.value; });
      const diet = document.createElement("input");
      diet.type = "text";
      diet.placeholder = t("form.companionDietaryPlaceholder");
      diet.value = c.dietary;
      diet.addEventListener("input", () => { companions[i].dietary = diet.value; });
      div.append(label, name, diet);
      list.appendChild(div);
    });
  }

  guestsInput.addEventListener("focus", () => guestsInput.select());
  guestsInput.addEventListener("input", () => {
    const n = parseInt(guestsInput.value, 10);
    if (!Number.isNaN(n)) setGuestCount(n);
  });
  guestsInput.addEventListener("blur", () => {
    const n = parseInt(guestsInput.value, 10);
    const clamped = Number.isNaN(n) ? 1 : Math.max(1, Math.min(10, n));
    guestsInput.value = clamped;
    setGuestCount(clamped);
  });

  function showError(msg) { formError.textContent = msg; formError.hidden = false; }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    formError.hidden = true;

    const fullName = $("#fullName").value.trim();
    if (!fullName || !state.attendance) return showError(t("form.nameRequired"));

    const attending = state.attendance === "yes";
    if (attending && companions.some((c) => !c.name.trim())) return showError(t("form.namesRequiredDesc"));

    let dietaryText = "";
    let companionText = "";
    if (attending) {
      const diets = $$('input[name="diet"]:checked').map((cb) => t("diet." + cb.value));
      const other = $("#otherAllergy").value.trim();
      if (other) diets.push(other);
      dietaryText = diets.join(", ");
      companionText = companions.filter((c) => c.name.trim()).map((c, i) => {
        let line = `${t("form.guest")} ${i + 2}: ${c.name.trim()}`;
        if (c.dietary.trim()) line += ` (${c.dietary.trim()})`;
        return line;
      }).join("\n");
    }
    const dietary = [dietaryText, companionText].filter(Boolean).join("\n\n");

    const payload = {
      full_name: fullName,
      email: $("#email").value.trim() || undefined,
      attendance: state.attendance,
      guest_count: attending ? state.guest_count : 1,
      dietary_requirements: dietary || undefined,
      message: $("#message").value.trim() || undefined,
      song_suggestion: (attending && $("#song").value.trim()) || undefined,
      needs_bus: (attending && state.needs_bus) || undefined,
      website: form.website.value
    };

    submitBtn.disabled = true;
    submitLabel.textContent = t("form.sending");

    try {
      const res = await fetch(`${SUPABASE_URL}/functions/v1/submit-rsvp`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: SUPABASE_ANON_KEY,
          Authorization: `Bearer ${SUPABASE_ANON_KEY}`
        },
        body: JSON.stringify(payload)
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || data.error) throw new Error(data.error || t("form.errorDesc"));
      $("#rsvpWrap").hidden = true;
      $("#rsvpDone").hidden = false;
    } catch (err) {
      showError((err && err.message) || t("form.errorDesc"));
      submitBtn.disabled = false;
      submitLabel.textContent = t("form.send");
    }
  });

  applyLang();
})();

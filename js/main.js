/* La Madrina · Cabañas de altura — interacción */
(function () {
  "use strict";

  document.documentElement.classList.add("js");

  var WA_NUMBER = "5493813506047";
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ------------------------------------------------------------
     Textos en inglés (el español vive en el HTML)
     ------------------------------------------------------------ */
  var EN = {
    skip: "Skip to content",
    brandSub: "Mountain cabins",
    navCasa: "The house",
    navCabanas: "Cabins",
    navEquip: "Amenities",
    navOpin: "Reviews",
    navAlre: "Surroundings",
    navInfo: "Good to know",
    navContacto: "Contact",
    ctaShort: "Enquire",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    terrainLabel: "Topographic sketch of the Tafí valley showing Dique La Angostura and the location of La Madrina",
    mapCentro: "town centre · 600 m",
    heroPlace: "Mountain cabins · Tafí del Valle, Tucumán",
    heroLede: "Eight cabins with private terraces facing La Angostura lake and the mountains. Feel at home, with the service of a first-class hotel.",
    heroProof: "on Google · 111 reviews",
    heroSee: "See the cabins",
    altVista: "View of La Angostura lake and the mountains from a terrace at La Madrina",
    insetCap: "View from the terrace",
    formTitle: "Check availability",
    formNote: "We reply on WhatsApp with the rate for your dates.",
    formIn: "Arrival",
    formOut: "Departure",
    formGuests: "Guests",
    formSubmit: "Ask on WhatsApp",
    footAddr: "Address",
    footLang: "We speak",
    footLangVal: "Español · English",
    footScale: "Scale",
    footScaleVal: "Sketch, not to scale",
    casaTitle: "At home, with hotel service",
    casaP1: "The idea behind La Madrina is simple: every guest should feel at home, with the comforts and services of a first-class hotel.",
    casaP2: "There are eight units, and every one has a private terrace with panoramic views of the lake and the mountains, its own grill and its own garage. We are 600 metres from the centre of Tafí del Valle and a few minutes from La Angostura lake and El Mollar.",
    fact1: "Private terrace with lake and mountain views in all 8 units",
    fact2: "American breakfast every day",
    fact3: "24-hour front desk and daily housekeeping",
    capTerraza: "Terrace overlooking the lake",
    altTerraza: "Private cabin terrace overlooking the lake",
    capLiving: "A cabin living room",
    altLiving: "Cabin living room with sofa and TV",
    capJardin: "The garden",
    altJardin: "Garden at La Madrina",
    cabTitle: "Eight cabins, each named after a flower",
    cabLede: "There are three sizes. Tell us how many of you are travelling and we will show you the right one.",
    pickLegend: "How many are travelling?",
    catS: "people",
    catM: "family",
    catL: "large group",
    catSTitle: "For 2 to 4 people",
    catSText: "Ideal for couples or a small family: a bedroom with a large double bed, living area, full kitchen and the terrace with grill looking over the lake.",
    catMTitle: "Family cabins, for 4 to 6 people",
    catMText: "More room for everyone: one- and three-bedroom layouts with large double beds and single beds, and a long table to eat together.",
    catLTitle: "Large cabins, for 6 to 8 people",
    catLText: "For groups and big families. Some units sleep up to 10 guests. The largest is Sauco.",
    catSame: "All of them have a private terrace with a view, a grill, their own garage, a full kitchen with a Nespresso machine, air conditioning and heating.",
    capDorm: "Main bedroom",
    altDorm: "Bedroom with a large double bed",
    gazTitle: "The cabins",
    gazBig: "the largest",
    gazNote: "Each one is named after a flower from northern Argentina and Latin America.",
    capSauco: "Sauco's gallery with a table for 10",
    altSauco: "Gallery of the Sauco cabin with a table for ten and a grill",
    saucoSub: "The largest · 6 to 8 people",
    sauco1: "Dining table for 8",
    sauco2: "Living room with sofa and Smart TV",
    sauco3: "Gallery off the main bedroom",
    sauco4: "Second gallery with a table for 10 and a grill",
    saucoCta: "Ask about Sauco",
    eqTitle: "Everything you will find",
    eqLede: "Like the legend on a map: one symbol, one comfort.",
    eqUnit: "In every cabin",
    eqComplex: "Around the complex",
    u1: "Grill on the terrace",
    u2: "Private garage",
    u3: "Private entrance",
    u4: "Full kitchen with oven and microwave",
    u5: "Fridge",
    u6: "Nespresso machine and electric kettle",
    u7: "Air conditioning",
    u8: "Heating",
    u9: "Wi-Fi",
    u10: "Flat-screen TV with satellite channels",
    u11: "Sitting area",
    u12: "Bed linen and towels",
    u13: "Bathroom with bidet and toiletries",
    u14: "Hair dryer",
    u15: "Wardrobe",
    c1: "Daily American breakfast",
    c2: "24-hour front desk",
    c3: "Daily housekeeping",
    c4: "Garden",
    c5: "Free private parking",
    c6: "Free Wi-Fi",
    c7: "Tour desk",
    c8: "Board games",
    c9: "Safe deposit box",
    c10: "Outdoor security cameras",
    capCocina: "Full kitchen",
    altCocina: "Full kitchen in a cabin",
    opTitle: "In our guests' words",
    opLede: "What they mention most: the space, the terrace with grill, the view, the cleanliness and the care.",
    opGoogle: "· 111 reviews",
    opBooking: "Booking.com scores",
    b1: "Staff",
    b2: "Cleanliness",
    b3: "Comfort",
    b4: "Facilities",
    b5: "Value for money",
    b6: "Location",
    opVoice: "A guest from Argentina said the comfort and quality at La Madrina are among the best they have seen in the country.",
    opRead: "Read the reviews on Google",
    alTitle: "The whole valley, minutes away",
    alLede: "At the front desk we help you plan the day's outings.",
    s1: "Benjamín Matienzo Airport",
    s1t: "Tucumán's international airport, if you are flying in.",
    s2: "Quebrada de Los Sosa",
    s2t: "The climb through forest and waterfalls that leads up to the valley.",
    s3d: "minutes",
    s3: "La Angostura lake and El Mollar",
    s3t: "The lake you see from the terrace, and the village of El Mollar on its shore.",
    s4t: "Your cabin, on Provincial Route 307.",
    s5: "Tafí del Valle town centre",
    s5t: "Restaurants, crafts and local cheese, within walking distance.",
    s6d: "valley",
    s6: "Valley trails",
    s6t: "Hikes and horseback rides with the mountains all around.",
    capValle: "The valley from La Madrina",
    altExterior: "La Madrina's cabins with the valley behind",
    infoTitle: "Good to know",
    statusDefault: "Front desk open 24 hours",
    r1: "Check-in and check-out",
    r1t: "Check-in from 14:00 to 00:00; please let us know your arrival time. Check-out until 10:00.",
    r2: "Children",
    r2t: "Children of all ages are welcome. Free cot on request for babies aged 0 to 2. No extra beds.",
    r3: "Pets",
    r3t: "Allowed on request. Charges may apply.",
    r4: "House rules",
    r4t: "No smoking and no parties. Quiet hours from 00:00 to 08:00. Minimum check-in age: 18.",
    r5: "Payment",
    r5t: "American Express, Visa, Mastercard, Maestro and cash.",
    r6: "Languages",
    r6t: "We speak Spanish and English.",
    r7: "Rates",
    r7t: "They vary by date and cabin, always with breakfast and Wi-Fi included.",
    r7l: "Ask for rates",
    ctTitle: "See you on Route 307",
    ctLede: "Write to us and we will reply with availability and the rate. That way you book directly with us.",
    ctWa: "Message us on WhatsApp",
    chMail: "Email",
    chAddr: "Address",
    mapTitle: "Map: location of La Madrina in Tafí del Valle",
    ctRoute: "Get directions",
    footAlt: "Also known as Apart Hotel La Madrina.",
    dockCta: "Check availability"
  };

  var UI = {
    es: {
      catCta: { s: "Consultar cabaña para 2 a 4", m: "Consultar cabaña familiar", l: "Consultar cabaña grande" },
      errDates: "Elegí la fecha de llegada y la de salida.",
      errOrder: "La salida tiene que ser después de la llegada.",
      errPast: "La llegada no puede ser una fecha pasada.",
      checkinOpen: "Check-in abierto ahora, hasta las 00:00",
      checkinSoon: function (h) { return "Check-in desde las 14:00 · " + (h === 1 ? "falta 1 hora" : "faltan " + h + " horas"); },
      night: "Recepción atendiendo ahora · check-out hasta las 10:00",
      msg: {
        general: "Hola La Madrina, quería consultar disponibilidad y tarifas. ¡Gracias!",
        rates: "Hola La Madrina, quería consultar las tarifas. ¿Me pasan los precios para mis fechas? ¡Gracias!",
        sauco: "Hola La Madrina, quería consultar disponibilidad y tarifa de la cabaña Sauco. ¡Gracias!",
        cat: { s: "Hola La Madrina, quería consultar disponibilidad y tarifa de una cabaña para 2 a 4 personas. ¡Gracias!", m: "Hola La Madrina, quería consultar disponibilidad y tarifa de una cabaña familiar para 4 a 6 personas. ¡Gracias!", l: "Hola La Madrina, quería consultar disponibilidad y tarifa de una cabaña grande para 6 a 8 personas. ¡Gracias!" },
        dates: function (a, b, n, nights) { return "Hola La Madrina, quería consultar disponibilidad y tarifa del " + a + " al " + b + " (" + nights + (nights === 1 ? " noche" : " noches") + ") para " + n + (n === 1 ? " persona" : " personas") + ". ¡Gracias!"; }
      },
      km: "km"
    },
    en: {
      catCta: { s: "Ask about a cabin for 2–4", m: "Ask about a family cabin", l: "Ask about a large cabin" },
      errDates: "Choose your arrival and departure dates.",
      errOrder: "Departure must be after arrival.",
      errPast: "Arrival cannot be in the past.",
      checkinOpen: "Check-in open now, until 00:00",
      checkinSoon: function (h) { return "Check-in from 14:00 · " + h + (h === 1 ? " hour" : " hours") + " to go"; },
      night: "Front desk open now · check-out until 10:00",
      msg: {
        general: "Hello La Madrina, I would like to ask about availability and rates. Thank you!",
        rates: "Hello La Madrina, I would like to ask about your rates for my dates. Thank you!",
        sauco: "Hello La Madrina, I would like to ask about availability and the rate for the Sauco cabin. Thank you!",
        cat: { s: "Hello La Madrina, I would like to ask about availability and rates for a cabin for 2 to 4 people. Thank you!", m: "Hello La Madrina, I would like to ask about availability and rates for a family cabin for 4 to 6 people. Thank you!", l: "Hello La Madrina, I would like to ask about availability and rates for a large cabin for 6 to 8 people. Thank you!" },
        dates: function (a, b, n, nights) { return "Hello La Madrina, I would like to ask about availability and the rate from " + a + " to " + b + " (" + nights + (nights === 1 ? " night" : " nights") + ") for " + n + (n === 1 ? " guest" : " guests") + ". Thank you!"; }
      },
      km: "km"
    }
  };

  var markMq = window.matchMedia("(max-width: 820px)");
  var lang = "es";
  var cat = "s";

  function waLink(text) {
    return "https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(text);
  }

  /* ------------------------------------------------------------
     Idioma
     ------------------------------------------------------------ */
  var store = {
    get: function (k) { try { return window.localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { window.localStorage.setItem(k, v); } catch (e) { /* sin almacenamiento */ } }
  };

  function applyLang(next) {
    lang = next === "en" ? "en" : "es";
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (el.dataset.es === undefined) el.dataset.es = el.textContent;
      el.textContent = lang === "en" && EN[key] ? EN[key] : el.dataset.es;
    });

    document.querySelectorAll("[data-i18n-attr]").forEach(function (el) {
      el.getAttribute("data-i18n-attr").split(";").forEach(function (pair) {
        var parts = pair.split(":");
        var attr = parts[0].trim();
        var key = parts[1].trim();
        var store = "es" + attr.replace(/[^a-z]/gi, "");
        if (el.dataset[store] === undefined) el.dataset[store] = el.getAttribute(attr) || "";
        el.setAttribute(attr, lang === "en" && EN[key] ? EN[key] : el.dataset[store]);
      });
    });

    document.querySelectorAll(".lang__btn").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.dataset.lang === lang));
    });

    var og = document.querySelector('meta[property="og:locale"]');
    if (og) og.setAttribute("content", lang === "en" ? "en_US" : "es_AR");

    updateCatCta();
    updateWaLinks();
    updateStatus();
    updateRoute();
    store.set("lm-lang", lang);
  }

  /* ------------------------------------------------------------
     Enlaces de WhatsApp con mensaje en el idioma elegido
     ------------------------------------------------------------ */
  function updateWaLinks() {
    var m = UI[lang].msg;
    document.querySelectorAll(".js-wa").forEach(function (a) {
      var kind = a.dataset.wa;
      var text = kind === "cat" ? m.cat[cat] : (m[kind] || m.general);
      a.href = waLink(text);
    });
  }

  function updateCatCta() {
    var el = document.querySelector(".js-cat-cta");
    if (el) el.textContent = UI[lang].catCta[cat];
  }

  /* ------------------------------------------------------------
     Selector de categoría
     ------------------------------------------------------------ */
  document.querySelectorAll('input[name="cat"]').forEach(function (r) {
    r.addEventListener("change", function () {
      cat = r.value;
      document.querySelectorAll(".cat").forEach(function (c) { c.hidden = c.dataset.cat !== cat; });
      updateCatCta();
      updateWaLinks();
    });
  });

  /* ------------------------------------------------------------
     Formulario de disponibilidad → WhatsApp
     ------------------------------------------------------------ */
  var form = document.querySelector(".js-avail");
  if (form) {
    var fin = form.elements["in"];
    var fout = form.elements["out"];
    var err = form.querySelector(".form-error");

    var today = new Date();
    var iso = function (d) {
      var z = new Date(d.getTime() - d.getTimezoneOffset() * 60000);
      return z.toISOString().slice(0, 10);
    };
    fin.min = iso(today);
    fout.min = iso(new Date(today.getTime() + 86400000));

    fin.addEventListener("change", function () {
      if (!fin.value) return;
      var next = new Date(fin.value + "T12:00:00");
      next.setDate(next.getDate() + 1);
      fout.min = iso(next);
      if (!fout.value || fout.value <= fin.value) fout.value = iso(next);
      clearError();
    });
    fout.addEventListener("change", clearError);

    function clearError() {
      err.hidden = true; err.textContent = "";
      fin.removeAttribute("aria-invalid"); fout.removeAttribute("aria-invalid");
    }
    function showError(msg, field) {
      err.textContent = msg; err.hidden = false;
      field.setAttribute("aria-invalid", "true");
      field.focus();
    }
    function fmt(v) {
      var p = v.split("-");
      return p[2] + "/" + p[1] + "/" + p[0];
    }

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      clearError();
      var t = UI[lang];
      if (!fin.value) return showError(t.errDates, fin);
      if (!fout.value) return showError(t.errDates, fout);
      if (fin.value < iso(today)) return showError(t.errPast, fin);
      if (fout.value <= fin.value) return showError(t.errOrder, fout);

      var nights = Math.round((new Date(fout.value + "T12:00:00") - new Date(fin.value + "T12:00:00")) / 86400000);
      var n = parseInt(form.elements.guests.value, 10);
      var url = waLink(t.msg.dates(fmt(fin.value), fmt(fout.value), n, nights));
      var w = window.open(url, "_blank", "noopener");
      if (!w) window.location.href = url;
    });
  }

  /* ------------------------------------------------------------
     Estado en vivo (hora de Tucumán)
     ------------------------------------------------------------ */
  function tucumanHour() {
    try {
      var s = new Intl.DateTimeFormat("en-GB", { hour: "2-digit", hourCycle: "h23", timeZone: "America/Argentina/Tucuman" }).format(new Date());
      return parseInt(s, 10);
    } catch (e) {
      return new Date().getUTCHours() - 3 < 0 ? new Date().getUTCHours() + 21 : new Date().getUTCHours() - 3;
    }
  }
  function updateStatus() {
    var el = document.querySelector(".status__text");
    if (!el) return;
    var h = tucumanHour();
    var t = UI[lang];
    if (h >= 14) el.textContent = t.checkinOpen;
    else if (h < 10) el.textContent = t.night;
    else el.textContent = t.checkinSoon(14 - h);
  }
  setInterval(updateStatus, 60000);

  /* ------------------------------------------------------------
     Curvas de nivel (marching squares + unión de segmentos)
     ------------------------------------------------------------ */
  function rng(seed) {
    return function () {
      seed |= 0; seed = (seed + 0x6d2b79f5) | 0;
      var t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  function makeNoise(seed) {
    var r = rng(seed), perm = [], i;
    for (i = 0; i < 256; i++) perm[i] = r();
    function v(ix, iy) { return perm[(ix * 57 + iy * 131 + ((ix * iy) & 255)) & 255]; }
    function sm(t) { return t * t * (3 - 2 * t); }
    function n2(x, y) {
      var ix = Math.floor(x), iy = Math.floor(y), fx = x - ix, fy = y - iy;
      var a = v(ix, iy), b = v(ix + 1, iy), c = v(ix, iy + 1), d = v(ix + 1, iy + 1);
      var ux = sm(fx), uy = sm(fy);
      return a + (b - a) * ux + (c - a) * uy + (a - b - c + d) * ux * uy;
    }
    return function fbm(x, y) {
      var s = 0, amp = 0.5, f = 1;
      for (var k = 0; k < 4; k++) { s += amp * n2(x * f, y * f); f *= 2.03; amp *= 0.5; }
      return s;
    };
  }

  function contours(W, H, step, field, levels, x0, y0) {
    x0 = x0 || 0; y0 = y0 || 0;
    var nx = Math.ceil(W / step) + 1, ny = Math.ceil(H / step) + 1;
    var g = new Float32Array(nx * ny), i, j;
    for (j = 0; j < ny; j++) for (i = 0; i < nx; i++) g[j * nx + i] = field(x0 + i * step, y0 + j * step);

    var out = [];
    levels.forEach(function (L) {
      var segs = [];
      var edgePt = {};
      function key(a, b) { return a < b ? a + "_" + b : b + "_" + a; }
      function interp(p1, p2) {
        var k = key(p1, p2);
        if (edgePt[k]) return k;
        var v1 = g[p1], v2 = g[p2];
        var t = (L - v1) / (v2 - v1);
        var x1 = x0 + (p1 % nx) * step, y1 = y0 + Math.floor(p1 / nx) * step;
        var x2 = x0 + (p2 % nx) * step, y2 = y0 + Math.floor(p2 / nx) * step;
        edgePt[k] = [x1 + (x2 - x1) * t, y1 + (y2 - y1) * t];
        return k;
      }
      for (j = 0; j < ny - 1; j++) {
        for (i = 0; i < nx - 1; i++) {
          var a = j * nx + i, b = a + 1, c = a + nx + 1, d = a + nx;
          var idx = (g[a] > L ? 8 : 0) | (g[b] > L ? 4 : 0) | (g[c] > L ? 2 : 0) | (g[d] > L ? 1 : 0);
          if (idx === 0 || idx === 15) continue;
          var top = function () { return interp(a, b); }, right = function () { return interp(b, c); };
          var bottom = function () { return interp(d, c); }, left = function () { return interp(a, d); };
          switch (idx) {
            case 1: case 14: segs.push([left(), bottom()]); break;
            case 2: case 13: segs.push([bottom(), right()]); break;
            case 3: case 12: segs.push([left(), right()]); break;
            case 4: case 11: segs.push([top(), right()]); break;
            case 5: segs.push([left(), top()]); segs.push([bottom(), right()]); break;
            case 6: case 9: segs.push([top(), bottom()]); break;
            case 7: case 8: segs.push([left(), top()]); break;
            case 10: segs.push([top(), right()]); segs.push([left(), bottom()]); break;
          }
        }
      }
      // Unir segmentos en polilíneas
      var adj = {};
      segs.forEach(function (s, n) {
        (adj[s[0]] = adj[s[0]] || []).push(n);
        (adj[s[1]] = adj[s[1]] || []).push(n);
      });
      var used = new Uint8Array(segs.length);
      var lines = [];
      for (var s0 = 0; s0 < segs.length; s0++) {
        if (used[s0]) continue;
        used[s0] = 1;
        var chain = [segs[s0][0], segs[s0][1]];
        [1, 0].forEach(function (dir) {
          var grow = true;
          while (grow) {
            grow = false;
            var end = dir ? chain[chain.length - 1] : chain[0];
            var list = adj[end] || [];
            for (var q = 0; q < list.length; q++) {
              var sn = list[q];
              if (used[sn]) continue;
              used[sn] = 1;
              var nxt = segs[sn][0] === end ? segs[sn][1] : segs[sn][0];
              if (dir) chain.push(nxt); else chain.unshift(nxt);
              grow = true;
              break;
            }
          }
        });
        if (chain.length > 3) lines.push(chain.map(function (k) { return edgePt[k]; }));
      }
      out.push({ level: L, lines: lines });
    });
    return out;
  }

  function toPath(pts, close) {
    var d = "M" + pts[0][0].toFixed(1) + " " + pts[0][1].toFixed(1);
    for (var k = 1; k < pts.length; k++) d += "L" + pts[k][0].toFixed(1) + " " + pts[k][1].toFixed(1);
    return close ? d + "Z" : d;
  }

  var NS = "http://www.w3.org/2000/svg";
  function addPath(g, d) {
    var p = document.createElementNS(NS, "path");
    p.setAttribute("d", d);
    g.appendChild(p);
    return p;
  }

  function drawHeroTerrain() {
    var gLines = document.getElementById("contours");
    var gIndex = document.getElementById("contoursIndex");
    var gWater = document.getElementById("water");
    if (!gLines) return;
    [gLines, gIndex, gWater].forEach(function (g) { while (g.firstChild) g.removeChild(g.firstChild); });

    var W = 1600, H = 1000;
    var svg = document.getElementById("terrain");
    var sheet = document.querySelector(".sheet");
    var win = document.getElementById("mapWindow");
    var narrow = markMq.matches && win && win.offsetHeight > 0;
    var dom = { x: 0, y: 0, w: W, h: H };
    if (narrow) {
      // Encuadre de celular: la marca, su rótulo y el dique caen dentro de la ventana entre el texto y el formulario
      var reg = { x: 430, y: 320, w: 580, h: 610 };
      var sr = sheet.getBoundingClientRect(), wr = win.getBoundingClientRect();
      var sc = Math.min(wr.width / reg.w, wr.height / reg.h);
      var wcx = wr.left - sr.left + wr.width / 2, wcy = wr.top - sr.top + wr.height / 2;
      dom.w = sr.width / sc; dom.h = sr.height / sc;
      dom.x = reg.x + reg.w / 2 - wcx / sc; dom.y = reg.y + reg.h / 2 - wcy / sc;
      svg.setAttribute("preserveAspectRatio", "none");
    } else {
      svg.setAttribute("preserveAspectRatio", "xMidYMid slice");
    }
    svg.setAttribute("viewBox", [dom.x, dom.y, dom.w, dom.h].map(function (n) { return n.toFixed(1); }).join(" "));
    svg.querySelectorAll("#textMask rect").forEach(function (r, k) {
      r.setAttribute("x", dom.x); r.setAttribute("y", dom.y); r.setAttribute("width", dom.w); r.setAttribute("height", dom.h);
      if (k === 1) r.setAttribute("fill", narrow ? "none" : "url(#fadeText)");
    });
    var mark = document.getElementById("mark");
    if (mark) {
      mark.querySelector(".mark__leader").setAttribute("d", narrow ? "M-14 -4 L -70 -58 L -330 -58" : "M14 -4 L 70 -58 L 210 -58");
      mark.querySelectorAll("text").forEach(function (t) {
        t.setAttribute("x", narrow ? "-78" : "78");
        t.setAttribute("text-anchor", narrow ? "end" : "start");
      });
    }
    var fbm = makeNoise(307);
    function field(x, y) {
      var u = x / W, v = y / H;
      var h = 1.25 * Math.pow(Math.max(0, 1 - v), 1.25) - 0.25 * Math.max(0, v - 1);                                   // cumbres al norte
      h += 0.75 * Math.exp(-Math.pow((u - 0.02) / 0.16, 2)) * (1.1 - v * 0.5); // sierra al oeste
      h += 0.55 * Math.exp(-Math.pow((u - 0.98) / 0.18, 2)) * (1 - v * 0.7);   // cerros al este
      h += 0.42 * fbm(u * 3.2, v * 3.2);
      var wx = x + 120 * (fbm(u * 5 + 3, v * 5) - 0.5), wy = y + 70 * (fbm(u * 5, v * 5 + 7) - 0.5);
      h -= 0.7 * Math.exp(-(Math.pow((wx - 700) / 310, 2) + Math.pow((wy - 805) / 112, 2))); // cuenca del dique
      h -= 0.42 * Math.exp(-(Math.pow((wx - 905) / 150, 2) + Math.pow((wy - 770) / 80, 2)));  // brazo norte
      h -= 0.18 * Math.exp(-(Math.pow((x - 980) / 420, 2) + Math.pow((y - 560) / 260, 2))); // fondo del valle
      return h;
    }

    var lakeLevel = field(720, 800) + 0.2;
    var levels = [];
    for (var L = -0.6; L < 2.6; L += 0.045) levels.push(L);

    var step = narrow ? 10 : 8;
    var res = contours(dom.w, dom.h, step, field, levels, dom.x, dom.y);
    var dLines = "", dIndex = "";
    res.forEach(function (lv, n) {
      if (lv.level < lakeLevel) return;
      lv.lines.forEach(function (pts) {
        var d = toPath(pts, false);
        if (n % 5 === 0) dIndex += d; else dLines += d;
      });
    });
    addPath(gLines, dLines);
    addPath(gIndex, dIndex);

    // Agua: la curva del nivel del dique, rellena; y una línea de orilla interior
    var lake = contours(dom.w, dom.h, step, field, [lakeLevel, lakeLevel - 0.05], dom.x, dom.y);
    var main = lake[0].lines.filter(function (pts) {
      var cx = 0, cy = 0;
      pts.forEach(function (p) { cx += p[0]; cy += p[1]; });
      cx /= pts.length; cy /= pts.length;
      return Math.abs(cx - 720) < 320 && Math.abs(cy - 800) < 180 && pts.length > 30;
    });
    main.forEach(function (pts) { addPath(gWater, toPath(pts, true)); });
    lake[1].lines.forEach(function (pts) {
      if (pts.length > 20) addPath(gWater, toPath(pts, true));
    });
  }

  function drawBandContours() {
    document.querySelectorAll("svg[data-contours]").forEach(function (svg, n) {
      var W = 1600, H = 1000;
      svg.setAttribute("viewBox", "0 0 " + W + " " + H);
      svg.setAttribute("preserveAspectRatio", "xMidYMid slice");
      var fbm = makeNoise(61 + n * 17);
      var field = function (x, y) {
        var u = x / W, v = y / H;
        return 0.9 * fbm(u * 2.2 + n, v * 2.2) + 0.5 * (n ? v : 1 - u);
      };
      var levels = [];
      for (var L = 0; L < 1.6; L += 0.06) levels.push(L);
      var d = "";
      contours(W, H, 14, field, levels).forEach(function (lv) {
        lv.lines.forEach(function (pts) { d += toPath(pts, false); });
      });
      var g = document.createElementNS(NS, "g");
      svg.appendChild(g);
      addPath(g, d);
    });
  }

  // Foto que falta: la plancha muestra curvas de nivel del mismo generador hasta que llegue la foto
  var plateN = 0;
  function contourPlate(fig) {
    if (!fig || fig.querySelector(".plate__map")) return;
    fig.classList.add("is-empty");
    var W = 1200, H = 900, n = plateN++;
    var svg = document.createElementNS(NS, "svg");
    svg.setAttribute("class", "plate__map");
    svg.setAttribute("aria-hidden", "true");
    svg.setAttribute("viewBox", "0 0 " + W + " " + H);
    svg.setAttribute("preserveAspectRatio", "xMidYMid slice");
    var fbm = makeNoise(900 + n * 31);
    var field = function (x, y) { var u = x / W, v = y / H; return fbm(u * 1.8 + n, v * 1.8) + 0.35 * (n % 2 ? u : v); };
    var levels = []; for (var L = 0; L < 1.4; L += 0.035) levels.push(L);
    var d = "";
    contours(W, H, 12, field, levels).forEach(function (lv) { lv.lines.forEach(function (pts) { d += toPath(pts, false); }); });
    addPath(svg, d);
    fig.insertBefore(svg, fig.firstChild);
  }
  window.lmPlate = contourPlate;

  /* ------------------------------------------------------------
     Ruta 307: la línea avanza con el scroll
     ------------------------------------------------------------ */
  var edge = document.querySelector(".edge");
  var rail = document.querySelector(".rail");
  var railDraw = document.querySelector(".rail__draw");
  var railKm = document.querySelector(".rail__km");
  var lineKm = document.querySelector(".route-line__km");
  var valleyBands = Array.prototype.slice.call(document.querySelectorAll(".band--valley"));
  if (railDraw && railDraw.getTotalLength) {
    try { rail.style.setProperty("--len", Math.ceil(railDraw.getTotalLength() * 2)); } catch (e) { /* ok */ }
  }
  var ticking = false;

  function kmText(p) {
    var v = (p * 61.7).toFixed(1);
    return "km " + (lang === "es" ? v.replace(".", ",") : v);
  }

  function updateRoute() {
    // La ruta termina al llegar al mapa de contacto
    var ct = document.getElementById("contacto");
    var max = ct ? ct.offsetTop - window.innerHeight * 0.3 : document.documentElement.scrollHeight - window.innerHeight;
    var p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
    // Un paso adelante: la línea va levemente por delante del lector
    var ahead = Math.min(1, p * 1.04 + 0.01);
    document.documentElement.style.setProperty("--p", ahead.toFixed(4));
    if (rail) rail.style.setProperty("--p", ahead.toFixed(4));
    var txt = p > 0.985 ? "km 61,7 · La Madrina" : kmText(p);
    if (lang === "en" && p > 0.985) txt = "km 61.7 · La Madrina";
    if (railKm) railKm.textContent = txt;
    if (lineKm) lineKm.textContent = txt;
    if (edge) edge.classList.toggle("is-scrolled", window.scrollY > 40);

    var sheetEl = document.querySelector(".sheet");
    if (rail && sheetEl) rail.classList.toggle("is-on", sheetEl.getBoundingClientRect().bottom < window.innerHeight * 0.35);
    if (rail && railKm && window.innerWidth >= 1400) {
      var r = railKm.getBoundingClientRect();
      var y = r.top + r.height / 2;
      var dark = valleyBands.some(function (b) { var br = b.getBoundingClientRect(); return y >= br.top && y <= br.bottom; });
      rail.classList.toggle("is-dark", dark);
    }
    updateDock();
    ticking = false;
  }
  window.addEventListener("scroll", function () {
    if (!ticking) { ticking = true; window.requestAnimationFrame(updateRoute); }
  }, { passive: true });
  window.addEventListener("resize", updateRoute);

  /* ------------------------------------------------------------
     Barra fija de contacto (celular)
     ------------------------------------------------------------ */
  var dock = document.getElementById("dock");
  var hero = document.getElementById("consulta");
  var contact = document.getElementById("contacto");
  function updateDock() {
    if (!dock || !hero || !contact) return;
    var pastHero = hero.getBoundingClientRect().bottom < 0;
    var atContact = contact.getBoundingClientRect().top < window.innerHeight * 0.85;
    var show = pastHero && !atContact;
    dock.classList.toggle("is-visible", show);
    dock.setAttribute("aria-hidden", String(!show));
    var a = dock.querySelector("a");
    if (a) a.tabIndex = show ? 0 : -1;
  }

  /* ------------------------------------------------------------
     Menú móvil
     ------------------------------------------------------------ */
  var menuBtn = document.querySelector(".menu-btn");
  var nav = document.getElementById("nav");
  function setMenu(open) {
    nav.classList.toggle("is-open", open);
    menuBtn.setAttribute("aria-expanded", String(open));
    var key = open ? "menuClose" : "menuOpen";
    menuBtn.setAttribute("aria-label", lang === "en" ? EN[key] : (open ? "Cerrar menú" : "Abrir menú"));
    menuBtn.innerHTML = '<i data-lucide="' + (open ? "x" : "menu") + '" aria-hidden="true"></i>';
    if (window.lucide) window.lucide.createIcons();
  }
  if (menuBtn && nav) {
    menuBtn.addEventListener("click", function () { setMenu(!nav.classList.contains("is-open")); });
    nav.addEventListener("click", function (e) { if (e.target.closest("a")) setMenu(false); });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("is-open")) { setMenu(false); menuBtn.focus(); }
    });
  }

  /* ------------------------------------------------------------
     Sección actual en la navegación
     ------------------------------------------------------------ */
  if ("IntersectionObserver" in window) {
    var links = {};
    document.querySelectorAll(".nav__list a").forEach(function (a) { links[a.getAttribute("href").slice(1)] = a; });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        Object.keys(links).forEach(function (k) { links[k].removeAttribute("aria-current"); });
        if (links[en.target.id]) links[en.target.id].setAttribute("aria-current", "true");
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    document.querySelectorAll("main > section[id]").forEach(function (s) { io.observe(s); });

    var prof = document.querySelector(".profile");
    if (prof) {
      var io2 = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) { if (en.isIntersecting) { prof.classList.add("is-in"); io2.disconnect(); } });
      }, { threshold: 0.35 });
      io2.observe(prof);
    }
  } else {
    var pf = document.querySelector(".profile");
    if (pf) pf.classList.add("is-in");
  }

  /* ------------------------------------------------------------
     Foto del recuadro del mapa: solo si existe
     ------------------------------------------------------------ */
  var inset = document.getElementById("heroInset");
  if (inset) {
    var im = inset.querySelector("img");
    var show = function () { if (im.naturalWidth > 0) inset.hidden = false; };
    if (im.complete) show(); else im.addEventListener("load", show);
  }

  /* ------------------------------------------------------------
     Arranque
     ------------------------------------------------------------ */
  document.querySelectorAll(".lang__btn").forEach(function (b) {
    b.addEventListener("click", function () { applyLang(b.dataset.lang); });
  });

  var y = document.getElementById("year");
  if (y) y.textContent = String(new Date().getFullYear());

  drawHeroTerrain();
  drawBandContours();
  document.querySelectorAll(".plate.is-empty").forEach(contourPlate);
  var lastW = window.innerWidth, rT;
  window.addEventListener("resize", function () {
    clearTimeout(rT);
    rT = setTimeout(function () { if (window.innerWidth !== lastW) { lastW = window.innerWidth; drawHeroTerrain(); } }, 200);
  });



  var params = new URLSearchParams(window.location.search);
  applyLang(params.get("lang") || store.get("lm-lang") || "es");

  function startSurvey() {
    var sheet = document.querySelector(".sheet");
    if (!sheet) return;
    if (reduceMotion) { sheet.classList.add("is-surveyed"); return; }
    window.requestAnimationFrame(function () {
      window.requestAnimationFrame(function () { sheet.classList.add("is-surveyed"); });
    });
  }
  startSurvey();

  function icons() { if (window.lucide) window.lucide.createIcons({ attrs: { "aria-hidden": "true" } }); }
  if (window.lucide) icons(); else window.addEventListener("load", icons);
})();

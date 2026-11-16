/* =========================================================
   THE MERIDIAN — script.js
   Shared by every page. Sections:
   1. Article and section data   (edit this to add articles)
   2. Small helpers
   3. Header: date, sticky menu, mobile menu
   4. Newsletter form
   5. Section (category) page
   6. Article page
   7. Editorial illustrations
   8. Start-up
   ========================================================= */

/* ---------------------------------------------------------
   1. ARTICLE AND SECTION DATA
   Each article has: id (used in its web address), cat (its
   section), kicker (small red label), title, dek (summary),
   author, mins (reading time), art (illustration), date.
   An optional "body" holds the full text.
   --------------------------------------------------------- */
var MERIDIAN = {
 "categories": [
  {
   "slug": "world-politics",
   "name": "World Politics",
   "description": "Elections, leaders, ideologies and the forces reshaping governments around the globe."
  },
  {
   "slug": "indian-politics",
   "name": "Indian Politics",
   "description": "Parliament, parties, federalism and the ideas shaping the world’s largest democracy."
  },
  {
   "slug": "geopolitics",
   "name": "Geopolitics",
   "description": "How geography, resources and strategy decide the fortunes of nations."
  },
  {
   "slug": "international-relations",
   "name": "International Relations",
   "description": "Diplomacy, alliances and institutions: how states deal with one another."
  },
  {
   "slug": "political-economy",
   "name": "Political Economy",
   "description": "Where power meets money: trade, debt, industry and development."
  },
  {
   "slug": "defence-security",
   "name": "Defence & Security",
   "description": "Armed forces, doctrine, technology and the changing character of conflict."
  },
  {
   "slug": "history-thought",
   "name": "History & Political Thought",
   "description": "The thinkers, events and ideas that explain the world we inherited."
  },
  {
   "slug": "essays",
   "name": "Essays & Analysis",
   "description": "Long-form arguments and reflective analysis on the questions that matter."
  }
 ],
 "articles": [
  {
   "id": "indo-pacific-new-map",
   "cat": "geopolitics",
   "kicker": "Cover Essay",
   "title": "The New Map of Power: Why the Indo-Pacific Will Define This Century",
   "dek": "Trade routes, naval doctrine and a contest of ideas are redrawing the world's centre of gravity. The question is no longer whether Asia rises, but who writes the rules when it does.",
   "author": "Arjun Mehra",
   "mins": 18,
   "art": "globe",
   "date": "16 November 2026",
   "body": [
    [
     "p",
     "For most of the last two centuries, the centre of world politics sat in the Atlantic. Empires, alliances and the great wars of the modern age were decided by powers on either side of that ocean. That era is ending. The arena that now shapes trade, technology and military planning stretches from the eastern coast of Africa to the western shores of the Americas, and its heart lies in the waters of Asia."
    ],
    [
     "p",
     "The numbers alone tell part of the story. A majority of the world’s population lives in the region, along with several of its fastest-growing economies and many of its busiest shipping lanes. But numbers do not explain why the Indo-Pacific has become a contest rather than simply a marketplace. The deeper reason is that several powers with very different visions of order now share the same waters."
    ],
    [
     "h2",
     "A crowded ocean"
    ],
    [
     "p",
     "Rising states want a voice that matches their weight. Established powers want to preserve the rules that served them. Smaller nations, caught in between, want to avoid being forced to choose. Each of these instincts is reasonable on its own; together they produce a region of constant manoeuvre, where ports, undersea cables and fishing grounds all carry strategic meaning."
    ],
    [
     "quote",
     "The question is no longer whether Asia rises, but who writes the rules when it does."
    ],
    [
     "p",
     "For India, the shift is both an opportunity and a test. Its geography places it at the centre of the Indian Ocean, astride the routes that carry energy from the Gulf to East Asia. That position offers influence, but only if it is matched by naval capacity, economic partnerships and a diplomacy patient enough to work with many partners at once."
    ],
    [
     "h2",
     "What comes next"
    ],
    [
     "p",
     "The coming decades are unlikely to produce a single dominant power in the region. More probably, they will produce a layered order: overlapping groupings, competing infrastructure projects and an uneasy balance maintained by deterrence and trade in equal measure. Understanding that order, and the choices it forces on every capital, is the task of this century’s statecraft."
    ]
   ]
  },
  {
   "id": "fragmented-alliances",
   "cat": "world-politics",
   "kicker": "World Politics",
   "title": "The Age of Fragmented Alliances",
   "dek": "Old partnerships are loosening, and new ones are more transactional than ever.",
   "author": "Clara Weiss",
   "mins": 12,
   "art": "network",
   "date": "16 November 2026"
  },
  {
   "id": "debt-dollars-developing-world",
   "cat": "political-economy",
   "kicker": "Political Economy",
   "title": "Debt, Dollars and the Developing World",
   "dek": "A strong dollar and high interest rates are squeezing the poorest economies.",
   "author": "Kofi Asante",
   "mins": 10,
   "art": "ledger",
   "date": "16 November 2026"
  },
  {
   "id": "india-maritime-moment",
   "cat": "defence-security",
   "kicker": "Defence & Security",
   "title": "India's Maritime Moment",
   "dek": "Why the Indian Ocean has become central to New Delhi’s strategic thinking.",
   "author": "Meera Iyer",
   "mins": 9,
   "art": "sea",
   "date": "15 November 2026"
  },
  {
   "id": "weekly-briefing",
   "cat": "world-politics",
   "kicker": "The Briefing",
   "title": "The Briefing: Five Things to Understand This Week",
   "dek": "Five things to understand about the shifting balance of power this week, explained in under five minutes.",
   "author": "The Editors",
   "mins": 5,
   "art": "map",
   "date": "15 November 2026"
  },
  {
   "id": "return-industrial-policy",
   "cat": "political-economy",
   "kicker": "Political Economy",
   "title": "The Return of Industrial Policy",
   "dek": "Governments are picking winners again. History suggests caution.",
   "author": "Daniel Okafor",
   "mins": 8,
   "art": "skyline",
   "date": "15 November 2026"
  },
  {
   "id": "drones-cheap-deterrence",
   "cat": "defence-security",
   "kicker": "Defence & Security",
   "title": "Drones, Doctrine and the End of Cheap Deterrence",
   "dek": "Inexpensive machines are changing the economics of war.",
   "author": "Rohan Kapoor",
   "mins": 11,
   "art": "radar",
   "date": "14 November 2026"
  },
  {
   "id": "europe-uneasy-awakening",
   "cat": "world-politics",
   "kicker": "World Politics",
   "title": "Europe's Uneasy Awakening",
   "dek": "A continent rediscovers hard power, and its limits.",
   "author": "Sophie Laurent",
   "mins": 9,
   "art": "map",
   "date": "14 November 2026"
  },
  {
   "id": "sovereignty-networked-age",
   "cat": "essays",
   "kicker": "Essays & Analysis",
   "title": "What Sovereignty Means in a Networked Age",
   "dek": "Borders still matter, but data, capital and ideas ignore them.",
   "author": "Nadia Rahman",
   "mins": 14,
   "art": "lines",
   "date": "14 November 2026"
  },
  {
   "id": "federalism-under-strain",
   "cat": "indian-politics",
   "kicker": "Federalism",
   "title": "Federalism Under Strain: The Centre, the States and the Fiscal Bargain",
   "dek": "As revenue and responsibility drift apart, India's founding compromise between Delhi and the states faces its sternest test in decades.",
   "author": "Kavya Nair",
   "mins": 15,
   "art": "dome",
   "date": "13 November 2026"
  },
  {
   "id": "regional-parties",
   "cat": "indian-politics",
   "kicker": "Parties",
   "title": "The Quiet Rise of Regional Parties",
   "dek": "How state-level politics continues to shape national outcomes.",
   "author": "Sameer Khan",
   "mins": 7,
   "art": "map",
   "date": "13 November 2026"
  },
  {
   "id": "welfare-state-scale",
   "cat": "indian-politics",
   "kicker": "Policy",
   "title": "Can India's Welfare State Scale?",
   "dek": "Direct transfers have changed governance. Can they change outcomes?",
   "author": "Ananya Bose",
   "mins": 10,
   "art": "ledger",
   "date": "13 November 2026"
  },
  {
   "id": "delimitation-representation",
   "cat": "indian-politics",
   "kicker": "Constitution",
   "title": "Delimitation and the Arithmetic of Representation",
   "dek": "Redrawing constituencies raises hard questions about fairness and federal balance.",
   "author": "Vikram Sethi",
   "mins": 12,
   "art": "map",
   "date": "12 November 2026"
  },
  {
   "id": "coalitions-without-compromise",
   "cat": "indian-politics",
   "kicker": "Parliament",
   "title": "Coalitions Without Compromise?",
   "dek": "What coalition politics demands, and what it often fails to deliver.",
   "author": "Priya Menon",
   "mins": 8,
   "art": "dome",
   "date": "12 November 2026"
  },
  {
   "id": "courts-constitution-power",
   "cat": "indian-politics",
   "kicker": "Judiciary",
   "title": "The Courts, the Constitution and the Limits of Power",
   "dek": "The judiciary’s role in checking executive authority.",
   "author": "Farhan Ali",
   "mins": 11,
   "art": "columns",
   "date": "12 November 2026"
  },
  {
   "id": "middle-powers-moment",
   "cat": "international-relations",
   "kicker": "Diplomacy",
   "title": "The Middle Powers' Moment",
   "dek": "Neither superpower can set the agenda alone. That leaves room for everyone else.",
   "author": "Elena Petrova",
   "mins": 10,
   "art": "summit",
   "date": "11 November 2026"
  },
  {
   "id": "brics-after-expansion",
   "cat": "international-relations",
   "kicker": "Multilateralism",
   "title": "BRICS After Expansion: Bloc or Bazaar?",
   "dek": "A larger club brings more weight and more disagreement.",
   "author": "Thabo Mokoena",
   "mins": 9,
   "art": "network",
   "date": "11 November 2026"
  },
  {
   "id": "diplomacy-age-sanctions",
   "cat": "international-relations",
   "kicker": "Statecraft",
   "title": "Diplomacy in the Age of Sanctions",
   "dek": "Economic pressure has become the first tool of foreign policy. Does it work?",
   "author": "James Whitfield",
   "mins": 12,
   "art": "ledger",
   "date": "11 November 2026"
  },
  {
   "id": "choke-points-straits",
   "cat": "geopolitics",
   "kicker": "Maritime Power",
   "title": "Choke Points: The Straits That Hold the World Economy Together",
   "dek": "From Hormuz to Malacca, a handful of narrow waterways carry the lifeblood of global trade.",
   "author": "Aditya Rao",
   "mins": 16,
   "art": "sea",
   "date": "10 November 2026"
  },
  {
   "id": "arctic-thaw",
   "cat": "geopolitics",
   "kicker": "Climate & Strategy",
   "title": "The Arctic Thaw and the Scramble for the North",
   "dek": "Melting ice is opening new shipping lanes, and old rivalries.",
   "author": "Ingrid Halvorsen",
   "mins": 13,
   "art": "arctic",
   "date": "10 November 2026"
  },
  {
   "id": "great-game-pipelines",
   "cat": "geopolitics",
   "kicker": "Central Asia",
   "title": "The New Great Game Is About Pipelines",
   "dek": "Energy corridors are redrawing influence across Central Asia.",
   "author": "Timur Abdulov",
   "mins": 9,
   "art": "map",
   "date": "10 November 2026"
  },
  {
   "id": "water-borders-himalayas",
   "cat": "geopolitics",
   "kicker": "Himalayas",
   "title": "Water, Borders and the Roof of the World",
   "dek": "Rivers that begin in the mountains carry strategic weight downstream.",
   "author": "Tenzin Dorje",
   "mins": 11,
   "art": "arctic",
   "date": "9 November 2026"
  },
  {
   "id": "minerals-ports-africa",
   "cat": "geopolitics",
   "kicker": "Africa",
   "title": "Minerals, Ports and the Contest for a Continent",
   "dek": "Critical minerals have turned Africa into a strategic prize.",
   "author": "Amara Diallo",
   "mins": 10,
   "art": "network",
   "date": "9 November 2026"
  },
  {
   "id": "kautilya-realist-tradition",
   "cat": "history-thought",
   "kicker": "Classical Thought",
   "title": "Kautilya and the Realist Tradition",
   "dek": "What the Arthashastra can still teach modern statecraft.",
   "author": "Siddharth Joshi",
   "mins": 17,
   "art": "columns",
   "date": "9 November 2026"
  },
  {
   "id": "hobbes-21st-century",
   "cat": "history-thought",
   "kicker": "Political Philosophy",
   "title": "Hobbes in the Twenty-First Century",
   "dek": "Fear, order and the state in an anxious age.",
   "author": "Eleanor Hughes",
   "mins": 14,
   "art": "lines",
   "date": "8 November 2026"
  },
  {
   "id": "non-alignment",
   "cat": "history-thought",
   "kicker": "Modern History",
   "title": "Non-Alignment and the Art of Choosing Not to Choose",
   "dek": "India's Cold War strategy, revisited for a divided world.",
   "author": "Rahul Banerjee",
   "mins": 19,
   "art": "globe",
   "date": "8 November 2026"
  },
  {
   "id": "myth-liberal-order",
   "cat": "essays",
   "kicker": "Essay",
   "title": "The Myth of the Liberal Order",
   "dek": "Was the post-war order ever as liberal, or as orderly, as its defenders claim?",
   "author": "Hannah Clarke",
   "mins": 13,
   "art": "columns",
   "date": "8 November 2026"
  },
  {
   "id": "small-states",
   "cat": "international-relations",
   "kicker": "Analysis",
   "title": "Why Small States Punch Above Their Weight",
   "dek": "Agility, niche diplomacy and smart alliances.",
   "author": "Luis Ortega",
   "mins": 8,
   "art": "summit",
   "date": "7 November 2026"
  },
  {
   "id": "idea-of-bharat",
   "cat": "history-thought",
   "kicker": "India",
   "title": "The Idea of Bharat, Then and Now",
   "dek": "How ideas of the nation have evolved since independence.",
   "author": "Neha Verma",
   "mins": 15,
   "art": "dome",
   "date": "7 November 2026"
  },
  {
   "id": "semiconductors-new-oil",
   "cat": "political-economy",
   "kicker": "Economy",
   "title": "Semiconductors Are the New Oil",
   "dek": "Chips have become the strategic commodity of the century.",
   "author": "Kenji Morita",
   "mins": 10,
   "art": "radar",
   "date": "7 November 2026"
  },
  {
   "id": "partition-archives",
   "cat": "history-thought",
   "kicker": "History",
   "title": "Lessons From the Partition Archives",
   "dek": "What the records of 1947 reveal about memory and the state.",
   "author": "Ayesha Siddiqui",
   "mins": 16,
   "art": "columns",
   "date": "6 November 2026"
  }
 ]
};

(function () {
  'use strict';

  /* ---------------------------------------------------------
     2. SMALL HELPERS
     --------------------------------------------------------- */
  var CATS = MERIDIAN.categories;
  var ARTICLES = MERIDIAN.articles;

  function $(sel, root) { return (root || document).querySelector(sel); }
  function $all(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  var SINGLE = document.body.getAttribute('data-page') === 'single';
  var ROUTE = {};
  function param(name) {
    if (SINGLE) return ROUTE[name] || null;
    try { return new URLSearchParams(window.location.search).get(name); }
    catch (e) {
      var m = new RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
      return m ? decodeURIComponent(m[1]) : null;
    }
  }
  function catBySlug(slug) {
    for (var i = 0; i < CATS.length; i++) { if (CATS[i].slug === slug) return CATS[i]; }
    return null;
  }
  function articleById(id) {
    for (var i = 0; i < ARTICLES.length; i++) { if (ARTICLES[i].id === id) return ARTICLES[i]; }
    return null;
  }
  function articlesIn(slug) {
    return ARTICLES.filter(function (a) { return a.cat === slug; });
  }
  function articleUrl(a) { return SINGLE ? '#article-' + a.id : 'article.html?id=' + encodeURIComponent(a.id); }
  function catUrl(slug) { return SINGLE ? '#section-' + slug : 'category.html?c=' + encodeURIComponent(slug); }
  function allUrl() { return SINGLE ? '#sections' : 'category.html'; }
  function homeUrl() { return SINGLE ? '#home' : 'index.html'; }
  function byline(a, long) {
    return 'By <strong>' + esc(a.author) + '</strong> &middot; ' + a.mins + ' min' + (long ? ' read' : '');
  }
  function setMeta(title, desc) {
    document.title = title;
    var m = $('meta[name="description"]');
    if (m && desc) m.setAttribute('content', desc);
  }
  function markActiveNav(slug) {
    $all('.nav__list a').forEach(function (a) {
      var on = a.getAttribute('data-cat') === slug;
      a.classList.toggle('is-active', on);
      if (on) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
    });
  }

  /* Article card (same design as on the homepage) */
  function cardHTML(a) {
    return '<article class="card"><a href="' + articleUrl(a) + '">' +
      '<figure class="art" data-art="' + esc(a.art) + '" style="margin:0 0 1.1rem"></figure>' +
      '<p class="kicker">' + esc(a.kicker) + '</p>' +
      '<h3><span class="title-link">' + esc(a.title) + '</span></h3>' +
      '<p class="dek">' + esc(a.dek) + '</p>' +
      '<p class="byline">' + byline(a) + '</p>' +
      '</a></article>';
  }

  function chipsHTML(active) {
    var html = '<nav class="chips" aria-label="Sections">' +
      '<a class="chip' + (active ? '' : ' is-active') + '" href="' + allUrl() + '">All</a>';
    CATS.forEach(function (c) {
      html += '<a class="chip' + (c.slug === active ? ' is-active' : '') + '" href="' + catUrl(c.slug) + '">' + esc(c.name) + '</a>';
    });
    return html + '</nav>';
  }

  /* ---------------------------------------------------------
     3. HEADER: DATE, STICKY MENU, MOBILE MENU
     --------------------------------------------------------- */
  function initHeader() {
    var today = $('#today');
    if (today) {
      try {
        today.textContent = new Date().toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
      } catch (e) { today.textContent = ''; }
    }
    var year = $('#year');
    if (year) year.textContent = new Date().getFullYear();

    var nav = $('#nav');
    var toggle = $('#navToggle');
    var mast = $('.masthead');
    if (!nav) return;

    function onScroll() {
      var limit = mast ? mast.offsetTop + mast.offsetHeight : 0;
      nav.classList.toggle('is-stuck', window.scrollY > limit);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    function closeMenu() {
      nav.classList.remove('is-open');
      if (toggle) toggle.setAttribute('aria-expanded', 'false');
    }
    if (toggle) {
      toggle.addEventListener('click', function () {
        var open = nav.classList.toggle('is-open');
        toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
    }
    $all('.nav__list a').forEach(function (a) { a.addEventListener('click', closeMenu); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeMenu(); });
    document.addEventListener('click', function (e) { if (!nav.contains(e.target)) closeMenu(); });
    window.addEventListener('resize', function () { if (window.innerWidth > 1080) closeMenu(); });
  }

  /* ---------------------------------------------------------
     4. NEWSLETTER FORM
     There is no server yet, so this checks the address and
     shows a message. Later we can connect a free service.
     --------------------------------------------------------- */
  function initNewsletter() {
    var form = $('#nlForm');
    if (!form) return;
    var input = $('#nlEmail');
    var msg = $('#nlMsg');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var v = input.value.trim();
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)) {
        msg.textContent = 'Please enter a valid email address.';
        msg.className = 'nl__msg is-error';
        input.focus();
        return;
      }
      msg.textContent = 'Thank you! Email sign-ups are not connected yet, so nothing was sent. They will work once we add a free newsletter service.';
      msg.className = 'nl__msg is-ok';
      form.reset();
    });
  }

  /* ---------------------------------------------------------
     5. SECTION (CATEGORY) PAGE  —  category.html?c=geopolitics
     --------------------------------------------------------- */
  function renderCategory() {
    var view = $('#view');
    if (!view) return;
    var slug = param('c');
    var cat = slug ? catBySlug(slug) : null;

    if (!cat) {
      /* No section chosen (or unknown): show every section */
      var html = '<div class="wrap all-sections">' +
        '<header class="page-head"><p class="crumbs"><a href="' + homeUrl() + '">Home</a><span>/</span>Sections</p>' +
        '<h1>All Sections</h1>' +
        '<p class="dek">' + (slug ? 'We couldn’t find that section, but here is everything The Meridian covers.' :
          'Everything The Meridian covers, from Indian politics to the history of ideas.') + '</p>' +
        chipsHTML(null) + '</header>';
      CATS.forEach(function (c) {
        var list = articlesIn(c.slug).slice(0, 3);
        if (!list.length) return;
        html += '<section class="section"><div class="section-head"><h2>' + esc(c.name) + '</h2>' +
          '<a href="' + catUrl(c.slug) + '" class="more">View section &rarr;</a></div>' +
          '<div class="grid-3 grid-3--flow">' + list.map(cardHTML).join('') + '</div></section>';
      });
      view.innerHTML = html + '</div>';
      setMeta('All Sections — The Meridian', 'Browse every section of The Meridian.');
      markActiveNav(null);
      return;
    }

    var items = articlesIn(cat.slug);
    var lead = items[0];
    var rest = items.slice(1);
    var out = '<div class="wrap">' +
      '<header class="page-head"><p class="crumbs"><a href="' + homeUrl() + '">Home</a><span>/</span><a href="' + allUrl() + '">Sections</a></p>' +
      '<h1>' + esc(cat.name) + '</h1>' +
      '<p class="dek">' + esc(cat.description) + '</p>' +
      '<p class="page-head__count">' + items.length + (items.length === 1 ? ' article' : ' articles') + '</p>' +
      chipsHTML(cat.slug) + '</header>';

    if (!lead) {
      out += '<p class="empty">New articles for this section are coming soon.</p>';
    } else {
      out += '<section class="cat-lead"><a href="' + articleUrl(lead) + '">' +
        '<figure class="art" data-art="' + esc(lead.art) + '"></figure>' +
        '<div><p class="kicker">' + esc(lead.kicker) + '</p>' +
        '<h2><span class="title-link">' + esc(lead.title) + '</span></h2>' +
        '<p class="dek">' + esc(lead.dek) + '</p>' +
        '<p class="byline">' + byline(lead, true) + '</p></div></a></section>';
      if (rest.length) {
        out += '<section class="cat-more"><div class="section-head"><h2>More in ' + esc(cat.name) + '</h2></div>' +
          '<div class="grid-3 grid-3--flow">' + rest.map(cardHTML).join('') + '</div></section>';
      }
    }
    view.innerHTML = out + '</div>';
    setMeta(cat.name + ' — The Meridian', cat.description);
    markActiveNav(cat.slug);
  }

  /* ---------------------------------------------------------
     6. ARTICLE PAGE  —  article.html?id=arctic-thaw
     --------------------------------------------------------- */
  function sampleBody(a, cat) {
    return [
      ['p', 'This is a sample article for The Meridian’s ' + cat.name + ' section. It shows how a complete piece will look once it is published: the headline, the summary, the byline, and comfortable reading text set in a single column.'],
      ['p', 'When the real essay is written, this space will carry its argument: the background a reader needs, the evidence that supports the case, and the counter-arguments that test it. Good analysis begins with a clear question and ends with a reason to care.'],
      ['quote', 'Every argument about power is, in the end, an argument about who decides.'],
      ['h2', 'How the finished article will look'],
      ['p', 'Sub-headings like the one above break long pieces into readable parts. Quotations are set apart in large italic type, and every article ends with the author’s name and links to related reading in the same section.'],
      ['p', 'To publish the real article, this sample text will be replaced with the author’s own words. The layout, typography and colours stay exactly the same.']
    ];
  }

  function bodyHTML(blocks) {
    return blocks.map(function (b) {
      if (b[0] === 'h2') return '<h2>' + esc(b[1]) + '</h2>';
      if (b[0] === 'quote') return '<blockquote>' + esc(b[1]) + '</blockquote>';
      return '<p>' + esc(b[1]) + '</p>';
    }).join('');
  }

  function initials(name) {
    return name.split(/\s+/).filter(Boolean).slice(0, 2).map(function (w) { return w.charAt(0); }).join('').toUpperCase();
  }

  function renderArticle() {
    var view = $('#view');
    if (!view) return;
    var a = articleById(param('id'));

    if (!a) {
      view.innerHTML = '<section class="notfound"><div class="wrap">' +
        '<p class="kicker">Article not found</p><h1>We couldn’t find that article.</h1>' +
        '<p class="dek">It may have moved, or the link may be incomplete.</p>' +
        '<p class="notfound__links"><a class="btn" href="' + homeUrl() + '">Go to the homepage</a> ' +
        '<a class="btn btn--ghost" href="' + allUrl() + '">Browse all sections</a></p></div></section>';
      setMeta('Article not found — The Meridian');
      return;
    }

    var cat = catBySlug(a.cat) || { slug: a.cat, name: a.cat };
    var sample = !a.body;
    var kick = '<a href="' + catUrl(cat.slug) + '">' + esc(cat.name) + '</a>' +
      (a.kicker && a.kicker !== cat.name ? ' &middot; ' + esc(a.kicker) : '');

    var related = articlesIn(cat.slug).filter(function (x) { return x.id !== a.id; });
    if (related.length < 3) {
      ARTICLES.forEach(function (x) {
        if (related.length < 3 && x.id !== a.id && related.indexOf(x) === -1) related.push(x);
      });
    }
    related = related.slice(0, 3);

    view.innerHTML =
      '<article class="article"><div class="wrap">' +
        '<header class="article__head">' +
          '<p class="crumbs"><a href="' + homeUrl() + '">Home</a><span>/</span><a href="' + catUrl(cat.slug) + '">' + esc(cat.name) + '</a></p>' +
          '<p class="kicker">' + kick + '</p>' +
          '<h1 class="article__title">' + esc(a.title) + '</h1>' +
          '<p class="dek">' + esc(a.dek) + '</p>' +
          '<div class="article__meta"><span>By <strong>' + esc(a.author) + '</strong></span><span>' + esc(a.date) + '</span><span>' + a.mins + ' min read</span></div>' +
        '</header>' +
        '<figure class="article__hero"><div class="art" data-art="' + esc(a.art) + '"></div>' +
          '<figcaption class="caption">Illustration &middot; The Meridian</figcaption></figure>' +
        (sample ? '<p class="notice"><strong>Sample article.</strong> This page uses placeholder text to show the article design. The real article will replace it.</p>' : '') +
        '<div class="prose">' + bodyHTML(a.body || sampleBody(a, cat)) + '</div>' +
        '<div class="article__foot">' +
          '<div class="author"><span class="author__mark" aria-hidden="true">' + esc(initials(a.author)) + '</span>' +
            '<div><p class="author__name">' + esc(a.author) + '</p><p class="author__role">Writes on ' + esc(cat.name) + ' for The Meridian</p></div></div>' +
          '<div class="share"><button type="button" class="btn btn--ghost" id="copyLink">Copy link</button>' +
            '<a class="btn" href="' + catUrl(cat.slug) + '">More in ' + esc(cat.name) + '</a></div>' +
          '<p class="share__msg" id="shareMsg" role="status" aria-live="polite"></p>' +
        '</div>' +
      '</div></article>' +
      '<section class="related"><div class="wrap">' +
        '<div class="section-head"><h2>Read Next</h2><a href="' + catUrl(cat.slug) + '" class="more">' + esc(cat.name) + ' &rarr;</a></div>' +
        '<div class="grid-3 grid-3--flow">' + related.map(cardHTML).join('') + '</div>' +
      '</div></section>';

    setMeta(a.title + ' — The Meridian', a.dek);
    markActiveNav(cat.slug);

    var btn = $('#copyLink');
    var msg = $('#shareMsg');
    if (btn) {
      btn.addEventListener('click', function () {
        var url = window.location.href;
        function done(ok) {
          msg.textContent = ok ? 'Link copied. You can paste it anywhere.' : 'Copy this page’s address from your browser’s address bar.';
        }
        try {
          navigator.clipboard.writeText(url).then(function () { done(true); }, function () { done(false); });
        } catch (e) { done(false); }
      });
    }
  }

  /* ---------------------------------------------------------
     7. EDITORIAL ILLUSTRATIONS
     Drawn with code, so there are no image files to break.
     Later, each can be replaced by a real photograph.
     --------------------------------------------------------- */
  function renderArt(root) {
  var N='#0B1F33',N2='#13304D',C='#B31217',I='#F5F1E8',S='#6B7280',V='#E5E7EB';
  var uid=0;
  function grain(id){
    return '<filter id="g'+id+'"><feTurbulence type="fractalNoise" baseFrequency=".9" numOctaves="2" stitchTiles="stitch"/>'+
      '<feColorMatrix values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  .5 0 0 0 0"/></filter>';
  }
  function wrap(id,body,bg){
    return '<svg viewBox="0 0 400 250" preserveAspectRatio="xMidYMid slice" aria-hidden="true">'+
      '<defs>'+grain(id)+'</defs>'+(bg||'')+body+
      '<rect width="400" height="250" filter="url(#g'+id+')" opacity=".35"/></svg>';
  }
  var stars=[[30,30],[80,60],[340,40],[370,90],[60,200],[330,210],[120,25],[290,20],[25,120],[380,170]]
    .map(function(p){return '<circle cx="'+p[0]+'" cy="'+p[1]+'" r="1" fill="'+I+'" opacity=".5"/>'}).join('');

  var art={
    globe:function(id){
      var g='',r=98,cy=125;
      [-75,-48,-20,10,40,70].forEach(function(d){var w=Math.sqrt(r*r-d*d);g+='<line x1="'+(200-w)+'" y1="'+(cy+d)+'" x2="'+(200+w)+'" y2="'+(cy+d)+'"/>'});
      [28,58,84].forEach(function(rx){g+='<ellipse cx="200" cy="'+cy+'" rx="'+rx+'" ry="'+r+'"/>'});
      return wrap(id,
        '<defs><radialGradient id="rg'+id+'" cx="50%" cy="45%" r="65%"><stop offset="0" stop-color="#1E4166"/><stop offset="1" stop-color="'+N+'"/></radialGradient></defs>'+
        '<rect width="400" height="250" fill="url(#rg'+id+')"/>'+stars+
        '<circle cx="200" cy="'+cy+'" r="'+(r+14)+'" fill="none" stroke="'+I+'" stroke-opacity=".12"/>'+
        '<circle cx="200" cy="'+cy+'" r="'+r+'" fill="#0F2A45" stroke="'+I+'" stroke-opacity=".55"/>'+
        '<g fill="none" stroke="'+I+'" stroke-opacity=".22" stroke-width=".8">'+g+'</g>'+
        '<path d="M150 80 q20 -12 40 -4 q14 8 30 2 q16 -4 22 10 q-10 14 -30 12 q-18 6 -24 22 q-14 10 -28 -4 q-12 -16 -10 -38z" fill="'+I+'" opacity=".14"/>'+
        '<path d="M205 140 q18 -4 30 6 q8 16 -4 30 q-14 8 -20 -6 q-10 -14 -6 -30z" fill="'+I+'" opacity=".14"/>'+
        '<line x1="200" y1="10" x2="200" y2="240" stroke="'+C+'" stroke-width="1.6"/>'+
        '<path d="M120 150 Q200 95 290 120" fill="none" stroke="'+C+'" stroke-width="1.2" stroke-dasharray="3 4"/>'+
        '<circle cx="120" cy="150" r="3.5" fill="'+C+'"/><circle cx="290" cy="120" r="3.5" fill="'+C+'"/><circle cx="208" cy="112" r="2.5" fill="'+I+'"/>'
      );
    },
    dome:function(id){
      var cols='';for(var x=96;x<=296;x+=20){cols+='<rect x="'+x+'" y="178" width="8" height="52" fill="'+N+'"/>'}
      return wrap(id,
        '<defs><linearGradient id="sk'+id+'" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#E9DCC6"/><stop offset="1" stop-color="'+I+'"/></linearGradient></defs>'+
        '<rect width="400" height="250" fill="url(#sk'+id+')"/>'+
        '<circle cx="300" cy="78" r="34" fill="'+C+'" opacity=".9"/>'+
        '<rect x="80" y="168" width="240" height="10" fill="'+N+'"/>'+cols+
        '<rect x="70" y="228" width="260" height="8" fill="'+N+'"/><rect x="60" y="236" width="280" height="14" fill="'+N+'"/>'+
        '<rect x="148" y="146" width="104" height="22" fill="'+N2+'"/>'+
        '<path d="M150 146 Q150 82 200 78 Q250 82 250 146Z" fill="'+N+'"/>'+
        '<rect x="194" y="58" width="12" height="20" fill="'+N+'"/><line x1="200" y1="58" x2="200" y2="34" stroke="'+N+'" stroke-width="2"/>'+
        '<path d="M200 34 l16 5 l-16 5z" fill="'+C+'"/>'+
        '<g stroke="'+I+'" stroke-opacity=".25">'+'<path d="M175 146 Q176 100 200 82" fill="none"/><path d="M225 146 Q224 100 200 82" fill="none"/></g>'
      );
    },
    sea:function(id){
      var w='';for(var i=0;i<9;i++){var y=150+i*11;w+='<path d="M0 '+y+' Q50 '+(y-4)+' 100 '+y+' T200 '+y+' T300 '+y+' T400 '+y+'" fill="none" stroke="'+I+'" stroke-opacity="'+(.08+i*.025)+'"/>'}
      return wrap(id,
        '<defs><linearGradient id="sg'+id+'" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1E3A57"/><stop offset=".6" stop-color="'+N+'"/></linearGradient></defs>'+
        '<rect width="400" height="250" fill="url(#sg'+id+')"/>'+
        '<circle cx="90" cy="95" r="26" fill="'+C+'" opacity=".85"/>'+
        '<path d="M0 148 L60 132 L110 140 L150 128 L170 148Z" fill="#081726"/><path d="M290 148 L320 126 L360 134 L400 120 L400 148Z" fill="#081726"/>'+
        '<rect x="0" y="148" width="400" height="102" fill="#0A1C2E"/>'+w+
        '<path d="M190 150 L330 150 L318 166 L200 166Z" fill="#050F1A"/>'+
        '<rect x="205" y="138" width="16" height="12" fill="'+C+'"/><rect x="223" y="138" width="16" height="12" fill="'+S+'"/><rect x="241" y="138" width="16" height="12" fill="'+I+'" opacity=".8"/><rect x="259" y="138" width="16" height="12" fill="'+C+'"/><rect x="214" y="126" width="16" height="12" fill="'+S+'"/><rect x="232" y="126" width="16" height="12" fill="'+C+'"/><rect x="250" y="126" width="16" height="12" fill="'+S+'"/>'+
        '<rect x="295" y="124" width="18" height="26" fill="#050F1A"/>'
      );
    },
    arctic:function(id){
      return wrap(id,
        '<rect width="400" height="250" fill="'+N+'"/>'+stars+
        '<circle cx="200" cy="125" r="100" fill="none" stroke="'+I+'" stroke-opacity=".15"/><circle cx="200" cy="125" r="66" fill="none" stroke="'+I+'" stroke-opacity=".15"/><circle cx="200" cy="125" r="33" fill="none" stroke="'+I+'" stroke-opacity=".15"/>'+
        '<g stroke="'+I+'" stroke-opacity=".12"><line x1="200" y1="15" x2="200" y2="235"/><line x1="90" y1="125" x2="310" y2="125"/><line x1="122" y1="47" x2="278" y2="203"/><line x1="278" y1="47" x2="122" y2="203"/></g>'+
        '<path d="M150 90 q30 -30 70 -18 q36 10 34 40 q-6 30 -40 34 q-30 6 -52 -12 q-24 -20 -12 -44z" fill="'+I+'" opacity=".85"/>'+
        '<path d="M170 100 q20 -14 44 -6 q18 10 12 26 q-14 14 -36 8 q-24 -8 -20 -28z" fill="'+V+'"/>'+
        '<path d="M100 60 q20 10 10 30 q-14 6 -22 -8z M300 170 q20 -6 26 14 q-12 16 -30 4z M90 170 q16 -10 24 6 q-6 14 -24 6z" fill="'+S+'" opacity=".6"/>'+
        '<path d="M110 200 Q200 170 260 70" fill="none" stroke="'+C+'" stroke-width="1.6" stroke-dasharray="4 4"/>'+
        '<circle cx="110" cy="200" r="3.5" fill="'+C+'"/><circle cx="260" cy="70" r="3.5" fill="'+C+'"/>'
      );
    },
    map:function(id){
      var grid='';for(var x=0;x<=400;x+=40){grid+='<line x1="'+x+'" y1="0" x2="'+x+'" y2="250"/>'}for(var y=0;y<=250;y+=40){grid+='<line x1="0" y1="'+y+'" x2="400" y2="'+y+'"/>'}
      return wrap(id,
        '<rect width="400" height="250" fill="'+I+'"/>'+
        '<g stroke="'+S+'" stroke-opacity=".15">'+grid+'</g>'+
        '<path d="M40 40 Q120 20 170 50 Q220 30 260 60 Q330 50 360 100 Q350 160 300 180 Q250 220 190 200 Q130 230 90 190 Q40 160 50 110 Q30 70 40 40Z" fill="'+V+'" stroke="'+N+'" stroke-width="1"/>'+
        '<g fill="none" stroke="'+N+'" stroke-opacity=".5" stroke-dasharray="2 3"><path d="M170 50 Q160 120 190 200"/><path d="M50 110 Q150 120 300 180"/><path d="M260 60 Q240 120 300 180"/></g>'+
        '<path d="M120 90 L170 120 L240 100 L280 140" fill="none" stroke="'+C+'" stroke-width="1.8"/>'+
        '<g fill="'+N+'"><circle cx="120" cy="90" r="4"/><circle cx="170" cy="120" r="4"/><circle cx="240" cy="100" r="4"/></g><circle cx="280" cy="140" r="6" fill="'+C+'"/>'
      );
    },
    skyline:function(id){
      var b=[[20,120,30],[54,90,26],[84,140,34],[122,70,22],[148,110,40],[192,60,28],[224,130,30],[258,95,36],[298,150,26],[328,80,32],[364,115,30]],s='',win='';
      b.forEach(function(r){s+='<rect x="'+r[0]+'" y="'+(250-r[1])+'" width="'+r[2]+'" height="'+r[1]+'" fill="'+N+'"/>';
        for(var yy=250-r[1]+10;yy<240;yy+=14){for(var xx=r[0]+5;xx<r[0]+r[2]-4;xx+=8){if((xx*7+yy*3)%5<2)win+='<rect x="'+xx+'" y="'+yy+'" width="3" height="4" fill="'+I+'" opacity=".55"/>'}}});
      return wrap(id,
        '<defs><linearGradient id="dk'+id+'" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="'+N2+'"/><stop offset=".7" stop-color="#7A2A33"/><stop offset="1" stop-color="'+C+'"/></linearGradient></defs>'+
        '<rect width="400" height="250" fill="url(#dk'+id+')"/>'+s+win
      );
    },
    radar:function(id){
      return wrap(id,
        '<rect width="400" height="250" fill="'+N+'"/>'+
        '<g fill="none" stroke="'+I+'" stroke-opacity=".2"><circle cx="200" cy="125" r="30"/><circle cx="200" cy="125" r="60"/><circle cx="200" cy="125" r="90"/><circle cx="200" cy="125" r="120"/><line x1="200" y1="0" x2="200" y2="250"/><line x1="60" y1="125" x2="340" y2="125"/></g>'+
        '<path d="M200 125 L290 50 A120 120 0 0 1 318 105Z" fill="'+C+'" opacity=".35"/>'+
        '<line x1="200" y1="125" x2="290" y2="50" stroke="'+C+'" stroke-width="1.5"/>'+
        '<g fill="'+I+'"><path d="M262 78 l8 -3 l-3 8z"/><path d="M140 70 l8 -3 l-3 8z" opacity=".6"/><path d="M150 170 l8 -3 l-3 8z" opacity=".6"/></g>'+
        '<circle cx="200" cy="125" r="3" fill="'+I+'"/>'
      );
    },
    lines:function(id){
      var l='';for(var i=0;i<14;i++){var y=30+i*14;l+='<path d="M0 '+y+' C120 '+(y-40+i*4)+' 260 '+(y+50-i*5)+' 400 '+(y-10)+'" fill="none" stroke="'+(i===7?C:N)+'" stroke-width="'+(i===7?1.8:.8)+'" stroke-opacity="'+(i===7?1:.35)+'"/>'}
      return wrap(id,'<rect width="400" height="250" fill="'+I+'"/>'+l+'<circle cx="200" cy="128" r="5" fill="'+C+'"/>');
    },
    summit:function(id){
      var ch='';for(var i=0;i<12;i++){var a=i/12*Math.PI*2;ch+='<circle cx="'+(200+Math.cos(a)*150)+'" cy="'+(125+Math.sin(a)*72)+'" r="9" fill="'+N2+'"/>'}
      return wrap(id,
        '<rect width="400" height="250" fill="'+V+'"/>'+
        '<ellipse cx="200" cy="125" rx="130" ry="56" fill="'+N+'"/>'+
        '<ellipse cx="200" cy="125" rx="80" ry="28" fill="'+V+'"/>'+ch+
        '<g fill="'+C+'"><rect x="196" y="58" width="8" height="5"/><rect x="196" y="187" width="8" height="5"/><rect x="72" y="122" width="8" height="5"/><rect x="320" y="122" width="8" height="5"/></g>'+
        '<circle cx="200" cy="125" r="10" fill="'+C+'" opacity=".85"/>'
      );
    },
    network:function(id){
      var p=[[70,60],[160,40],[260,70],[340,50],[110,140],[210,130],[300,150],[80,210],[180,200],[280,215],[350,190]],e=[[0,1],[1,2],[2,3],[0,4],[1,5],[2,5],[3,6],[4,5],[5,6],[4,7],[5,8],[6,9],[6,10],[7,8],[8,9],[9,10],[1,4],[2,6]],s='';
      e.forEach(function(k){s+='<line x1="'+p[k[0]][0]+'" y1="'+p[k[0]][1]+'" x2="'+p[k[1]][0]+'" y2="'+p[k[1]][1]+'"/>'});
      var d=p.map(function(q,i){return '<circle cx="'+q[0]+'" cy="'+q[1]+'" r="'+(i===5?9:5)+'" fill="'+(i===5?C:I)+'"/>'}).join('');
      return wrap(id,'<rect width="400" height="250" fill="'+N2+'"/><g stroke="'+I+'" stroke-opacity=".3">'+s+'</g>'+d);
    },
    ledger:function(id){
      var bars='',v=[60,90,75,120,100,140,85,60,45];
      v.forEach(function(h,i){bars+='<rect x="'+(60+i*32)+'" y="'+(210-h)+'" width="18" height="'+h+'" fill="'+(i>=6?C:N)+'" opacity="'+(i>=6?.9:.85)+'"/>'});
      return wrap(id,'<rect width="400" height="250" fill="'+I+'"/><g stroke="'+S+'" stroke-opacity=".25"><line x1="40" y1="210" x2="370" y2="210"/><line x1="40" y1="170" x2="370" y2="170"/><line x1="40" y1="130" x2="370" y2="130"/><line x1="40" y1="90" x2="370" y2="90"/></g>'+bars+'<path d="M69 150 L101 120 L133 135 L165 90 L197 110 L229 70 L261 125 L293 150 L325 165" fill="none" stroke="'+N+'" stroke-width="1.2" stroke-dasharray="3 3"/>');
    },
    columns:function(id){
      var c='';for(var i=0;i<6;i++){var x=95+i*40;c+='<rect x="'+x+'" y="120" width="18" height="96" fill="'+I+'" opacity=".92"/><rect x="'+(x-3)+'" y="114" width="24" height="6" fill="'+I+'"/><rect x="'+(x-3)+'" y="216" width="24" height="5" fill="'+I+'"/>'+
        '<line x1="'+(x+6)+'" y1="120" x2="'+(x+6)+'" y2="216" stroke="'+N+'" stroke-opacity=".25"/><line x1="'+(x+12)+'" y1="120" x2="'+(x+12)+'" y2="216" stroke="'+N+'" stroke-opacity=".25"/>'}
      return wrap(id,
        '<defs><linearGradient id="cg'+id+'" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="'+N2+'"/><stop offset="1" stop-color="'+N+'"/></linearGradient></defs>'+
        '<rect width="400" height="250" fill="url(#cg'+id+')"/>'+
        '<circle cx="320" cy="60" r="22" fill="'+C+'" opacity=".85"/>'+
        '<path d="M80 100 L200 52 L320 100Z" fill="'+I+'"/><path d="M104 96 L200 60 L296 96Z" fill="'+N2+'" opacity=".35"/>'+
        '<rect x="80" y="100" width="240" height="14" fill="'+I+'"/>'+c+
        '<rect x="70" y="221" width="260" height="8" fill="'+I+'" opacity=".85"/><rect x="60" y="229" width="280" height="21" fill="'+I+'" opacity=".7"/>'
      );
    }
  };
    $all('.art[data-art]', root).forEach(function (f) {
      if (f.getAttribute('data-drawn')) return;
      var fn = art[f.getAttribute('data-art')];
      if (fn) { f.insertAdjacentHTML('afterbegin', fn(++window.__meridianArt)); f.setAttribute('data-drawn', '1'); }
    });
  }
  window.__meridianArt = window.__meridianArt || 0;


  /* ---------------------------------------------------------
     7b. SINGLE-FILE PREVIEW (preview-android.html only)
     Everything lives in one file, so pages are shown by the
     part of the address after "#", e.g. #article-arctic-thaw
     --------------------------------------------------------- */
  function initSingle() {
    var home = $('#homeView');
    var view = $('#view');
    var defaultTitle = document.title;
    function route() {
      var h = (window.location.hash || '').slice(1);
      var kind = null;
      ROUTE = {};
      if (h.indexOf('article-') === 0) { ROUTE.id = h.slice(8); kind = 'article'; }
      else if (h.indexOf('section-') === 0) { ROUTE.c = h.slice(8); kind = 'category'; }
      else if (h === 'sections') { kind = 'category'; }
      if (!kind) {
        view.hidden = true; view.innerHTML = ''; home.hidden = false;
        document.title = defaultTitle; markActiveNav(null);
        if (h === 'home' || h === '') window.scrollTo(0, 0);
        return;
      }
      home.hidden = true; view.hidden = false;
      if (kind === 'article') renderArticle(); else renderCategory();
      renderArt(view);
      window.scrollTo(0, 0);
    }
    window.addEventListener('hashchange', route);
    route();
  }

  /* ---------------------------------------------------------
     8. START-UP
     --------------------------------------------------------- */
  function start() {
    var pageKind = document.body.getAttribute('data-page');
    if (pageKind === 'category') renderCategory();
    if (pageKind === 'article') renderArticle();
    initHeader();
    if (pageKind === 'single') initSingle();
    initNewsletter();
    renderArt(document);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();

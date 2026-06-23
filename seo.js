/**
 * ============================================================
 *  Urban ज़ायका — SEO Configuration
 *  File: /seo.js
 *
 *  HOW TO USE:
 *  Add this ONE line in <head> of index.html (before </head>):
 *  <script src="/seo.js"></script>
 *
 *  To update ANY SEO detail — edit ONLY this file.
 *  No need to touch index.html ever again for SEO.
 * ============================================================
 */

const UZ_SEO = {

  // ── BASIC INFO ──────────────────────────────────────────────
  siteName:    "Urban ज़ायका",
  siteNameEn:  "Urban Zayka",
  tagline:     "Fresh Food, Fast Delivery — Met City, Haryana",
  siteUrl:     "https://urbanzayka.in",
  phone:       "+91-8860609555",
  whatsapp:    "918860609555",

  // ── PAGE TITLE & DESCRIPTION ────────────────────────────────
  // Keep title under 60 chars, description under 160 chars
  title:       "Urban ज़ायका — Order Food Online | Met City, Haryana",
  description: "Order fresh Indian, Chinese & Breakfast food online from Urban Zayka, Met City Haryana. Fast delivery in Dadri Toe, Jhajjar. Paneer Tikka, Malai Chaap, Biryani. Order via WhatsApp!",

  // ── KEYWORDS ────────────────────────────────────────────────
  // Deep local SEO — Dadri Toe, Met City, Jhajjar area
  keywords: [
    // ── Primary Brand ──
    "Urban Zayka",
    "Urban Zayka Met City",
    "Urban Zayka Dadri",
    "urbanzayka.in",

    // ── Core Local (most important) ──
    "food delivery Met City",
    "food delivery Dadri Toe",
    "food delivery Jhajjar",
    "restaurant Met City Jhajjar",
    "food order online Met City",
    "home delivery Met City Haryana",
    "online food order Dadri Toe",
    "food delivery near MET City",

    // ── Nearby Areas ──
    "food delivery Fatehpur Jhajjar",
    "food delivery Khalekpur",
    "food delivery Yaqubpur",
    "food delivery Kutani Jhajjar",
    "food delivery Nangla Jhajjar",
    "food delivery Sondhi",
    "food delivery Nimana Jhajjar",
    "food delivery Bir Dadri",
    "food delivery Sheojipura",
    "food delivery Kaloi Jhajjar",
    "restaurant near Dadri Toe",
    "restaurant near KMP Expressway Jhajjar",

    // ── Dish-specific keywords ──
    "Paneer Tikka delivery Met City",
    "Malai Chaap Met City",
    "Malai Chaap delivery Jhajjar",
    "Paneer Butter Masala Met City",
    "Veg Biryani delivery Dadri",
    "Dal Makhani delivery Met City",
    "Chole Bhature Met City",
    "Paratha delivery Met City",
    "Maggi delivery Met City",
    "Momos delivery Met City",
    "Tandoori Chaap Jhajjar",
    "Chinese food delivery Met City",
    "breakfast delivery Met City",
    "tiffin service Met City",
    "lunch delivery MET City workers",
    "office food delivery Met City",

    // ── Industry workers (600+ companies in MET City!) ──
    "food delivery Reliance MET City",
    "lunch delivery Panasonic MET City",
    "food delivery Japanese Industrial Township",
    "canteen food delivery MET City",
    "office lunch delivery Jhajjar",

    // ── Hindi keywords (local audience) ──
    "मेट सिटी खाना डिलीवरी",
    "मेट सिटी रेस्टोरेंट",
    "दादरी टोए खाना डिलीवरी",
    "झज्जर खाना ऑर्डर",
    "पनीर टिक्का डिलीवरी मेट सिटी",
    "मलाई चाप मेट सिटी",
    "ऑनलाइन खाना ऑर्डर झज्जर",
    "घर पर खाना डिलीवरी मेट सिटी",
    "दादरी खाना डिलीवरी",
    "नाश्ता डिलीवरी मेट सिटी",
    "ऑफिस खाना डिलीवरी मेट सिटी",
    "झज्जर रेस्टोरेंट",
  ].join(", "),

  // ── OPEN GRAPH (Facebook, WhatsApp preview) ────────────────
  og: {
    type:        "restaurant",
    image:       "https://urbanzayka.in/og-image.png",  // Must be 1200×630px
    imageWidth:  "1200",
    imageHeight: "630",
    imageAlt:    "Urban Zayka — Indian Chinese Food Delivery Met City Haryana",
    locale:      "en_IN",
  },

  // ── TWITTER CARD ───────────────────────────────────────────
  twitter: {
    card:  "summary_large_image",
    site:  "@urbanzayka",  // Update if you have Twitter handle
    image: "https://urbanzayka.in/og-image.png",
  },

  // ── GEO / LOCAL SEO ────────────────────────────────────────
  geo: {
    region:    "IN-HR",
    placename: "Met City, Manesar, Haryana, India",
    lat:       "28.50518186292854",
    lng:       "76.74672250104636",
  },

  // ── BUSINESS HOURS ─────────────────────────────────────────
  hours: {
    breakfast: "07:00-10:00",
    fullDay:   "12:00-22:30",
    days:      "Monday,Tuesday,Wednesday,Thursday,Friday,Saturday,Sunday",
  },

  // ── ADDRESS ────────────────────────────────────────────────
  address: {
    street:   "Met City",
    city:     "Manesar",
    state:    "Haryana",
    country:  "IN",
    pincode:  "122504",
  },

  // ── CUISINE TYPES ──────────────────────────────────────────
  cuisine: ["Indian", "Chinese", "North Indian", "Fast Food", "Breakfast"],

  // ── PRICE RANGE ────────────────────────────────────────────
  // $ = cheap, $$ = moderate, $$$ = expensive
  priceRange: "₹50 – ₹250",

  // ── DELIVERY ───────────────────────────────────────────────
  delivery: {
    available:  true,
    radius:     "10km",
    charge:     "₹50 within 5km, ₹100 for 5–10km",
    freeAbove:  "₹1000",
  },

};

// ============================================================
//  ENGINE — Injects all SEO tags automatically
//  DO NOT EDIT BELOW THIS LINE
// ============================================================

(function() {
  const S = UZ_SEO;
  const head = document.head;
  const url  = window.location.href;

  // Helper: set/create meta tag
  function meta(name, content, prop) {
    if (!content) return;
    const attr = prop ? 'property' : 'name';
    let el = document.querySelector(`meta[${attr}="${name}"]`);
    if (!el) { el = document.createElement('meta'); el.setAttribute(attr, name); head.appendChild(el); }
    el.setAttribute('content', content);
  }

  // Helper: set/create link tag
  function link(rel, href, extra) {
    let el = document.querySelector(`link[rel="${rel}"]`);
    if (!el) { el = document.createElement('link'); el.rel = rel; head.appendChild(el); }
    el.href = href;
    if (extra) Object.entries(extra).forEach(([k,v]) => el.setAttribute(k,v));
  }

  // Helper: inject JSON-LD schema
  function schema(obj) {
    const el = document.createElement('script');
    el.type = 'application/ld+json';
    el.textContent = JSON.stringify(obj, null, 2);
    head.appendChild(el);
  }

  // ── 1. PAGE TITLE ──────────────────────────────────────────
  document.title = S.title;

  // ── 2. BASIC META ──────────────────────────────────────────
  meta('google-site-verification', '3Sntnz5x6HouSRmwxU3SHJF-UknwBOxJzcI3i7j1Xac');
  meta('description',            S.description);
  meta('keywords',               S.keywords);
  meta('author',                 S.siteNameEn);
  meta('robots',                 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
  meta('googlebot',              'index, follow');
  meta('theme-color',            '#16213E');
  meta('mobile-web-app-capable', 'yes');
  meta('apple-mobile-web-app-capable', 'yes');
  meta('apple-mobile-web-app-title',   S.siteNameEn);
  meta('application-name',       S.siteNameEn);

  // ── 3. OPEN GRAPH ──────────────────────────────────────────
  meta('og:type',         S.og.type,         true);
  meta('og:site_name',    S.siteNameEn,      true);
  meta('og:title',        S.title,           true);
  meta('og:description',  S.description,     true);
  meta('og:url',          url,               true);
  meta('og:image',        S.og.image,        true);
  meta('og:image:width',  S.og.imageWidth,   true);
  meta('og:image:height', S.og.imageHeight,  true);
  meta('og:image:alt',    S.og.imageAlt,     true);
  meta('og:image:type',   'image/png',       true);
  meta('og:locale',       S.og.locale,       true);
  meta('og:phone_number', S.phone,           true);

  // ── 4. TWITTER CARD ────────────────────────────────────────
  meta('twitter:card',        S.twitter.card);
  meta('twitter:site',        S.twitter.site);
  meta('twitter:title',       S.title);
  meta('twitter:description', S.description);
  meta('twitter:image',       S.twitter.image);
  meta('twitter:image:alt',   S.og.imageAlt);

  // ── 5. GEO / LOCAL ─────────────────────────────────────────
  meta('geo.region',    S.geo.region);
  meta('geo.placename', S.geo.placename);
  meta('geo.position',  `${S.geo.lat};${S.geo.lng}`);
  meta('ICBM',          `${S.geo.lat}, ${S.geo.lng}`);

  // ── 6. CANONICAL ───────────────────────────────────────────
  link('canonical', S.siteUrl);

  // ── 7. SCHEMA.ORG — Restaurant (Rich Results) ──────────────
  schema({
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": S.siteNameEn,
    "alternateName": ["Urban Zayka", "Urban ज़ायका", "अर्बन ज़ायका"],
    "url": S.siteUrl,
    "telephone": S.phone,
    "email": "urbanzayka@gmail.com",
    "description": S.description,
    "image": S.og.image,
    "logo": `${S.siteUrl}/icons/icon-512.png`,
    "priceRange": S.priceRange,
    "servesCuisine": S.cuisine,
    "hasMenu": `${S.siteUrl}/#menu`,
    "acceptsReservations": "False",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": S.address.street,
      "addressLocality": S.address.city,
      "addressRegion": S.address.state,
      "postalCode": S.address.pincode,
      "addressCountry": S.address.country
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude":  S.geo.lat,
      "longitude": S.geo.lng
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": S.hours.days.split(","),
        "opens":  "07:00",
        "closes": "10:00",
        "name": "Breakfast"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": S.hours.days.split(","),
        "opens":  "12:00",
        "closes": "22:30",
        "name": "Full Day Menu"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Urban Zayka Menu",
      "itemListElement": S.cuisine.map(c => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "FoodService",
          "name": `${c} Food Delivery Met City`
        }
      }))
    },
    "potentialAction": {
      "@type": "OrderAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": S.siteUrl,
        "actionPlatform": [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform"
        ]
      },
      "deliveryMethod": ["http://purl.org/goodrelations/v1#DeliveryModeDirectDownload"],
      "result": {
        "@type": "Order",
        "orderStatus": "http://schema.org/OrderProcessing"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.5",
      "reviewCount": "50",
      "bestRating": "5",
      "worstRating": "1"
    },
    "sameAs": [
      `https://wa.me/${S.whatsapp}`,
      S.siteUrl
    ]
  });

  // ── 8. SCHEMA.ORG — WebSite (Sitelinks Search) ─────────────
  schema({
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": S.siteNameEn,
    "url": S.siteUrl,
    "description": S.description,
    "inLanguage": ["en-IN", "hi-IN"],
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${S.siteUrl}/?search={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  });

  // ── 9. SCHEMA.ORG — LocalBusiness (Maps) ───────────────────
  schema({
    "@context": "https://schema.org",
    "@type": "FoodEstablishment",
    "name": S.siteNameEn,
    "telephone": S.phone,
    "url": S.siteUrl,
    "image": S.og.image,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": S.address.street,
      "addressLocality": S.address.city,
      "addressRegion": S.address.state,
      "postalCode": S.address.pincode,
      "addressCountry": S.address.country
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude":  S.geo.lat,
      "longitude": S.geo.lng
    },
    "openingHours": ["Mo-Su 07:00-10:00", "Mo-Su 12:00-22:30"],
    "servesCuisine": S.cuisine,
    "priceRange": S.priceRange,
    "hasMap": `https://www.google.com/maps?q=${S.geo.lat},${S.geo.lng}`,
    "paymentAccepted": "Cash, UPI, WhatsApp Pay",
    "currenciesAccepted": "INR"
  });

  // ── 10. SCHEMA.ORG — BreadcrumbList ────────────────────────
  schema({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": S.siteUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Menu",
        "item": `${S.siteUrl}/#menu`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Order Now",
        "item": `${S.siteUrl}/#order`
      }
    ]
  });

  // ── 11. PERFORMANCE HINTS ──────────────────────────────────
  link('preconnect', 'https://fonts.googleapis.com');
  link('preconnect', 'https://www.gstatic.com');
  link('preconnect', 'https://firestore.googleapis.com');
  link('dns-prefetch', 'https://api.cloudinary.com');

  console.log('✅ Urban Zayka SEO loaded');
})();

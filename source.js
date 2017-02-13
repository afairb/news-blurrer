var keywords = [
  'formula 1',
  'F1',
  'grand prix',
  'qualifying',
  'Mercedes',
  'Hamilton',
  'Rosberg',
  'Red Bull',
  'Vettel',
  'Ricciardo',
  'McLaren',
  'Button',
  'Magnussen',
  'Ferarri',
  'Alonso',
  'Raikkonen',
  'Williams',
  'Massa',
  'Bottas',
  'Lotus',
  'Grosjean',
  'Maldonado',
  'Force India',
  'Perez',
  'Hulkenberg',
  'Toro Rosso',
  'Vergne',
  'Kvyat',
  'Sauber',
  'Gutierrez',
  'Sutil',
  'Marussia',
  'Chilton',
  'Bianchi',
  'Caterham',
  'Ericsson',
  'Kobayashi',
];

// Add blur SVG
var body = document.getElementsByTagName('body')[0];
var ns = 'http://www.w3.org/2000/svg';
var svg = document.createElementNS(ns, 'svg');
svg.setAttribute('height', 0);
svg.setAttribute('width', 0);
var filter = document.createElementNS(ns, 'filter');
filter.setAttribute('id', 'blur');
var feGaussianBlur = document.createElementNS(ns, 'feGaussianBlur');
feGaussianBlur.setAttribute('stdDeviation', 5);
filter.appendChild(feGaussianBlur);
svg.appendChild(filter);
body.appendChild(svg);

// Add blur CSS
var blurClassName = 'custom-blur';
var style = document.createElement('style');
style.appendChild(document.createTextNode('.' + blurClassName + '{filter:url(#blur);filter:blur(5px);-webkit-filter:blur(5px)}'));
body.appendChild(style);

// Define function to attach to click events to remove blur
function removeBlur(event) {
    event.preventDefault();
    this.className = this.className.replace(blurClassName, '');
    this.removeEventListener('click', removeBlur);
}

// Establish correct selectors for the site we're on
var url = window.location.href;
var selectors = [];

if (/bbc\.co\.uk\/(news|sport)/.test(url)) {
  selectors = [
    '.gs-c-promo.nw-c-promo.gs-o-faux-block-link.gs-u-pb',
    '.faux-block-link',
    '.most-popular-list-item',
    '.multi-thumb-promo__link',
    '.fixture__block-link'
  ];
} else if (/theguardian\.com/.test(url)) {
  selectors = [
    '.fc-item',
    '.headline-list__item',
    '.right-most-popular-item'
  ];
} else if (/news\.sky\.com/.test(url)) {
  selectors = [
    '.sky-component-story-grid__card',
    '.sky-component-trending__item'
  ];
} else if (/skysports\.com/.test(url)) {
  selectors = [
    '.blackjack-sdc-site-tile',
    '.news-top-story',
    '.news-list-featured__item',
    '.news-list__item',
    '.news-list-secondary__item',
    '.features-block__item',
    '.pundits-block__item',
    '.matches__list-item',
    '.most-popular__item'
  ];
} else if (/itv\.com\/news/.test(url)) {
  selectors = [
    '.top-articles__item',
    '.article-update',
    '.small-author-profiles__item',
    '.small-content-listing__item'
  ];
}

// Find relevant elements and blur them
selectors.forEach(function(selector) {
  document.querySelectorAll(selector).forEach(function(element) {
    if (keywords.some(function(word) {
        return element.textContent.toLowerCase().indexOf(word.toLowerCase()) != -1;
    })) {
      element.className += ' ' + blurClassName;
      element.addEventListener('click', removeBlur);
    }
  });
});

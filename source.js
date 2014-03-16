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
var ns = 'http://www.w3.org/2000/svg';
var svg = document.createElementNS(ns, 'svg');
var filter = document.createElementNS(ns, 'filter');
filter.setAttribute('id', 'blur');
var feGaussianBlur = document.createElementNS(ns, 'feGaussianBlur');
feGaussianBlur.setAttribute('stdDeviation', 5);
filter.appendChild(feGaussianBlur);
svg.appendChild(filter);
var body = document.getElementsByTagName('body')[0];
body.appendChild(svg);

// Add blur style
var style = document.createElement('style');
style.appendChild(document.createTextNode('.blurred{filter:url(#blur);filter:blur(5px);-webkit-filter:blur(5px)}'));
body.appendChild(style);

// Function to attach to click events to remove blur
function removeBlur(event) {
    event.preventDefault();
    this.className = this.className.replace('blurred', '');
    this.removeEventListener('click', removeBlur);
}

// Find relevant elements and blur them
[].forEach.call(document.getElementsByTagName('li'), function(element){
    [].some.call(element.getElementsByTagName('*'), function(subElement){
        if (keywords.some(function(word) {
            return subElement.textContent.toLowerCase().indexOf(word.toLowerCase()) != -1;
        })) {
            element.className += ' blurred';
            element.addEventListener('click', removeBlur);
            return true;
        }
    });
});

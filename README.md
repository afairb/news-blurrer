About
=====

Sick of finding out the F1 result before you've had a chance to watch it? This script finds any stories and links mentioning F1-related terms on the BBC News website and blurs them out, allowing you to browse the rest of the news without finding out who won the race or qualified on pole.

**Easily adaptable to other contexts, just replace the list of keywords with those that may occur in news articles you want to blur out.**

Compatible with (at least) recent versions of Mozilla Firefox and Google Chrome.


How to use
==========

Simply add a new bookmark and set its URL to the following:

```
javascript:(function(){function r(n){n.preventDefault();this.className=this.className.replace("blurred","");this.removeEventListener("click",r)}var n="http://www.w3.org/2000/svg",v=document.createElementNS(n,"svg"),f=document.createElementNS(n,"filter"),g=document.createElementNS(n,"feGaussianBlur"),b=document.getElementsByTagName("body")[0],s=document.createElement("style");f.setAttribute("id","blur");g.setAttribute("stdDeviation",5);f.appendChild(g);v.appendChild(f);b.appendChild(v);s.appendChild(document.createTextNode(".blurred{filter:url(#blur);filter:blur(5px);-webkit-filter:blur(5px)}"));b.appendChild(s);[].forEach.call(document.getElementsByTagName("li"),function(n){[].some.call(n.getElementsByTagName("*"),function(t){if(["formula 1","F1","grand prix","qualifying","Mercedes","Hamilton","Rosberg","Red Bull","Vettel","Ricciardo","McLaren","Button","Magnussen","Ferarri","Alonso","Raikkonen","Williams","Massa","Bottas","Lotus","Grosjean","Maldonado","Force India","Perez","Hulkenberg","Toro Rosso","Vergne","Kvyat","Sauber","Gutierrez","Sutil","Marussia","Chilton","Bianchi","Caterham","Ericsson","Kobayashi",].some(function(n){return t.textContent.toLowerCase().indexOf(n.toLowerCase())!=-1}))return n.className+=" blurred",n.addEventListener("click",r),!0})})})()
```

Then browse to BBC News and click the new bookmark to blur out stories.

<small>Unfortunately GitHub [does not allow](https://github.com/github/markup/issues/79) JavaScript in links here, so you have to manually create the bookmark rather than just dragging a bookmarklet to your bookmarks toolbar.</small>

---


Still todo
----------

* Require a minimum match of two keywords to better validate an item is relevant
* Match elements in the larger news sections
* Match elements in the breaking news ticker
* Create a user script (for Greasemonkey et al) that automatically applies this when on BBC News web pages
* Check compatibility with the BBC Sport website


Disclaimer
----------

*This tool is not associated with the BBC, Formula One Group or any affiliated companies or teams.*

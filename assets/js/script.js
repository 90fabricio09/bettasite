'use strict';

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('\'Z X\';2 G=4(y,K,E){p(c i=0,a=y.A;i<a;i++){y[i].e(K,E)}}2 u=6.7("[3-u]");2 C=6.x("[3-B-V]");2 v=6.7("[3-v]");2 D=4(){u.8.m("d");v.8.m("d");6.W.8.m("B-d")}G(C,"n",D);2 j=6.7("[3-j]");N.e("Y",4(){b(N.10>11){j.8.12("d")}z{j.8.Q("d")}});2 w=6.x("[3-k]");2 O=4(l){2 9=l.7("[3-k-13]");2 s=l.7("[3-k-14]");2 r=l.7("[3-k-15]");c 5=0;2 o=4(){9.t.16=`17(-${9.18[5].19}1a)`}2 H=4(){2 F=5>=9.q-1;b(F){5=0}z{5++}o()}r.e("n",H);2 J=4(){b(5<=0){5=9.q-1}z{5--}o()}s.e("n",J);2 L=9.q<=1;b(L){r.t.M="I";s.t.M="I"}}p(c i=0,a=w.A;i<a;i++){O(w[i])}2 h=6.x("[3-P]");c g=h[0];2 U=4(f){2 S=f.7("[3-P-1b]");2 T=4(){b(g&&g!==f){g.8.Q("R")}f.8.m("R");g=f}S.e("n",T)}p(c i=0,a=h.A;i<a;i++){U(h[i])}',62,74,'||const|data|function|currentSlidePos|document|querySelector|classList|sldierContainer|len|if|let|active|addEventListener|currentAccordion|lastActiveAccordion|accordions||header|slider|currentSlider|toggle|click|moveSliderItem|for|childElementCount|sliderNextBtn|sliderPrevBtn|style|navbar|overlay|sliders|querySelectorAll|elements|else|length|nav|navTogglers|toggleNavbar|callback|slideEnd|addEventOnElements|slideNext|none|slidePrev|eventType|dontHaveExtraItem|display|window|initSlider|accordion|remove|expanded|accordionBtn|expandAccordion|initAccordion|toggler|body|strict|scroll|use|scrollY|100|add|container|prev|next|transform|translateX|children|offsetLeft|px|btn'.split('|'),0,{}))

}

addEventOnElements(navTogglers, "click", toggleNavbar);

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});

const sliders = document.querySelectorAll("[data-slider]");

const initSlider = function(currentSlider) {

  const sldierContainer = currentSlider.querySelector("[data-slider-container]");
  const sliderPrevBtn = currentSlider.querySelector("[data-slider-prev]");
  const sliderNextBtn = currentSlider.querySelector("[data-slider-next]");

  let currentSlidePos = 0;

  const moveSliderItem = function () {
    sldierContainer.style.transform = `translateX(-${sldierContainer.children[currentSlidePos].offsetLeft}px)`;
  }

  const slideNext = function () {
    const slideEnd = currentSlidePos >= sldierContainer.childElementCount - 1;

    if (slideEnd) {
      currentSlidePos = 0;
    } else {
      currentSlidePos++;
    }

    moveSliderItem();
  }

  sliderNextBtn.addEventListener("click", slideNext);

   const slidePrev = function () {

    if (currentSlidePos <= 0) {
      currentSlidePos = sldierContainer.childElementCount - 1;
    } else {
      currentSlidePos--;
    }

    moveSliderItem();
  }

  sliderPrevBtn.addEventListener("click", slidePrev);

  const dontHaveExtraItem = sldierContainer.childElementCount <= 1;
  if (dontHaveExtraItem) {
    sliderNextBtn.style.display = "none";
    sliderPrevBtn.style.display = "none";
  }

}

for (let i = 0, len = sliders.length; i < len; i++) { initSlider(sliders[i]); }

const accordions = document.querySelectorAll("[data-accordion]");

let lastActiveAccordion = accordions[0];

const initAccordion = function (currentAccordion) {

  const accordionBtn = currentAccordion.querySelector("[data-accordion-btn]");

  const expandAccordion = function () {
    if (lastActiveAccordion && lastActiveAccordion !== currentAccordion) {
      lastActiveAccordion.classList.remove("expanded");
    }

    currentAccordion.classList.toggle("expanded");

    lastActiveAccordion = currentAccordion;
  }

  accordionBtn.addEventListener("click", expandAccordion);

}

for (let i = 0, len = accordions.length; i < len; i++) { initAccordion(accordions[i]); }
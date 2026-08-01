/**
 * Te Pā Tūwatawata — Shared Navigation JS
 * Handles mobile menu toggle and active nav link highlighting.
 */
(function () {
  'use strict';

  // Mobile menu toggle
  document.addEventListener('DOMContentLoaded', function () {
    var toggle = document.querySelector('.kd-nav-toggle, [data-nav-toggle]');
    var nav = document.querySelector('.kd-nav, nav[role="navigation"]');
    if (toggle && nav) {
      toggle.addEventListener('click', function () {
        var expanded = toggle.getAttribute('aria-expanded') === 'true';
        toggle.setAttribute('aria-expanded', String(!expanded));
        nav.classList.toggle('kd-nav--open', !expanded);
      });
    }

    // Highlight active page in nav
    var links = document.querySelectorAll('nav a[href]');
    var current = window.location.pathname.replace(/\/$/, '') || '/';
    links.forEach(function (a) {
      var href = a.getAttribute('href').replace(/\/$/, '') || '/';
      if (href && current.endsWith(href)) {
        a.setAttribute('aria-current', 'page');
        a.classList.add('kd-nav__link--active');
      }
    });
  });
})();

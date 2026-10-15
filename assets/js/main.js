(function () {
  var root = document.documentElement;
  var themeButton = document.querySelector('.theme-toggle');
  var navButton = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.primary-nav');

  if (themeButton) {
    themeButton.addEventListener('click', function () {
      var next = root.dataset.theme === 'dark' ? 'light' : 'dark';
      root.dataset.theme = next;
      localStorage.setItem('iy-theme', next);
    });
  }

  if (navButton && nav) {
    navButton.addEventListener('click', function () {
      var open = navButton.getAttribute('aria-expanded') === 'true';
      navButton.setAttribute('aria-expanded', String(!open));
      nav.classList.toggle('is-open', !open);
    });
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navButton.setAttribute('aria-expanded', 'false');
        nav.classList.remove('is-open');
      });
    });
  }

  document.querySelectorAll('.prose pre').forEach(function (block) {
    var button = document.createElement('button');
    button.className = 'copy-code';
    button.type = 'button';
    button.textContent = 'Kopyala';
    button.setAttribute('aria-label', 'Kod bloğunu kopyala');
    button.addEventListener('click', function () {
      var code = block.querySelector('code');
      navigator.clipboard.writeText(code ? code.innerText : block.innerText).then(function () {
        button.textContent = 'Kopyalandı';
        setTimeout(function () { button.textContent = 'Kopyala'; }, 1600);
      });
    });
    block.appendChild(button);
  });
}());

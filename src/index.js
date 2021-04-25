import pageLoad from './pageLoad'


(() => {
  const uiRenderer = (() => {
    const content = document.getElementById("content");
    content.appendChild(pageLoad().leftNav);
    content.appendChild(pageLoad().title);
    content.appendChild(pageLoad().logo);

  })();

})();
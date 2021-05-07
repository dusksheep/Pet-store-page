import pageLoad from './pageLoad'
import loadBrinquedos from './loadBrinquedos'


(() => {
  'use strict';

  const uiRenderer = (() => {
    const content = document.getElementById("content");
    const leftNav = document.getElementById("leftNav");

    const loadLeftNav = (() => {
      const brinquedos = leftNav.appendChild(pageLoad().brinquedos);
      const roupinhas = leftNav.appendChild(pageLoad().roupinhas);
      const acessorios = leftNav.appendChild(pageLoad().acessorios);
      const higiene = leftNav.appendChild(pageLoad().higiene);
      leftNav.appendChild(pageLoad().leftNav);
      return {
        brinquedos,
        roupinhas,
        acessorios,
        higiene,
      }
    })();

    const loadHome = (() => {
      content.appendChild(pageLoad().title);
      content.appendChild(pageLoad().logo);
      content.appendChild(pageLoad().adress);
      content.appendChild(pageLoad().telephoneNumber);
      return {}
    })();

    const renderBrinquedos = () => {
      content.appendChild(loadBrinquedos().imgWrapper);
      console.log("brinquedos loaded");
    };

    return {
      content,
      leftNav,
      loadHome,
      loadLeftNav,
      renderBrinquedos
    }
  })();

  const buttonsFucntions = (() => {
    const cleanContent = () => {
      while (uiRenderer.content.hasChildNodes()) {
        uiRenderer.content.removeChild(uiRenderer.content.firstChild);
      }
    }
    uiRenderer.loadLeftNav.brinquedos.addEventListener("click", cleanContent);
    uiRenderer.loadLeftNav.brinquedos.addEventListener("click", uiRenderer.renderBrinquedos);
  })();


  window.addEventListener("load", uiRenderer);
})();
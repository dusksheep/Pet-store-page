import pageLoad from './pageLoad'
import loadBrinquedos from './loadBrinquedos'
import loadRoupinhas from './loadRoupinhas'
import loadAcessorios from './loadAcessorios'
import loadHigiene from './loadHigiene'



(() => {
  'use strict';
  const content = document.getElementById("content");
  const leftNav = document.getElementById("leftNav");

  const uiRenderer = (() => {
    const loadLeftNav = (() => {
      const home = leftNav.appendChild(pageLoad().home);
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
        home,
      }
    })();

    const renderHome = () => {
      console.log("home loaded");
      content.appendChild(pageLoad().title);
      content.appendChild(pageLoad().logo);
      content.appendChild(pageLoad().adress);
      content.appendChild(pageLoad().telephoneNumber);

    };

    const renderBrinquedos = () => {
      content.appendChild(loadBrinquedos().brinquedosParagraph);
      content.appendChild(loadBrinquedos().logo);
    };

    const renderRoupinhas = () => {
      content.appendChild(loadRoupinhas().roupinhasParagraph);
      content.appendChild(loadRoupinhas().logo);
    };

    const renderAcessorios = () => {
      content.appendChild(loadAcessorios().acessoriosParagraph);
      content.appendChild(loadAcessorios().logo);
    };

    const renderHigiene = () => {
      content.appendChild(loadHigiene().higieneParagraph);
      content.appendChild(loadHigiene().logo);
    };

    return {
      loadLeftNav,
      renderHome,
      renderBrinquedos,
      renderRoupinhas,
      renderAcessorios,
      renderHigiene,
    }
  })();

  const buttonsFucntions = (() => {
    const cleanContent = () => {
      while (content.hasChildNodes()) {
        content.removeChild(content.firstChild);
      }
    }

    uiRenderer.loadLeftNav.home.addEventListener("click", cleanContent);
    uiRenderer.loadLeftNav.home.addEventListener("click", uiRenderer.renderHome);

    uiRenderer.loadLeftNav.brinquedos.addEventListener("click", cleanContent);
    uiRenderer.loadLeftNav.brinquedos.addEventListener("click", uiRenderer.renderBrinquedos);

    uiRenderer.loadLeftNav.roupinhas.addEventListener("click", cleanContent);
    uiRenderer.loadLeftNav.roupinhas.addEventListener("click", uiRenderer.renderRoupinhas);

    uiRenderer.loadLeftNav.acessorios.addEventListener("click", cleanContent);
    uiRenderer.loadLeftNav.acessorios.addEventListener("click", uiRenderer.renderAcessorios);

    uiRenderer.loadLeftNav.higiene.addEventListener("click", cleanContent);
    uiRenderer.loadLeftNav.higiene.addEventListener("click", uiRenderer.renderHigiene);
  })();


  window.addEventListener("load", uiRenderer.renderHome);
  window.addEventListener("load", uiRenderer.loadLeftNav);


})();
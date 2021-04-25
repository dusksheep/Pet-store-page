const pageLoad = () => {
  //leftNav
  const leftNav = document.createElement("div");
  const brinquedos = document.createElement("a");
  const roupinhas = document.createElement("a");
  const acessorios = document.createElement("a");
  const higiene = document.createElement("a")
  
  leftNav.setAttribute("id", "leftNav");
  brinquedos.setAttribute("class", "leftNavA");
  roupinhas.setAttribute("class","leftNavA");
  acessorios.setAttribute("class", "leftNavA");
  higiene.setAttribute("class", "leftNavA");

  brinquedos.innerHTML = "Brinquedos"
  roupinhas.innerHTML = "Roupinhas"
  acessorios.innerHTML = "Acessorios"
  higiene.innerHTML = "Higiêne"

  
  leftNav.appendChild(brinquedos);
  leftNav.appendChild(roupinhas);
  leftNav.appendChild(acessorios);
  leftNav.appendChild(higiene);

  //title
  const title = document.createElement("h1");
  title.innerHTML = "AnimaPet";

  //logo
  const logo = document.createElement("img");
  logo.setAttribute("id", "logo");
  logo.src = "logo.jpeg";

  return {
    leftNav,
    title,
    logo
  }
}


export default pageLoad;
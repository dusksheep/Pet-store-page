const pageLoad = () => {
  //leftNav
  const leftNav = document.createElement("div");
  const brinquedos = document.createElement("button");
  const roupinhas = document.createElement("button");
  const acessorios = document.createElement("button");
  const higiene = document.createElement("button");
  const home = document.createElement("button");
  
  leftNav.setAttribute("id", "leftNav");
  brinquedos.setAttribute("class", "navButton");
  roupinhas.setAttribute("class","navButton");
  acessorios.setAttribute("class", "navButton");
  higiene.setAttribute("class", "navButton");
  home.setAttribute("class", "navButton");

  brinquedos.innerHTML = "Brinquedos"
  roupinhas.innerHTML = "Roupinhas"
  acessorios.innerHTML = "Acessorios"
  higiene.innerHTML = "Higiêne"
  home.innerHTML = "Home"
  
  

  //title
  const title = document.createElement("h1");
  title.innerHTML = "AnimaPet";

  //logo
  const logo = document.createElement("img");
  logo.setAttribute("class", "centerLogo");
  logo.src = "logo.jpeg";

  //whatsapp number
  const telephoneNumber = document.createElement("p");
  telephoneNumber.setAttribute("class", "paragraph");
  telephoneNumber.innerHTML = "Whatsapp (55)984043277";

  //adress
  const adress = document.createElement("p");
  adress.innerHTML = "Loja ecommerce de Santana do Livramento para venda de acessorios para pets"
  adress.setAttribute("class", "paragraph")

  

  return {
    leftNav,
    brinquedos,
    roupinhas,
    acessorios,
    higiene,
    title,
    logo,
    telephoneNumber,
    adress,
    home,
  }
}


export default pageLoad;
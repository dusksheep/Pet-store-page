const loadAcessorios = () => {
  const logo = document.createElement("img");
  logo.setAttribute("class", "rightLogo");
  logo.src = "logo.jpeg";
  
  const acessoriosParagraph = document.createElement("h1");
  acessoriosParagraph.setAttribute("class", "centerText");
  acessoriosParagraph.innerHTML = "Acessorios";
  return {
    logo,
    acessoriosParagraph,
  };
}

export default loadAcessorios;
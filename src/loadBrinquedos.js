const loadBrinquedos = () => {
  const logo = document.createElement("img");
  logo.setAttribute("class", "rightLogo");
  logo.src = "logo.jpeg";
  
  const brinquedosParagraph = document.createElement("h1");
  brinquedosParagraph.setAttribute("class", "centerText");
  brinquedosParagraph.innerHTML = "Brinquedos";
  return {
    logo,
    brinquedosParagraph,
  };
}

export default loadBrinquedos;
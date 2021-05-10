const loadRoupinhas = () => {
  const logo = document.createElement("img");
  logo.setAttribute("class", "rightLogo");
  logo.src = "logo.jpeg";
  
  const roupinhasParagraph = document.createElement("h1");
  roupinhasParagraph.setAttribute("class", "centerText");
  roupinhasParagraph.innerHTML = "Roupinhas";
  return {
    logo,
    roupinhasParagraph,
  };
}

export default loadRoupinhas;
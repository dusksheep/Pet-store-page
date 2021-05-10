const loadHigiene = () => {
  const logo = document.createElement("img");
  logo.setAttribute("class", "rightLogo");
  logo.src = "logo.jpeg";
  
  const higieneParagraph = document.createElement("h1");
  higieneParagraph.setAttribute("class", "centerText");
  higieneParagraph.innerHTML = "Higiêne";
  return {
    logo,
    higieneParagraph,
  };
}

export default loadHigiene;
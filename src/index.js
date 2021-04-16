(() => {
  const createElement = (type, innerHtml) => {
    let newElement = document.createElement(type);
    newElement.innerHTML = innerHtml;
    return newElement;
  }
  const GUI = (() => {
    const content = document.getElementById("content");
    const title = createElement("h1", "Roupas para bulldogs");
    const logo = createElement("img");
    logo.src = "logo.jpeg";
    content.appendChild(title);
    content.appendChild(logo);
    return {
      content
    };
  })();

  
})();
const dynamicText = ["Software Developer", "Web Developer", "Software Engineer", "Programmer"];
let index = 0;

function changeText() {
  const dynamicElement = document.querySelector(".dynamic-text");
  dynamicElement.textContent = dynamicText[index];
  index = (index + 1) % dynamicText.length;
}

setInterval(changeText, 2000);

import "./styles.css";
document.addEventListener("DOMContentLoaded", () => {
  const element = document.createElement('h1');
  const myDiv = document.createElement('div');
  element.textContent = "This heading is generated by JavaScript";
  myDiv.id=('img_div');

  document.body.appendChild(element);
  document.body.appendChild(myDiv);

});
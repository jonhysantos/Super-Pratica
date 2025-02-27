const inputFilme = document.querySelector(".input-filme");
const btn = document.querySelector(".btn");
const ulElement = document.querySelector(".ul-element");

btn.addEventListener("click", function () {
  const filme = inputFilme.value;
  if (filme !== "") {
    const liElement = document.createElement("li");
    liElement.textContent = filme
    ulElement.appendChild(liElement)
  } else {
    alert(`Digite o nome do filme`);
  }
});

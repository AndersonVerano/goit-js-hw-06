/*Escriba un script que, cuando se escriba el texto en el input de input#nombre-input (evento input), sustituya su valor actual en span#name-output. Si el input está vacío, el span debería mostrar la secuencia "Anónimo".

<input type="text" id="name-input" placeholder="Please enter your name" />
<h1>Hello, <span id="name-output">Anonymous</span>!</h1>*/
const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

nameInput.addEventListener("input", (event) => {
  if (event.target.value.trim()) {
    nameOutput.textContent = event.target.value;
  } else {
    nameOutput.textContent = "Anónimo";
  }
});

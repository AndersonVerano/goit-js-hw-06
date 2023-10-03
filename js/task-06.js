const validationInput = document.getElementById("validation-input");

validationInput.addEventListener("blur", () => {
  const expectedLength = validationInput.getAttribute("data-length");
  const actualLength = validationInput.value.length;

  validationInput.classList.remove("valid", "invalid");

  if (actualLength === parseInt(expectedLength)) {
    validationInput.classList.add("valid");
  } else {
    validationInput.classList.add("invalid");
  }
});

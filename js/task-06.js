const validationInput = document.querySelector("#validation-input");

validationInput.addEventListener("blur", () => {
  const requiredLength = parseInt(validationInput.getAttribute("data-length"), 10);
  const inputValue = validationInput.value;

  validationInput.classList.toggle("valid", inputValue.length === requiredLength);
  validationInput.classList.toggle("invalid", inputValue.length !== requiredLength);
});
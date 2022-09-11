const textInput = document.querySelector("#validation-input");
const textInputLength = textInput.getAttribute("data-length");

textInput.addEventListener("blur", inputBlur);

function inputBlur(event) {
  const isValid = event.currentTarget.value.length === Number(textInputLength);

  if (isValid) {
    event.currentTarget.classList.add("valid");
    event.currentTarget.classList.remove("invalid");
  } else {
    event.currentTarget.classList.remove("valid");
    event.currentTarget.classList.add("invalid");
  }
}

const intputFontSizeRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");
textRef.style.fontSize = "56px";

intputFontSizeRef.addEventListener("input", (event) => {
  textRef.style.fontSize = `${event.currentTarget.value}px`;
});

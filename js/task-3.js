const inputName = document.getElementById("name-input");
const outputElement = document.getElementById("name-output");
function updateGreeting() {
  const inputValue = inputName.value.trim();
    outputElement.textContent = inputValue === "" ? "Anonymous" : inputValue;
}
inputName.addEventListener('input', updateGreeting);
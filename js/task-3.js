const inputName = document.getElementById("name-input");

function updateGreeting() {
  const inputValue = inputName.value.trim();
  const outputElement = document.getElementById("name-output");
  outputElement.textContent = inputValue === "" ? "Anonymous" : inputValue;
}
inputName.addEventListener('input', updateGreeting);
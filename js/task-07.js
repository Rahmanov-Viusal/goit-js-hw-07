const input = document.getElementById('font-size-control');
const span = document.getElementById('text');
input.addEventListener("input", handleInputRange);
function handleInputRange(event) {
  span.style.fontSize = event.currentTarget.value * 0.32 + 'px';
}
const textBox = document.getElementById("my-box");
const saveButton = document.getElementById("save-btn");

// Load saved text when the page opens
window.onload = function() {
  if (localStorage.getItem("savedText")) {
    textBox.value = localStorage.getItem("savedText");
  }
};

// Save text when the button is clicked
saveButton.addEventListener("click", function() {
  localStorage.setItem("savedText", textBox.value);
  alert("Saved!");
});

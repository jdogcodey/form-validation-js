// Function to add 'change' event listener
function addChangeEvent(element) {
  const eleToAddEvent = document.getElementById(element);
  eleToAddEvent.addEventListener("change", () => {
    if (eleToAddEvent.checkValidity()) {
      eleToAddEvent.classList.add("valid");
      eleToAddEvent.classList.remove("invalid");
    } else {
      eleToAddEvent.classList.add("invalid");
      eleToAddEvent.classList.remove("valid");
    }
  });
}

addChangeEvent();

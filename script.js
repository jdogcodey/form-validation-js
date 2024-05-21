// Function to add 'change' event listener
function addChangeEvent(element) {
  const eleToAddEvent = document.getElementById(element);
  const eleSpan = document.getElementById(`${element + "-span"}`);
  eleToAddEvent.addEventListener("change", () => {
    if (eleToAddEvent.checkValidity()) {
      eleToAddEvent.classList.add("valid");
      eleToAddEvent.classList.remove("invalid");
      eleSpan.style.display = "none";
    } else {
      eleToAddEvent.classList.add("invalid");
      eleToAddEvent.classList.remove("valid");
      eleSpan.style.display = "block";
    }
  });
}

addChangeEvent("email");
addChangeEvent("country");

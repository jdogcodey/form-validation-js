function addRegularChangeEvent(element) {
  validTest(
    document.getElementById(element),
    document.getElementById(`${element + "-span"}`)
  );
}

function validTest(ele, eleSpan) {
  ele.addEventListener("change", () => {
    if (ele.checkValidity()) {
      ele.classList.add("valid");
      ele.classList.remove("invalid");
      eleSpan.style.display = "none";
    } else {
      ele.classList.add("invalid");
      ele.classList.remove("valid");
      eleSpan.style.display = "block";
    }
  });
}

addRegularChangeEvent("email");
addRegularChangeEvent("country");

// Function to add 'change' event listener
function addChangeEvent(element) {
  const eleToAddEvent = document.getElementById(element);
  const eleSpan = document.getElementById(`${element}-span`);
  eleToAddEvent.addEventListener("change", () => {
    checkValidity(eleToAddEvent, eleSpan);
  });
}

function postEvent() {
  const postInput = document.getElementById("postcode");
  const postSpan = document.getElementById("postcode-span");
  const countrySelect = document.getElementById("country");

  countrySelect.addEventListener("change", changePostPattern);
  postInput.addEventListener("change", () => {
    changePostPattern();
    patternTestOutcome("postcode");
  });
}

function patternTestOutcome(element) {
  const eleInput = document.getElementById(element);
  const eleSpan = document.getElementById(`${element}-span`);
  if (eleInput.validity.patternMismatch) {
    eleInput.classList.add("invalid");
    eleInput.classList.remove("valid");
    eleSpan.style.display = "block";
  } else {
    eleInput.classList.add("valid");
    eleInput.classList.remove("invalid");
    eleSpan.style.display = "none";
  }
}

function passwordTest(element) {
  const ele = document.getElementById(element);
  ele.addEventListener("change", () => {
    patternTestOutcome(element);
  });
}

function passwordMatch(element) {
  const ele = document.getElementById(element);
  const passEle = document.getElementById("password");
  const eleSpan = document.getElementById(`${element}-span`);
  ele.addEventListener("change", () => {
    if (passEle.classList.contains("valid")) {
      if (ele.value === passEle.value) {
        patternTestOutcome(element);
      } else {
        eleSpan.innerHTML = "Passwords must match";
        eleSpan.style.display = "block";
      }
    } else {
      eleSpan.innerHTML = "Please enter a valid initial password above";
      eleSpan.style.display = "block";
    }
  });
}

function checkValidity(element, span) {
  if (element.checkValidity()) {
    element.classList.add("valid");
    element.classList.remove("invalid");
    span.style.display = "none";
  } else {
    element.classList.add("invalid");
    element.classList.remove("valid");
    span.style.display = "block";
  }
}

// Function to change the postcode pattern based on country
function changePostPattern() {
  const codeList = {
    GB: "GIR\\s?0AA|(?:[A-Z]{1,2}\\d[A-Z\\d]? \\d[A-Z]{2})",
    JE: "JE\\d[\\dA-Z]?\\s?\\d[ABD-HJLN-UW-Z]{2}",
    GG: "GY\\d[\\dA-Z]?\\s?\\d[ABD-HJLN-UW-Z]{2}",
    IM: "IM\\d[\\dA-Z]?\\s?\\d[ABD-HJLN-UW-Z]{2}",
    US: "^\\d{5}(-\\d{4})?$",
    CA: "[ABCEGHJKLMNPRSTVXY]\\d[ABCEGHJ-NPRSTV-Z]\\s?\\d[ABCEGHJ-NPRSTV-Z]\\d",
    DE: "\\d{5}",
    JP: "\\d{3}-\\d{4}",
    FR: "\\d{2}\\s?\\d{3}",
    AU: "\\d{4}",
    IT: "\\d{5}",
    CH: "\\d{4}",
    AT: "\\d{4}",
    ES: "\\d{5}",
    NL: "\\d{4}\\s?[A-Z]{2}",
    BE: "\\d{4}",
    DK: "\\d{4}",
    SE: "\\d{3}\\s?\\d{2}",
    NO: "\\d{4}",
    BR: "\\d{5}[-]?\\d{3}",
    PT: "\\d{4}([-]\\d{3})?",
    FI: "\\d{5}",
    AX: "22\\d{3}",
    KR: "\\d{3}[-]\\d{3}",
    CN: "\\d{6}",
    TW: "\\d{3}(\\d{2})?",
    SG: "\\d{6}",
    DZ: "\\d{5}",
    AD: "AD\\d{3}",
    AR: "([A-HJ-NP-Z])?\\d{4}([A-Z]{3})?",
    AM: "(37)?\\d{4}",
    AZ: "\\d{4}",
    BH: "((1[0-2]|[2-9])\\d{2})?",
    BD: "\\d{4}",
    BB: "(BB\\d{5})?",
    BY: "\\d{6}",
    BM: "[A-Z]{2}\\s?[A-Z0-9]{2}",
    BA: "\\d{5}",
    IO: "BBND 1ZZ",
    BN: "[A-Z]{2}\\s?\\d{4}",
    BG: "\\d{4}",
    KH: "\\d{5}",
    CV: "\\d{4}",
    CL: "\\d{7}",
    CR: "\\d{4,5}|\\d{3}-\\d{4}",
    HR: "\\d{5}",
    CY: "\\d{4}",
    CZ: "\\d{3}\\s?\\d{2}",
    DO: "\\d{5}",
    EC: "([A-Z]\\d{4}[A-Z]|(?:[A-Z]{2})?\\d{6})?",
    EG: "\\d{5}",
    EE: "\\d{5}",
    FO: "\\d{3}",
    GE: "\\d{4}",
    GR: "\\d{3}\\s?\\d{2}",
    GL: "39\\d{2}",
    GT: "\\d{5}",
    HT: "\\d{4}",
    HN: "(?:\\d{5})?",
    HU: "\\d{4}",
    IS: "\\d{3}",
    IN: "\\d{6}",
    ID: "\\d{5}",
    IL: "\\d{5}",
    JO: "\\d{5}",
    KZ: "\\d{6}",
    KE: "\\d{5}",
    KW: "\\d{5}",
    LA: "\\d{5}",
    LV: "\\d{4}",
    LB: "(\\d{4}(\\s?\\d{4})?)?",
    LI: "(948[5-9])|(949[0-7])",
    LT: "\\d{5}",
    LU: "\\d{4}",
    MK: "\\d{4}",
    MY: "\\d{5}",
    MV: "\\d{5}",
    MT: "[A-Z]{3}\\s?\\d{2,4}",
    MU: "(\\d{3}[A-Z]{2}\\d{3})?",
    MX: "\\d{5}",
    MD: "\\d{4}",
    MC: "980\\d{2}",
    MA: "\\d{5}",
    NP: "\\d{5}",
    NZ: "\\d{4}",
    NI: "((\\d{4}-)?\\d{3}-\\d{3}(-\\d{1})?)?",
    NG: "(\\d{6})?",
    OM: "(PC )?\\d{3}",
    PK: "\\d{5}",
    PY: "\\d{4}",
    PH: "\\d{4}",
    PL: "\\d{2}-\\d{3}",
    PR: "00[679]\\d{2}([ -]\\d{4})?",
    RO: "\\d{6}",
    RU: "\\d{6}",
    SM: "4789\\d",
    SA: "\\d{5}",
    SN: "\\d{5}",
    SK: "\\d{3}\\s?\\d{2}",
    SI: "\\d{4}",
    ZA: "\\d{4}",
    LK: "\\d{5}",
    TJ: "\\d{6}",
    TH: "\\d{5}",
    TN: "\\d{4}",
    TR: "\\d{5}",
    TM: "\\d{6}",
    UA: "\\d{5}",
    UY: "\\d{5}",
    UZ: "\\d{6}",
    VE: "\\d{4}",
    VN: "\\d{6}",
    WF: "986\\d{2}",
    YE: "\\d{5}",
    ZM: "\\d{5}",
    ZW: "\\d{5}",
  };

  const countrySelect = document.getElementById("country");
  const postcodeInput = document.getElementById("postcode");
  const selectedCountry = countrySelect.value;

  if (codeList[selectedCountry]) {
    postcodeInput.setAttribute("pattern", codeList[selectedCountry]);
  } else {
    postcodeInput.removeAttribute("pattern");
  }
}

function submitFunctionality() {
  const submitButton = document.getElementById("submit");
  const emailField = document.getElementById("email");
  const countryField = document.getElementById("country");
  const postcodeField = document.getElementById("postcode");
  const passwordField = document.getElementById("password");
  const repeatPassField = document.getElementById("repeat-password");
  submitButton.addEventListener("click", () => {
    event.preventDefault;
    if (
      emailField.classList.contains("valid") &&
      countryField.classList.contains("valid") &&
      postcodeField.classList.contains("valid") &&
      passwordField.classList.contains("valid") &&
      repeatPassField.classList.contains("valid")
    ) {
      alert("Success! This would Submit");
    } else {
      alert("Unsuccessful - Fill in all the boxes with valid answers!");
    }
  });
}

// Add event listeners when the page loads
document.addEventListener("DOMContentLoaded", () => {
  addChangeEvent("country");
  addChangeEvent("postcode");
  postEvent();
  passwordTest("password");
  passwordMatch("repeat-password");
  submitFunctionality();
});

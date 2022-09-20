// circles for reference
const EMPTY_CIRCLE = "⚪"
const FILLED_CIRCLE = "⚫"
const CIRCLES = document.querySelectorAll("span.circle-glyph")

// click event for all circles
for (const circle of CIRCLES) { 
  circle.addEventListener("click", circleClickCallback); 
}

function circleClickCallback(event) {
  const circle = event.target;
  changeCircleState(circle);
  // updateDisplay();
}

// flip circle's state
function changeCircleState(target) {
  if (target.innerText === EMPTY_CIRCLE) {
    setElementInnerText(target, FILLED_CIRCLE);
    resetElementClassName(target, "activated-circle");
  }
  else {
    setElementInnerText(target, EMPTY_CIRCLE);
    resetElementClassName(target, "inactive-circle");
  }
}

// function updateDisplay() {

// }

function resetElementClassName(element, klassName) {
  element.className = klassName;
}

function setElementInnerText(element, text) {
  element.innerText = text;
}

// function hideElement(element) {
//   element.className = "hidden";
// }
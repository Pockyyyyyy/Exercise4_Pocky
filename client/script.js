let inputString = "";
let index = 0;
let delay = 100;
let input;
let submitButton;
let nextButton;
let clearButton;
let apiResponse;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(32);

  input = createInput();
  input.position(50, 50);
  input.changed(getTextFromUser);

  submitButton = createButton('Submit');
  submitButton.position(230, 50);
  submitButton.mousePressed(getTextFromUser);

  nextButton = createButton('Next');
  nextButton.position(300, 50);
  nextButton.mousePressed(getTextFromAPI);
  nextButton.hide();

  clearButton = createButton('Clear');
  clearButton.position(355, 50);
  clearButton.mousePressed(clearResponse);

  background(255);
}

function draw() {
  background(255);
  let displayString = "";
  let words = inputString.split(" ");
  let currentLine = "";
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (textWidth(currentLine + word) < width - 50) {
      currentLine += word + " ";
    } else {
      displayString += currentLine + "\n";
      currentLine = word + " ";
    }
  }
  displayString += currentLine;
  let lines = displayString.split("\n");
  let lineHeight = textAscent() + textDescent();
  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    let y = (height + lineHeight) / 6 + lineHeight * i;
    text(line, 50, y);
  }
  
  // Show "Next" button if there's a response
  if (apiResponse) {
    nextButton.show();
  } else {
    nextButton.hide();
  }
}

async function getTextFromAPI() {
  const response = await fetch("http://localhost:3000/generate",
    { method: "post", body: { text: inputString } });
  const data = await response.json();
  apiResponse = data.text;
  inputString = apiResponse;
  delay = Math.floor(Math.random() * 200) + 50;
  index = 0;
  clearInterval(interval);
  interval = setInterval(function () {
    index++;
    if (index > inputString.length) {
      clearInterval(interval);
    }
  }, delay);
}

function getTextFromUser() {
  inputString = input.value();
  input.value("");
  apiResponse = null;
  if (inputString !== "") {
    getTextFromAPI();
  }
}

function clearResponse() {
  apiResponse = null;
  inputString = "";
}

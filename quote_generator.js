var addButton = document.getElementById("addMore");
var container = document.getElementById("parts");
var inputCount = 1;
var maxInputs = 50;

addButton.addEventListener("click", function () {
  if (inputCount >= maxInputs) {
    return; // Exit the function if the maximum limit is reached
  }

  inputCount++;

  var numberContainerDiv = createNumberContainer(inputCount);
  var partNameDiv = createFormGroup(
    "partName",
    "Part Name:",
    "Enter part name"
  );
  var partNumberDiv = createFormGroup(
    "partNumber",
    "Part Number:",
    "Enter part number"
  );
  var link1Div = createFormGroup("link1", "Link 1:", "Enter link 1");
  var link2Div = createFormGroup("link2", "Link 2:", "Enter link 2");
  var link3Div = createFormGroup("link3", "Link 3:", "Enter link 3");
  var link4Div = createFormGroup("link4", "Link 4:", "Enter link 4");

  container.appendChild(numberContainerDiv);
  container.appendChild(partNameDiv);
  container.appendChild(partNumberDiv);
  container.appendChild(link1Div);
  container.appendChild(link2Div);
  container.appendChild(link3Div);
  container.appendChild(link4Div);

  addVerticalLine();
});

function createNumberContainer(count) {
  var numberContainerDiv = document.createElement("div");
  numberContainerDiv.id = "numberContainer";

  var numberHeader = document.createElement("h4");
  numberHeader.className = "number";
  numberHeader.textContent = "Number: ";

  var numberSpan = document.createElement("span");
  numberSpan.className = "plusnum";
  numberSpan.textContent = formatNumber(count);

  numberHeader.appendChild(numberSpan);
  numberContainerDiv.appendChild(numberHeader);

  return numberContainerDiv;
}

function formatNumber(number) {
  return number.toString().padStart(2, "0");
}

function createFormGroup(id, labelContent, placeholder) {
  var formGroupDiv = document.createElement("div");
  formGroupDiv.className = "form-box";

  var label = document.createElement("label");
  label.htmlFor = id;
  label.textContent = labelContent;

  var input = document.createElement("input");
  input.type = "text";
  input.className = "form-control";
  input.id = id;
  input.name = id;
  input.placeholder = placeholder;

  formGroupDiv.appendChild(label);
  formGroupDiv.appendChild(input);

  return formGroupDiv;
}

function addVerticalLine() {
  var lineDiv = document.createElement("div");
  lineDiv.className = "line";
  container.appendChild(lineDiv);
}

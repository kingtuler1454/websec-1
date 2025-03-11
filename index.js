let lastResult = "";

function calculate() {
  const num1Field = document.getElementById("input-field1");
  const operator = document.getElementById("operator").value;
  const num2Field = document.getElementById("input-field2");
  const resultDiv = document.getElementById("current-result");
  const historyDiv = document.getElementById("history");

  const num1 = parseFloat(num1Field.value);
  const num2 = parseFloat(num2Field.value);

  let errorMessage = "";

  num1Field.classList.remove("error");
  num2Field.classList.remove("error");

  if (isNaN(num1)) {
    num1Field.classList.add("error");
    errorMessage += "Введите корректное первое число. ";
  }

  if (isNaN(num2)) {
    num2Field.classList.add("error");
    errorMessage += "Введите корректное второе число. ";
  }

  if (errorMessage) {
    resultDiv.innerHTML = `<span class="error-message">${errorMessage}</span>`;
    return;
  }

  let result;
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = Math.abs(num2) < Number.EPSILON ? "Ошибка: деление на ноль" : num1 / num2;
      break;
    default:
      result = "Ошибка";
  }

  resultDiv.innerHTML = `${num1} ${operator} ${num2} = ${result}`;

  if (lastResult) {
    const newHistoryItem = document.createElement("div");
    newHistoryItem.classList.add("history-item");
    newHistoryItem.textContent = lastResult;

    historyDiv.appendChild(newHistoryItem);

    while (historyDiv.children.length > 3) {
      historyDiv.removeChild(historyDiv.firstChild);
    }
  }

  lastResult = `${num1} ${operator} ${num2} = ${result}`;
}

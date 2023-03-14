// Part-1 Script below:

function part1func() {
  let product, sum;
  product = 1;
  sum = 0;
  for (let index = 5; index <= 25; index += 4) {
    product = product * index;
    console.log(index);
    sum = sum + index;
  }
  console.log(sum);
  document.getElementById("part1result").innerHTML =
    "The product of 5 * 9 * 13 * 17 * 21 * 25 is " +
    product.toLocaleString() +
    "<br>" +
    "The sum of 5 + 9 + 13 + 17 + 21 + 25 is " +
    sum.toLocaleString() +
    "<br>" +
    "<br>";
}

part1func();

function part1while() {
  let i = 3;
  let product = 1;
  let sum = 0;
  while (i <= 18) {
    product = product * i;
    sum = sum + i;
    console.log(i);
    i += 3;
  }
  console.log(sum);
  console.log(product);
  document.getElementById("part1while").innerHTML =
    "The product of 3 * 6 * 9 * 12 * 15 * 18 is " +
    product.toLocaleString() +
    "<br>" +
    "The sum of 3 + 6 + 9 + 12 + 15 + 18 is " +
    sum.toLocaleString();
}
part1while();
// Dragging the div
$(function () {
  // Make the element draggable
  $(".draggable").draggable();
});

// Part-2 Scripts

let principal = 1000;
let years = 5;

let interestRates = [0.05, 0.06, 0.07];

for (let i = 0; i < interestRates.length; i++) {
  let rate = interestRates[i];

  let table = document.createElement("table");
  let tableHead = document.createElement("thead");
  let tableHeadRow = document.createElement("tr");
  let tableHeadYear = document.createElement("th");
  let tableHeadAmount = document.createElement("th");
  let tableHeadRate = document.createElement("th");

  tableHeadYear.appendChild(document.createTextNode("Year"));
  tableHeadAmount.appendChild(document.createTextNode("Amount on deposit"));
  tableHeadRate.appendChild(document.createTextNode("Interest Rate"));

  tableHeadRow.appendChild(tableHeadYear);
  tableHeadRow.appendChild(tableHeadAmount);
  tableHeadRow.appendChild(tableHeadRate);

  tableHead.appendChild(tableHeadRow);
  table.appendChild(tableHead);

  let tableBody = document.createElement("tbody");

  for (let j = 1; j <= years; j++) {
    let amount = principal * Math.pow(1 + rate, j);
    let row = tableBody.insertRow();

    let yearCell = row.insertCell(0);
    let amountCell = row.insertCell(1);
    let rateCell = row.insertCell(2);

    yearCell.appendChild(document.createTextNode(j));
    amountCell.appendChild(document.createTextNode(amount.toFixed(2)));
    rateCell.appendChild(document.createTextNode(rate.toFixed(2)));

    row.style.backgroundColor = j % 2 == 0 ? "#f3f3f3" : "#ffffff";
  }

  table.appendChild(tableBody);

  //   document.body.appendChild(table);
  document.getElementById("compoundInt").appendChild(table);
}
// Part-3 Extra Credit Scripts
function displaySquare() {
  const numberInput = document.getElementById("number-input");
  const result = document.getElementById("result");
  const size = parseInt(numberInput.value);
  if (isNaN(size) || size < 2 || size > 10) {
    result.innerText =
      "Invalid number. Please enter a number between 2 and 10.";
    return;
  }
  let square = "";
  for (let i = 1; i <= size; i++) {
    for (let j = 1; j <= size; j++) {
      if (i === 1 || i === size || j === 1 || j === size) {
        square += "* &nbsp; &nbsp; ";
      } else {
        square += "&nbsp; &nbsp; &nbsp;&nbsp; ";
      }
    }
    if (i !== size) {
      square += "<br>";
    }
  }
  result.innerHTML = square;
}

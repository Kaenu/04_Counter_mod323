const inputFields = document.querySelectorAll("input");
const addButton = document.querySelector("button");
const resetInputs = document.querySelectorAll("button")[1];
const tableBody = document.querySelector("tbody");
const totalCalories = document.querySelector("tfoot td");
const resetAll = document.querySelectorAll("button")[2];

const validateInputs = () => {
  const description = inputFields[0].value;
  const calories = inputFields[1].value;

  if (description === "" || calories === "" || isNaN(calories)) {
    alert("Leere Eingaben & Buchstaben im Kalorienanzahl werden nicht akzeptiert!");
    return false;
  }
  return true;
};

addButton.addEventListener("click", () => {
  if (!validateInputs()) {
    return;
  }

  const description = inputFields[0].value;
  const calories = Number(inputFields[1].value);

  const newRow = document.createElement("tr");
  const descriptionCell = document.createElement("td");
  const caloriesCell = document.createElement("td");
  const deleteCell = document.createElement("td");

  descriptionCell.innerText = description;
  caloriesCell.innerText = calories;
  deleteCell.innerHTML = '<button class="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded">Löschen</button>';

  newRow.appendChild(descriptionCell);
  newRow.appendChild(caloriesCell);
  newRow.appendChild(deleteCell);

  tableBody.appendChild(newRow);

  deleteCell.addEventListener("click", () => {
    total -= Number(newRow.cells[1].innerText);
    tableBody.removeChild(newRow);
    let newTotal = 0;
    for (let row of tableBody.rows) {
      newTotal += Number(row.cells[1].innerText);
    }
    totalCalories.innerText = newTotal;
  });
  
  let total = 0;
  for (let row of tableBody.rows) {
    total += Number(row.cells[1].innerText);
  }
  totalCalories.innerText = total;
});

resetInputs.addEventListener("click", () => {
  inputFields[0].value = "";
  inputFields[1].value = "";
});

resetAll.addEventListener("click", () => {
    tableBody.innerHTML = "";
    totalCalories.innerText = "0";
  });
let amount = document.getElementById("amount");
let category = document.getElementById("category");
let date = document.getElementById("date");
const text = document.getElementById("text");
let rowCount = 0;

const editValue = (rowId) => {
    const row = document.getElementById(rowId);
    const cells = row.getElementsByTagName('td');
    amount.value = cells[0].innerText;
    category.value = cells[1].innerText;
    date.value = cells[2].innerText;

    // Change the add button to update button
    const addButton = document.getElementById('addButton');
    addButton.innerText = 'Update';
    addButton.onclick = () => updateValue(rowId);
}

const updateValue = (rowId) => {
    let newRow = "<td>" + amount.value + "</td><td>" + category.value + "</td><td>" + date.value + "</td><td><button onclick=\"editValue('" + rowId + "')\">Edit</button><button onclick=\"deleteValue(this)\">Delete</button></td>";
    document.getElementById(rowId).innerHTML = newRow;

    // Reset the input fields and button
    amount.value = "";
    category.value = "";
    date.value = "";
    const addButton = document.getElementById('addButton');
    addButton.innerText = 'Add';
    addButton.onclick = addValue;
}

const deleteValue = (button) => {
    button.parentNode.parentNode.remove();
}

const addValue = () => {
    let rowId = "row_" + rowCount++;
    let newRow = "<tr id='" + rowId + "'><td>" + amount.value + "</td><td>" + category.value + "</td><td>" + date.value + "</td><td><button onclick=\"editValue('" + rowId + "')\">Edit</button><button onclick=\"deleteValue(this)\">Delete</button></td></tr>";
    text.innerHTML += newRow;
    amount.value = "";
    category.value = "";
    date.value = "";
}

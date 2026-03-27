"use strict";
// Functionality for adding a column
const addColumnButton = document.getElementById("addColumn");
addColumnButton.addEventListener("click", function () {
    const headRow = document.querySelector("#tableHeads tr");
    if (!headRow)
        return;
    // Count existing headers
    const headCount = document.querySelectorAll("#tableHeads th").length;
    // Create new th
    const th = document.createElement("th");
    th.className = "th" + (headCount + 1);
    const input = document.createElement("input");
    th.appendChild(input);
    headRow.appendChild(th);
    // Add cels to each row
    const rows = document.querySelectorAll("#tableRows tr");
    rows.forEach(row => {
        const td = document.createElement("td");
        td.innerHTML = "<input>";
        td.className = "th" + (headCount + 1);
        row.appendChild(td);
    });
});
// Functionality for deleting a column
const deleteColumnButton = document.getElementById("deleteColumn");
deleteColumnButton.addEventListener("click", function () {
    const headCount = document.querySelectorAll("#tableHeads th").length;
    if (headCount < 2)
        return;
    const lastColumns = document.querySelectorAll(".th" + headCount);
    lastColumns.forEach(column => {
        column.remove();
    });
});
// Functionality for adding a row
const addRowButton = document.getElementById("addRow");
addRowButton.addEventListener("click", function () {
    const body = document.querySelector("#tableRows");
    if (!body)
        return;
    const headCount = document.querySelectorAll("#tableHeads th").length;
    const rowCount = document.querySelectorAll("#tableRows tr").length;
    const tr = document.createElement("tr");
    tr.id = "tr" + (rowCount + 1);
    for (let i = 0; i < headCount; i++) {
        const td = document.createElement("td");
        td.innerHTML = "<input>";
        td.className = "th" + (i + 1);
        tr.appendChild(td);
    }
    body.appendChild(tr);
});
// Functionality for deleting a row
const deleteRowButton = document.getElementById("deleteRow");
deleteRowButton.addEventListener("click", function () {
    const rowCount = document.querySelectorAll("#tableRows tr").length;
    const lastRow = document.querySelector("#tr" + rowCount);
    if (lastRow != null) {
        lastRow.remove();
    }
});

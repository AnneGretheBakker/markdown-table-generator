// Functionality for adding a column
const addColumnButton: HTMLButtonElement = document.getElementById("addColumn") as HTMLButtonElement;

addColumnButton!.addEventListener("click", function () {
    const headRow = document.querySelector("#tableHeads tr");
    if (!headRow) return;

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
const deleteColumnButton: HTMLButtonElement = document.getElementById("deleteColumn") as HTMLButtonElement;

deleteColumnButton!.addEventListener("click", function () {
    const headCount = document.querySelectorAll("#tableHeads th").length;
    if (headCount < 2) return;

    const lastColumns = document.querySelectorAll(".th" + headCount);

    lastColumns.forEach(column => {
        column.remove();
    })
});

// Functionality for adding a row
const addRowButton: HTMLButtonElement = document.getElementById("addRow") as HTMLButtonElement;

addRowButton!.addEventListener("click", function () {
    const body = document.querySelector("#tableRows");
    if (!body) return;

    const headCount = document.querySelectorAll("#tableHeads th").length;
    const rowCount = document.querySelectorAll("#tableRows tr").length;

    const tr = document.createElement("tr");
    tr.id = "tr" + (rowCount + 1);

    for(let i: number = 0; i < headCount; i++) {
        const td = document.createElement("td");
        td.innerHTML = "<input>";
        td.className = "th" + (i + 1);
        tr.appendChild(td)
    }

    body.appendChild(tr);
})

// Functionality for deleting a row
const deleteRowButton: HTMLButtonElement = document.getElementById("deleteRow") as HTMLButtonElement;

deleteRowButton!.addEventListener("click", function () {
    const rowCount = document.querySelectorAll("#tableRows tr").length;

    const lastRow = document.querySelector("#tr" + rowCount);

    if (lastRow != null) {
        lastRow.remove();
    }
})

// Functionality for generating
const generateButton: HTMLButtonElement = document.getElementById("generate") as HTMLButtonElement;

generateButton!.addEventListener("click", function () {
    let markdownText: string = "|";

    // Convert headers
    const headCount = document.querySelectorAll("#tableHeads th").length;

    document.querySelectorAll("#tableHeads input").forEach(input => {
        // @ts-ignore
        markdownText += " " + input.value + " |"
    });

    markdownText += "\n|"

    for(let i: number = 0; i < headCount; i++) {
        markdownText += " --- |"
    }

    // Convert rows
    const rows = document.querySelectorAll("#tableRows tr");

    rows.forEach(row => {
        markdownText += "\n|"
        const inputs = row.querySelectorAll("input");

        inputs.forEach(input => {
            markdownText += " " + input.value + " |"
        });
    });

    console.log(markdownText);
})
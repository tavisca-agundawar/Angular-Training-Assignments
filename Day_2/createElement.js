"use strict";
class CreateElement {
    constructor() { }
    createTableFromProductArray(arr) {
        // Draw HTML table
        var perrow = 6, // 6 cells per row
        count = 0, // Flag for current cell
        table = document.createElement("table"), container = document.getElementById("container"), row = table.insertRow(); //Init first row
        //Init Headings
        if (arr.length > 0 && arr[0] !== null && arr[0] !== undefined) {
            for (const property of Object.getOwnPropertyNames(arr[0])) {
                var headerCell = document.createElement("TH");
                headerCell.innerHTML = property;
                row.appendChild(headerCell);
            }
            row = table.insertRow();
        }
        for (var i of arr) {
            var cell = row.insertCell();
            cell.innerHTML = i.Name;
            var cell = row.insertCell();
            cell.innerHTML = i.Category;
            var cell = row.insertCell();
            cell.innerHTML = i.Manufacturer;
            var cell = row.insertCell();
            cell.innerHTML = i.Description;
            var cell = row.insertCell();
            cell.innerHTML = i.Price.toString();
            var cell = row.insertCell();
            cell.innerHTML = i.Id.toString();
            //Initialize next row
            row = table.insertRow();
        }
        // Attach table to container
        //container.innerHTML = '';
        if (container === null || container === void 0 ? void 0 : container.hasChildNodes()) {
            var node = container.firstChild;
            container.removeChild(node);
        }
        container === null || container === void 0 ? void 0 : container.appendChild(table);
    }
}

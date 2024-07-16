let tableData = {
    headers: ['Name', 'Roll', 'Gender', 'Actions'],
    rows: [
        ['Aswini','05I2', 'Female'],
        ['Rohitha', '05I1', 'Female'],
        ['Reethu', '05I8', 'Female'],
        ['Alekhya', '05J4', 'Female'],
    ]
};

function createTable(headers, rows) {
    const tableContainer = document.getElementById('table');
    tableContainer.innerHTML = '';

    headers.forEach(headerText => {
        const headerCell = document.createElement('div');
        headerCell.classList.add('cell', 'header');
        headerCell.textContent = headerText;
        tableContainer.appendChild(headerCell);
    });

    rows.forEach((row, rowIndex) => {
        row.forEach(cellText => {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.textContent = cellText;
            tableContainer.appendChild(cell);
        });

        const actionsCell = document.createElement('div');
        actionsCell.classList.add('cell');

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', () => editRow(rowIndex));
        editButton.style.marginRight = '10px'; 
        actionsCell.appendChild(editButton);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete');
        deleteButton.addEventListener('click', () => deleteRow(rowIndex));
        actionsCell.appendChild(deleteButton);

        tableContainer.appendChild(actionsCell);
    });
}

function editRow(rowIndex) {
    const newRowData = prompt("Enter new data (comma separated):", tableData.rows[rowIndex].join(','));
    if (newRowData) {
        const oldRowData = tableData.rows[rowIndex].join(', ');
        tableData.rows[rowIndex] = newRowData.split(',');
        createTable(tableData.headers, tableData.rows);
        showNotification(`Row edited: ${oldRowData} -> ${newRowData}`);
    }
}

function deleteRow(rowIndex) {
    const rowData = tableData.rows[rowIndex].join(', ');
    tableData.rows.splice(rowIndex, 1);
    createTable(tableData.headers, tableData.rows);
    showNotification(`Row deleted: ${rowData}`);
}

function addRow() {
    const newRowData = prompt("Enter new row data (comma separated):");
    if (newRowData) {
        tableData.rows.push(newRowData.split(','));
        createTable(tableData.headers, tableData.rows);
        showNotification(`Row added: ${newRowData}`);
    }
}

function showNotification(message) {
    const notificationContainer = document.getElementById('notification');
    const notification = document.createElement('div');
    notification.classList.add('notification');
    notification.textContent = message;
    notificationContainer.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 3000); 
}

document.getElementById('toggleTableBtn').addEventListener('click', () => {
    const tableContainer = document.getElementById('table');
    if (tableContainer.style.display === 'none' || !tableContainer.style.display) {
        createTable(tableData.headers, tableData.rows);
        tableContainer.style.display = 'grid';
    } else {
        addRow();
    }
});
document.getElementById('table').style.display = 'none';

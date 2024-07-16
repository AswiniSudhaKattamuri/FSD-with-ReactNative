const n = 5;
        const gridContainer = document.getElementById('grid');
        const buttonsContainer = document.getElementById('buttons');
        const directions = [
            { id: 'up', label: 'Up', color: '#4a90e2' },
            { id: 'down',label: 'Down', color: '#357ABD' },
            { id: 'left',label: 'Left', color: '#2C6CB6' },
            { id: 'right',label: 'Right', color: '#174085'}
        ];
        let coloredPosition = { row: 0, col: 0 };

        function createGrid() {
            const table = document.createElement('table');
            for (let i = 0; i < n; i++) {
                const row = document.createElement('tr');
                for (let j = 0; j < n; j++) {
                    const cell = document.createElement('td');
                    if (i === 0 && j === 0) {
                        cell.classList.add('colored');
                    }
                    cell.setAttribute('data-row', i);
                    cell.setAttribute('data-col', j);
                    row.appendChild(cell);
                }
                table.appendChild(row);
            }
            gridContainer.appendChild(table);
        }

        function createButtons() {
            directions.forEach(direction => {
                const button = document.createElement('button');
                button.id = direction.id;
                button.textContent = direction.label;
                button.style.backgroundColor = direction.color;
                button.onclick = () => moveBlock(direction.id);
                buttonsContainer.appendChild(button);
            });
        }

        function moveBlock(direction) {
            const { row, col } = coloredPosition;
            let newRow = row, newCol = col;

            if (direction === 'up' && row > 0) newRow--;
            if (direction === 'down' && row < n - 1) newRow++;
            if (direction === 'left' && col > 0) newCol--;
            if (direction === 'right' && col < n - 1) newCol++;

            const currentCell = document.querySelector(`td[data-row='${row}'][data-col='${col}']`);
            const newCell = document.querySelector(`td[data-row='${newRow}'][data-col='${newCol}']`);

            currentCell.classList.remove('colored');
            newCell.classList.add('colored');
            coloredPosition = { row: newRow, col: newCol };
        }

        createGrid();
        createButtons();
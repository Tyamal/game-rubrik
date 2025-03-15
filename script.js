const gridElement = document.getElementById('grid');
const checkButton = document.getElementById('checkButton');
const messageElement = document.getElementById('message');

const correctAnswers = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

function createGrid() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            const input = document.createElement('input');
            input.type = 'number';
            input.min = 1;
            input.max = 9;
            input.dataset.row = i;
            input.dataset.col = j;
            cell.appendChild(input);
            gridElement.appendChild(cell);
        }
    }
}

function checkAnswers() {
    const inputs = document.querySelectorAll('input');
    let isCorrect = true;
    inputs.forEach(input => {
        const row = input.dataset.row;
        const col = input.dataset.col;
        if (parseInt(input.value) !== correctAnswers[row][col]) {
            isCorrect = false;
        }
    });
    messageElement.textContent = isCorrect ? 'Jawaban Benar!' : 'Jawaban Salah, Coba Lagi!';
}

createGrid();
checkButton.addEventListener('click', checkAnswers);

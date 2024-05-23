const numberInput = document.getElementById('numberInput');
const addNumberButton = document.getElementById('addNumber');
const numberTable = document.getElementById('numberTable');
const sortedNumberTable = document.getElementById('sortedNumberTable');

let numbers = [];

addNumberButton.addEventListener('click', () => {
    const number = parseInt(numberInput.value);
    if (!isNaN(number)) {
        numbers.push(number);
        updateNumberTable();
        numberInput.value = '';
    }
});

function updateNumberTable() {
    numberTable.querySelector('tbody').innerHTML = '';
    numbers.forEach((number, index) => {
        const row = `<tr>
                        <td>${number}</td>
                    </tr>`;
        numberTable.querySelector('tbody').insertAdjacentHTML('beforeend', row);
    });
}

document.getElementById('sortNumbers').addEventListener('click', () => {
    sortedNumbers = [...numbers].sort((a, b) => a - b);
    updateSortedNumberTable(sortedNumbers);
    sortedNumberTable.style.display = 'table';
});

function updateSortedNumberTable(sortedNumbers) {
    sortedNumberTable.querySelector('tbody').innerHTML = '';
    sortedNumbers.forEach((number, index) => {
        const row = `<tr>
                        <td>${number}</td>
                    </tr>`;
        sortedNumberTable.querySelector('tbody').insertAdjacentHTML('beforeend', row);
    });
}
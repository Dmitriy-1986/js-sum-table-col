'use strict';

const datas = [
    {
        'title': 'One row', 'sum': 100, 'bonus': 30
    },
    {
        'title': 'Two row', 'sum': 200, 'bonus': 10
    },
    {
        'title': 'Three row', 'sum': 300, 'bonus': 20
    },
    {
        'title': 'Foure row', 'sum': 400, 'bonus': 5
    },
    {
        'title': 'Five row', 'sum': 500, 'bonus': 3
    },
    {
        'title': 'Six row', 'sum': 600, 'bonus': 50
    },
    {
        'title': 'Seven row', 'sum': 700, 'bonus': 40
    },
];

const table = document.querySelector('#table');
let sum = 0, sumBonus = 0;

for(const data of datas) {
    let tr = document.createElement('tr');
    tr.innerHTML = `<td>${data.title}</td>
                    <td>${data.sum}</td>
                    <td>${data.bonus}</td>`;
    table.append(tr);
    sum = sum + (+data.sum);
    sumBonus = sumBonus + (+data.bonus);
}

let trSum = document.createElement('tr');
trSum.innerHTML += `<td class="total">Total sum ${datas.length} elements:</td>
                    <td class="sum-result">${sum}</td>
                    <td class="sum-result">${sumBonus}</td>`;
table.append(trSum);

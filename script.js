'use strict';

const datas = [
    {
        'title': 'One row', 'sum': 100
    },
    {
        'title': 'Two row', 'sum': 200
    },
    {
        'title': 'Three row', 'sum': 300
    },
    {
        'title': 'Foure row', 'sum': 400
    },
    {
        'title': 'Five row', 'sum': 500
    },
    {
        'title': 'Six row', 'sum': 600
    },
]
const table = document.querySelector('#table');
let sum = 0;

for(const data of datas) {
    let tr = document.createElement('tr');
    tr.innerHTML = `<td>${data.title}</td><td>${data.sum}</td>`;
    table.append(tr);
    sum = sum + (+data.sum);
}

let trSum = document.createElement('tr');
trSum.innerHTML += `<td class="total">Total: </td><td class="sum-result">${sum}</td>`;
table.append(trSum);



























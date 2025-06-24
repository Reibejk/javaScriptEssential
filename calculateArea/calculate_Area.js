let length;
let width;

function calculateArea() {
    length = parseFloat(document.getElementById('length').value);
    width = parseFloat(document.getElementById('width').value);

    let area = length * width;

    document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;
}

function calculateSum() {
    let goods1 = parseFloat(document.getElementById('goods1').value);
    let goods2 = parseFloat(document.getElementById('goods2').value);
    let goods3 = parseFloat(document.getElementById('goods3').value);

    let sum = goods1 + goods2 + goods3;

    document.getElementById('total').innerText = `The total amount of goods is: $${sum}`;
}
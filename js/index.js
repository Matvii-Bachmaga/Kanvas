function isDivisibleBy5(num) {
    return num % 5 === 0;
}

function setSize() {
    const leaf = document.getElementById('leaf');
    const selectedSize = document.querySelector('input[name="size"]:checked');

    if (!selectedSize) {
        console.error('Размер не выбран');
        return;
    }
    const [width, height] = selectedSize.value.split('x');
    leaf.style.width = `${width * 5}px`;
    leaf.style.height = `${height * 5}px`;
    console.log(`Width: ${leaf.style.width}, Height: ${leaf.style.height}`);
}

function updatePrice() {
    console.log('Price updated');
}

const burger = document.getElementById('burger');
const main = document.querySelector('.main-content');

burger.addEventListener('change', () => {
  main.classList.toggle('main-hidden');
});

function calculateSize() {
    const widthInput = document.getElementById('width');
    const heightInput = document.getElementById('height');
    const errorMessage = document.getElementById('error-message');
    const leaf = document.getElementById('leaf');

    const width = parseInt(widthInput.value, 10);
    const height = parseInt(heightInput.value, 10);

    errorMessage.textContent = '';

    if (isNaN(width) || isNaN(height)) {
        errorMessage.textContent = 'Будь ласка, введіть числові значення.';
        return;
    }
    if (!isDivisibleBy5(width) || !isDivisibleBy5(height)) {
        errorMessage.textContent = 'Будь ласка, введіть числа, кратні 5.';
        return;
    }

    leaf.style.width = `${width}px`;
    leaf.style.height = `${height}px`;
    console.log(`Width: ${leaf.style.width}, Height: ${leaf.style.height}`);
}

function calculateSize() {
    const leaf = document.getElementById('leaf');
    const widthInput = document.getElementById('width').value;
    const heightInput = document.getElementById('height').value;
    const errorMessage = document.getElementById('error-message');

    const width = parseInt(widthInput, 10);
    const height = parseInt(heightInput, 10);

    console.log(`Input values: width=${width}, height=${height}`);

    if (isNaN(width) || isNaN(height)) {
        errorMessage.textContent = 'Введіть числові значення.';
        return;
    }

    if (width >= 30 && width <= 150 && height >= 30 && height <= 150) {
        leaf.style.width = (width * 4) + 'px';
        leaf.style.height = (height * 4) + 'px';
        errorMessage.textContent = '';
    } else {
        errorMessage.textContent = 'Введіть правильні параметри (від 30 до 150).';
    }
}

var modal1 = document.getElementById("contactModal");
var buyBtn = document.querySelector(".buy-btn");
var span1 = modal1.querySelector(".close");

buyBtn.onclick = function () {
    modal1.style.display = "block";
}

span1.onclick = function () {
    modal1.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
}

var modal2 = document.getElementById("contactModal2");
var purchaseBtn = document.querySelector(".purchase-btn");
var span2 = modal2.querySelector(".close");

purchaseBtn.onclick = function () {
    modal2.style.display = "block";
}

span2.onclick = function () {
    modal2.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
}

let basePrice = 345;

function getSizePrice() {
    const sizePrices = {
        '30x30': 250,
        '30x90': 350,
        '90x120': 450,
        '90x150': 550
    };

    const selectedSize = document.querySelector('input[name="size"]:checked');
    if (selectedSize) {
        return sizePrices[selectedSize.value] || basePrice;
    } else {
        return basePrice;
    }
}

function updatePrice() {
    let finalPrice = getSizePrice();

    if (document.getElementById('option1').checked) {
        finalPrice += 35;
    }
    if (document.getElementById('option2').checked) {
        finalPrice += 10;
    }
    if (document.getElementById('option3').checked) {
        finalPrice += 40;
    }
    setSize()
    document.getElementById('total').textContent = finalPrice;
}
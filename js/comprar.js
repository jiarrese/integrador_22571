let desc_est = 80;
let desc_tra = 50;
let desc_jun = 15;
let precio = 200;
let calculo = 0;

let name = document.getElementById('name');
let lastname = document.getElementById('lastname');
let email = document.getElementById('email');
let amount = document.getElementById('amount');
let category = document.getElementById('category');
let total_pagar = document.getElementById('totalpagar');

let borrar = document.getElementById('borrar');
let resumen = document.getElementById('resumen');
let infosale = document.getElementById('infosale');

document.getElementById('name').addEventListener('change', calcular_precio);
document.getElementById('lastname').addEventListener('change', calcular_precio);
document.getElementById('email').addEventListener('change', calcular_precio);

document.getElementById('amount').addEventListener('change', calcular_precio);
document.getElementById('category').addEventListener('change', calcular_precio);
document.getElementById('borrar').addEventListener('click', limpiar);
document.getElementById('resumen').addEventListener('click', confirmar);
document.getElementById('confcompra').addEventListener('click', limpiar);


function confirmar() {
    if (name.value != null && lastname.value != null && email.value != null && amount.value != null) {       
        if (calculo > 0) {
            infosale.textContent = name.value + ' ' + lastname.value + ' esta por comprar ' + amount.value + ' entradas ' + category.value + ' por un valor de $' + calculo;
        }
    }
};

function limpiar () {
    amount.value = null;
    category.value = 'Estudiante';
    name.value = null;
    lastname.value = null;
    email.value = null;
    total_pagar.textContent = 0;
    resumen.disabled = true;
    borrar.disabled = true;
};

function calcular_precio () {
    console.log(amount.value);
    console.log(category.value);    
    descuento = 0;
    switch (category.value) {
        case 'Estudiante':
            descuento = desc_est;
            break;
        case 'Trainee':
            descuento = desc_tra;
            break;
        case 'Junior':
        descuento = desc_jun;
        break;
    }

    calculo = (precio * amount.value) - ( ((precio * amount.value) * descuento) /100 );
    // console.log('Total a Pagar: $' + calculo);
    total_pagar.textContent = calculo;
    if (calculo > 0) {
        resumen.disabled = false;
    }    
    borrar.disabled = false;
};

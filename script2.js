document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', validateForm);
});

function validateForm(event) {
    event.preventDefault();

    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const password = document.getElementById('password').value.trim();
    const countryCode = document.getElementById('countryCode').value;
    const errorMessage = document.getElementById('errorMessage');

    let isValid = true;
    errorMessage.innerHTML = '';

    if (!firstName) {
        isValid = false;
        errorMessage.innerHTML += '<p>Por favor, insira seu nome.</p>';
    }

    if (!lastName) {
        isValid = false;
        errorMessage.innerHTML += '<p>Por favor, insira seu último nome.</p>';
    }

    if (!email) {
        isValid = false;
        errorMessage.innerHTML += '<p>Por favor, insira seu email.</p>';
    }

    if (!phone) {
        isValid = false;
        errorMessage.innerHTML += '<p>Por favor, insira seu número de telefone.</p>';
    } else if (!isValidPhoneNumber(phone, countryCode)) {
        isValid = false;
        errorMessage.innerHTML += '<p>Por favor, insira um número de telefone válido.</p>';
    }

    if (!password) {
        isValid = false;
        errorMessage.innerHTML += '<p>Por favor, insira sua senha.</p>';
    }

    if (isValid) {
        successMessage.innerHTML = '<p>Membership criado com sucesso! Retorne para a página principal para efetuar seu login.</p>';
        form.reset();
    }
}


function isValidPhoneNumber(phone, countryCode) {
    const phonePattern = {
        '+1': /^\d{10}$/,
        '+44': /^\d{10}$/,
        '+55': /^\d{11}$/
    };

    return phonePattern[countryCode] ? phonePattern[countryCode].test(phone) : false;
}

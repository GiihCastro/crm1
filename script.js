// Código da página inicial de login

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        document.getElementById('cookiePopup').classList.add('show');
    }, 1000);
});

function acceptCookies() {
    document.getElementById('cookiePopup').classList.remove('show');
}

function showPreferences() {
    document.getElementById('preferencesLink').style.display = 'none';
    document.getElementById('cookiePopup').classList.add('fullscreen');
    document.getElementById('preferences').classList.add('show');
    document.getElementById('cookietitle').innerText = "Privacy Preferences";
    document.getElementById('cookietext').style.display = 'none';
    document.getElementById('logo').style.display = 'none'
}

function confirmPreferences() {
    document.getElementById('preferencesLink').style.display = 'block';
    document.getElementById('cookiePopup').classList.remove('fullscreen');
    document.getElementById('preferences').classList.remove('show');
    document.getElementById('cookietitle').innerText = "We use cookies"
    document.getElementById('cookietext').style.display = 'block';
    document.getElementById('logo').style.display = 'block'

    setTimeout(function() {
        document.getElementById('cookiePopup').classList.add('show');
    }, 500);
}

// Evento Login
function Login(event) {
    event.preventDefault();

    let user = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    if (!user || !password) {
        document.getElementById('resultado').innerText = "Por favor, insira seu email/telefone e senha.";
        return;
    } else if (user === 'infinityschool@gmail.com' && password === '123456') {
        document.getElementById('resultado').innerText = "Login efetuado, boas vindas Infinity School!";
        return;
    } else {
        document.getElementById('resultado').innerText = "Usuário ou senha incorretos!";
        return;
    }
}


// Código da página de esqueci a senha

// Código da página resetar senha
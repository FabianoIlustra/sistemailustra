
function login() {
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
    if (user && pass) {
        document.getElementById('login-screen').classList.add('hidden');
        document.getElementById('dashboard-screen').classList.remove('hidden');
    } else {
        alert('Preencha usuário e senha');
    }
}

function goToKanban() {
    document.getElementById('dashboard-screen').classList.add('hidden');
    document.getElementById('kanban-screen').classList.remove('hidden');
}

function logout() {
    document.getElementById('kanban-screen').classList.add('hidden');
    document.getElementById('dashboard-screen').classList.add('hidden');
    document.getElementById('login-screen').classList.remove('hidden');
}

window.onload = function() {
    document.getElementById('login-screen').classList.remove('hidden');
    document.getElementById('dashboard-screen').classList.add('hidden');
    document.getElementById('kanban-screen').classList.add('hidden');
}

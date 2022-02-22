import { checkAuth, logout } from '../fetch-utils.js';

checkAuth();

const logoutButton = document.getElementById('logout');
const addParticipantBtn = document.getElementById('add');

logoutButton.addEventListener('click', () => {
    logout();
});

addParticipantBtn.addEventListener('click', () => {
    location.replace('../create');
});

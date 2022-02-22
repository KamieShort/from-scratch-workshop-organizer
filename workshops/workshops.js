import { checkAuth, logout, fetchWorkshops, deleteParticipant } from '../fetch-utils.js';
import { renderParticipants } from '../render-utils.js';

checkAuth();

const workshopsEl = document.querySelector('.workshops-container');
const logoutButton = document.getElementById('logout');
const addParticipantBtn = document.getElementById('add');

logoutButton.addEventListener('click', () => {
    logout();
});

addParticipantBtn.addEventListener('click', () => {
    location.replace('../create');
});

async function displayWorkshops() {
    // workshopsEl.textContent = '';

    const workshops = await fetchWorkshops();
    console.log(workshops);

    for (let workshop of workshops) {
        const workshopEl = document.createElement('div');
        const name = document.createElement('p');
        const participantsEl = document.createElement('div');

        workshopEl.classList.add('workshop');
        participantsEl.classList.add('participants');
        name.textContent = workshop.name;

        for (let participant of workshop.participants) {
            const participantEl = renderParticipants(participant);

            participantEl.classList.add('participant');
            participantEl.textContent = participant.name;

            participantEl.addEventListener('click', async () => {
                // await deleteParticipant(participant.id);

                // const newParticipants = await fetchWorkshops();

                displayWorkshops();
            });
            participantsEl.append(participantEl);
        }
        workshopEl.append(name, participantsEl);
        workshopsEl.append(workshopEl);
    }
}

displayWorkshops();

// window.addEventListener('load', async () => {
//     const workshops = await fetchWorkshops();

//     displayWorkshops();
// });

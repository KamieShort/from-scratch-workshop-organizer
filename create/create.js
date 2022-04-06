import { checkAuth, createParticipant, fetchWorkshops } from '../fetch-utils.js';

const seeAllWorkshopsBtn = document.getElementById('workshops');
const form = document.getElementById('participant-form');

seeAllWorkshopsBtn.addEventListener('click', () => {
    location.replace('../workshops');
});

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = new FormData(form);
    const participant = {
        workshop_id: data.get('workshop-id'),
        name: data.get('add-participant'),
    };
    await createParticipant(participant);
    location.replace('../workshops');

    form.reset();
});

window.addEventListener('load', async () => {
    const selectEl = document.getElementById('workshop-id');
    const workshops = await fetchWorkshops();

    for (let workshop of workshops) {
        const option = document.createElement('option');
        option.value = workshop.id;
        option.label = workshop.name;
        selectEl.append(option);
    }
});

checkAuth();

export function renderParticipants(participant) {
    // const div = document.createElement('div');
    const p = document.createElement('p');
    p.classList.add('participant;');
    p.textContent = participant.name;
    return p;
}

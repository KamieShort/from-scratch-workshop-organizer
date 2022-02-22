const SUPABASE_URL = 'https://egdrvheseyhayxbahrri.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVnZHJ2aGVzZXloYXl4YmFocnJpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDQ4ODE3MTMsImV4cCI6MTk2MDQ1NzcxM30.9epFpiRNgk8RIyWEaIJUu1on7JQXBpyH2ROvOPGlajE';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export function getUser() {
    return client.auth.session() && client.auth.session().user;
}

export function checkAuth() {
    const user = getUser();

    if (!user) location.replace('../workshops');
}

export function redirectIfLoggedIn() {
    if (getUser()) {
        location.replace('./workshops');
    }
}

export async function signupUser(email, password) {
    const resp = await client.auth.signUp({ email, password });

    return resp.user;
}

export async function signInUser(email, password) {
    const resp = await client.auth.signIn({ email, password });

    return resp.user;
}

export async function logout() {
    await client.auth.signOut();

    return (window.location.href = '/');
}

export async function fetchWorkshops() {
    const resp = client.from('workshops').select(`*, participants (*)`);
    console.log(resp.data);
    return checkError(resp);
}

export async function deleteParticipant(participantId) {
    const resp = client.from('participants').delete().match({ id: participantId }).single();

    return checkError(resp);
}

function checkError({ data, error }) {
    return error ? console.error(error) : data;
}

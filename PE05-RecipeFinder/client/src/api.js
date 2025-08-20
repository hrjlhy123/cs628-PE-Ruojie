const BASE = import.meta.env.VITE_API_URL || 'http://localhost:4000/api';


export async function getRecipes() {
    const r = await fetch(`${BASE}/recipes`);
    return r.json();
}
export async function getRecipe(id) {
    const r = await fetch(`${BASE}/recipes/${id}`);
    if (!r.ok) throw new Error('Not found');
    return r.json();
}
export async function createRecipe(data) {
    const r = await fetch(`${BASE}/recipes`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
    return r.json();
}
export async function updateRecipe(id, data) {
    const r = await fetch(`${BASE}/recipes/${id}`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
    return r.json();
}
export async function deleteRecipe(id) {
    const r = await fetch(`${BASE}/recipes/${id}`, { method: 'DELETE' });
    return r.json();
}
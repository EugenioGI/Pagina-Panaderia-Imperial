export function getSession() {
    const raw = sessionStorage.getItem('panaderia_session');
    if (!raw) return null;
    try { return JSON.parse(raw); } catch { return null; }
}

export function requireUser(expectedUsername) {
    const s = getSession();
    if (!s || s.username !== expectedUsername) {
        // No autorizado: limpiar sesión y volver al login
        sessionStorage.removeItem('panaderia_session');
        window.location.href = 'index.html';
    }
}

export function logout() {
    sessionStorage.removeItem('panaderia_session');
    window.location.href = 'index.html';
}
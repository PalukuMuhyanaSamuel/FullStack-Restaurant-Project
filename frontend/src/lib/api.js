const API_URL = import.meta.env.VITE_API_URL;

export async function apiGet(path) {
  const response = await fetch(`${API_URL}${path}`, {
    headers: { Accept: "application/json" },
  });
  if (!response.ok) throw new Error(`Erreur ${response.status}`);
  return response.json();
}

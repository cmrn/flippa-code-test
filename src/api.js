const API_URL = '/api/v1';

export async function getCounters() {
  const response = await fetch(`${API_URL}/counters`);
  return response.json();
}
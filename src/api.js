const API_URL = '/api/v1';

const postOptions = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  }
};

export async function getCounters() {
  const response = await fetch(`${API_URL}/counters`);
  return response.json();
}

export async function addCounter(title) {
  const options = {
    ...postOptions,
    body: JSON.stringify({
      title: title,
    }),
  }
  const response = await fetch(`${API_URL}/counter`, options);
  return response.json();
}
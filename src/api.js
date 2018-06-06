const API_URL = '/api/v1';

const baseOptions = {
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
    ...baseOptions,
    method: 'POST',
    body: JSON.stringify({
      title: title,
    }),
  }
  const response = await fetch(`${API_URL}/counter`, options);
  return response.json();
}

export async function incrementCounter(id) {
  const options = {
    ...baseOptions,
    method: 'POST',
    body: JSON.stringify({
      id: id,
    }),
  }
  const response = await fetch(`${API_URL}/counter/inc`, options);
  return response.json();
}

export async function decrementCounter(id) {
  const options = {
    ...baseOptions,
    method: 'POST',
    body: JSON.stringify({
      id: id,
    }),
  }
  const response = await fetch(`${API_URL}/counter/dec`, options);
  return response.json();
}

export async function deleteCounter(id) {
  const options = {
    ...baseOptions,
    method: 'DELETE',
    body: JSON.stringify({
      id: id,
    }),
  }
  const response = await fetch(`${API_URL}/counter`, options);
  return response.json();
}

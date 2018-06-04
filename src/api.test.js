import mockFetch from 'jest-fetch-mock';
import * as api from './api';

global.fetch = mockFetch;

afterEach(() => {
  fetch.resetMocks();
});

describe('getCounters', () => {
  it('calls the correct endpoint', async () => {
    fetch.mockResponseOnce(JSON.stringify([]));
    await api.getCounters();
    
    expect(fetch.mock.calls.length).toBe(1);
    expect(fetch.mock.calls[0][0]).toEqual('/api/v1/counters');
  });

  it('returns the data as an object', async () => {
    const data = [ { id: "asdf", title: "bob", count: 1 } ];
    fetch.mockResponseOnce(JSON.stringify(data));
    const response = await api.getCounters();
    
    expect(response).toEqual(data);
  });
});
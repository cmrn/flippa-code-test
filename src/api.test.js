import mockFetch from 'jest-fetch-mock';
import * as api from './api';

global.fetch = mockFetch;

beforeEach(() => {
  fetch.mockResponse(JSON.stringify([]));
})

afterEach(() => {
  fetch.resetMocks();
});

describe('getCounters', () => {
  const subject = api.getCounters;

  it('calls the correct endpoint', async () => {
    await subject();
    
    expect(fetch.mock.calls.length).toBe(1);
    expect(fetch.mock.calls[0][0]).toEqual('/api/v1/counters');
  });

  it('returns the data as an object', async () => {
    const data = [ { id: "asdf", title: "bob", count: 1 } ];
    fetch.mockResponseOnce(JSON.stringify(data));
    const response = await subject();
    
    expect(response).toEqual(data);
  });
});

describe('addCounter', () => {
  const title = 'foo';
  const subject = () => api.addCounter(title);

  it('calls the correct endpoint as POST', async () => {
    await subject();
    
    expect(fetch.mock.calls.length).toBe(1);
    expect(fetch.mock.calls[0][0]).toEqual('/api/v1/counter');
    expect(fetch.mock.calls[0][1]).toMatchObject({ method: 'POST' });
  });

  it('passes the counter title as JSON in the request body', async () => {
    await subject();
    expect(fetch.mock.calls[0][1]).toMatchObject({ 
      body: JSON.stringify({title: title}),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  });

  it('returns the data as an object', async () => {
    const data = [ { id: "asdf", title: "bob", count: 1 } ];
    fetch.mockResponseOnce(JSON.stringify(data));
    const response = await subject();
    
    expect(response).toEqual(data);
  });
});
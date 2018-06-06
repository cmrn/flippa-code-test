import mockFetch from 'jest-fetch-mock';
import * as api from './api';

global.fetch = mockFetch;

function itReturnsDataAsObject(subject) {
  it('returns the data as an object', async () => {
    const data = [ { id: "asdf", title: "bob", count: 1 } ];
    fetch.mockResponseOnce(JSON.stringify(data));
    const response = await subject();
    
    expect(response).toEqual(data);
  });
}

function itSendsJsonPayload(subject, payload) {
  it('sends the payload as JSON in the request body', async () => {
    await subject();
    expect(fetch.mock.calls[0][1]).toMatchObject({ 
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  });
}

function itCallsEndpoint(subject, endpoint, method) {
  it(`calls the '${endpoint}' endpoint as ${method || 'GET'}`, async () => {
    await subject();
    
    expect(fetch.mock.calls.length).toBe(1);
    expect(fetch.mock.calls[0][0]).toEqual(endpoint);
    if(method) expect(fetch.mock.calls[0][1]).toMatchObject({ method: method });
  });
}

beforeEach(() => {
  fetch.mockResponse(JSON.stringify([]));
})

afterEach(() => {
  fetch.resetMocks();
});

describe('getCounters', () => {
  const subject = api.getCounters;

  itCallsEndpoint(subject, '/api/v1/counters');
  itReturnsDataAsObject(subject);
});

describe('addCounter', () => {
  const title = 'foo';
  const subject = () => api.addCounter(title);

  itCallsEndpoint(subject, '/api/v1/counter', 'POST');
  itSendsJsonPayload(subject, {title: title});
  itReturnsDataAsObject(subject);
});

describe('incrementCounter', () => {
  const id = 'foo';
  const subject = () => api.incrementCounter(id);

  itCallsEndpoint(subject, '/api/v1/counter/inc', 'POST');
  itSendsJsonPayload(subject, {id: id});
  itReturnsDataAsObject(subject);
});

describe('decrementCounter', () => {
  const id = 'foo';
  const subject = () => api.decrementCounter(id);

  itCallsEndpoint(subject, '/api/v1/counter/dec', 'POST');
  itSendsJsonPayload(subject, {id: id});
  itReturnsDataAsObject(subject);
});

describe('deleteCounter', () => {
  const id = 'foo';
  const subject = () => api.deleteCounter(id);


  itCallsEndpoint(subject, '/api/v1/counter', 'DELETE');
  itSendsJsonPayload(subject, {id: id});
  itReturnsDataAsObject(subject);
});

const app = require('../../src/app');

describe('\'Places\' service', () => {
  it('registered the service', () => {
    const service = app.service('places');
    expect(service).toBeTruthy();
  });
});

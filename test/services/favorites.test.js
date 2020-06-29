const app = require('../../src/app');

describe('\'favorites\' service', () => {
  it('registered the service', () => {
    const service = app.service('favorites');
    expect(service).toBeTruthy();
  });
});

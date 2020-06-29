const app = require('../../src/app');

describe('\'badges\' service', () => {
  it('registered the service', () => {
    const service = app.service('badges');
    expect(service).toBeTruthy();
  });
});

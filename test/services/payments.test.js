const app = require('../../src/app');

describe('\'payments\' service', () => {
  it('registered the service', () => {
    const service = app.service('payments');
    expect(service).toBeTruthy();
  });
});

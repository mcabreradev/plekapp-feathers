const app = require('../../src/app');

describe('\'media\' service', () => {
  it('registered the service', () => {
    const service = app.service('media');
    expect(service).toBeTruthy();
  });
});

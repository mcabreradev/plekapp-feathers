const app = require('../../src/app');

describe('\'place_types\' service', () => {
  it('registered the service', () => {
    const service = app.service('place-types');
    expect(service).toBeTruthy();
  });
});

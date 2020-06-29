// Initializes the `place_types` service on path `/place-types`
const { PlaceTypes } = require('./place_types.class');
const createModel = require('../../models/place_types.model');
const hooks = require('./place_types.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/place-types', new PlaceTypes(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('place-types');

  service.hooks(hooks);
};

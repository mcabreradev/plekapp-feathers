const places = require('./places/places.service.js');
const roles = require('./roles/roles.service.js');
const collections = require('./collections/collections.service.js');
const countries = require('./countries/countries.service.js');
const types = require('./types/types.service.js');
const placeTypes = require('./place_types/place_types.service.js');
const favorites = require('./favorites/favorites.service.js');
const payments = require('./payments/payments.service.js');
const reviews = require('./reviews/reviews.service.js');
const media = require('./media/media.service.js');
const badges = require('./badges/badges.service.js');
const expense = require('./expense/expense.service.js');
const users = require('./users/users.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(places);
  app.configure(roles);
  app.configure(collections);
  app.configure(countries);
  app.configure(types);
  app.configure(placeTypes);
  app.configure(favorites);
  app.configure(payments);
  app.configure(reviews);
  app.configure(media);
  app.configure(badges);
  app.configure(expense);
  app.configure(users);
};

var PaginatedCollection = require('./paginated_collection');

module.exports = PaginatedCollection.extend({
  url: '/places/:location',
  jsonKey: 'places',
});

module.exports.id = 'Places';

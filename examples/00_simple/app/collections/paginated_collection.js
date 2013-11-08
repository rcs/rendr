var Collection = require('./base');

module.exports = Collection.extend({
  currentPage: 1,
  perPage: 100,

  totalPages: function() {
    return Math.round((this.count() + this.perPage - 1) / this.perPage);
  },

  hasMore: function() {
    return this.currentPage < this.totalPages();
  },

  nextPage: function() {
    var spec = {};
    this.params.offset = this.currentPage * this.perPage;
    spec[this.jsonKey] = { collection: this.jsonKey, params: this.params };

    this.app.fetch(spec, function(err, results) {
      this.add(results[this.jsonKey].models);
      this.currentPage += 1;
    }.bind(this));
  }
});

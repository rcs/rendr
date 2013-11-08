module.exports = {
  index: function(params, callback) {
    var spec = {
      collection: {collection: 'Places', params: {location: 'Rio'}}
    };
    this.app.fetch(spec, function(err, result) {
      callback(err, result);
    });
  }
};

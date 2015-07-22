$(document).ready(function(){
  var App = function() {
    var self = this;
    self.api = new API();
    self.presenter = new Presenter();
    self.view = new viewModel(self);

    self.init = function() {
      var rawData = self.api.getAll();
      var data = self.presenter.formatData(rawData);
      self.view.init(data);
    };

    self.sendAction = function(action) {
      console.log(action);
    };

  };

  var app = new App();
  app.init();
  ko.applyBindings(app.view);
});

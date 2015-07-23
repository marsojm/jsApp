$(document).ready(function(){
  var App = function() {
    var self = this;
    self.api = new API();
    self.presenter = new Presenter();
    self.view = new ViewModel(self);

    self.init = function() {
      var rawData = self.api.getAll();
      var data = {};
      data.items = self.presenter.formatData(rawData);
      data.errors = [];
      self.view.init(data);
    };

    self.sendAction = function(action) {

      switch (action.action) {
        case 'REMOVE':
          var result = self.api.remove(action.params.id);
          var rawData = self.api.getAll();
          var data = {};
          data.items = self.presenter.formatData(rawData);
          data.errors = [];
          if (!result.success) {
            data.errors.push(result.msg);
          }
          self.view.render(data);
          console.log("remove");
          break;
        case 'CREATE':
          console.log("create");
          break;
        case 'UPDATE':
          console.log('update');
          break;
        default:
          console.log('unknown action');

      }
    };

  };

  var app = new App();
  app.init();
  ko.applyBindings(app.view);
});

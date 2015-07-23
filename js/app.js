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
          data.isSuccess = false;
          self.view.render(data);

          break;
        case 'CREATE':
          console.log("create");
          break;
        case 'UPDATE':
          var data = action.params.data;
          var d = {};
          d.id = data.id;
          d.name = data.name;
          d.age = data.age;
          d.salary = data.salary;
          var result = self.api.update(d);

          var rawData = self.api.getAll();
          var data = {};
          data.items = self.presenter.formatData(rawData);
          data.errors = [];
          data.isSuccess = true;
          if (!result.success) {
            data.errors.push(result.msg);
            data.isSuccess = false;
          }
          self.view.render(data);

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

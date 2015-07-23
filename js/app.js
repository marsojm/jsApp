$(document).ready(function(){
  var App = function() {
    var self = this;
    self.api = new API();
    self.presenter = new Presenter(self);


    self.init = function() {
      var data = {
                  items: self.api.getAll(),
                  errors: [],
                  isSuccess: false,
                  };
      self.presenter.render(data);
    };

    self.handleAction = function(action) {

      switch (action.action) {
        case 'REMOVE':
          var result = self.api.remove(action.params.id);
          var data = {};
          data.items = self.api.getAll();
          data.errors = [];

          if (!result.success) {
            data.errors.push(result.msg);
          }
          data.isSuccess = false;
          self.presenter.render(data);

          break;
        case 'CREATE':
          console.log("create");
          break;
        case 'UPDATE':
          var result = self.api.update(action.params.data);

          var data = {};
          data.items = self.api.getAll();
          data.errors = [];
          data.isSuccess = true;
          if (!result.success) {
            data.errors.push(result.msg);
            data.isSuccess = false;
          }
          self.presenter.render(data);

          break;
        default:
          console.log('unknown action');

      }
    };

  };

  var app = new App();
  app.init();
  ko.applyBindings(app.presenter.viewModel);
});

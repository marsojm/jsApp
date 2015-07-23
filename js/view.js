var ViewModel = function(actionHandler) {
  var self = this;
  self.persons = ko.observableArray();
  self.errors = ko.observableArray();
  self.handler = actionHandler;
  self.toEdit = ko.observable(null);
  self.isSuccess = ko.observable(false);

  self.render = function(data) {
    self.persons.removeAll();
    for(var i=0; i < data.items.length; i++) {
      self.persons.push(data.items[i]);
    }
    self.errors.removeAll();

    for(var i=0; i < data.errors.length; i++) {
      self.errors.push(data.errors[i]);
    }
    self.isSuccess(data.isSuccess);
  };

  self.remove = function(data) {
    self.handler.sendAction({action:'REMOVE',params: {id: data.id}});
  };

  self.update = function(data) {
    self.handler.sendAction({action:'UPDATE',params: {data: data}});
  };

  self.initializeEdit = function(data) {
    var d = {};
    d.id = data.id;
    d.name = data.name;
    d.age = data.age;
    d.salary = data.salary;
    self.toEdit(d);
  };
};

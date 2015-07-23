var ViewModel = function(actionHandler) {
  var self = this;
  self.persons = ko.observableArray();
  self.errors = ko.observableArray();
  self.handler = actionHandler;

  self.init = function(data) {
    for(var i=0; i < data.items.length; i++) {
      self.persons.push(data.items[i]);
    }
  };

  self.render = function(data) {
    self.persons.removeAll();
    for(var i=0; i < data.items.length; i++) {
      self.persons.push(data.items[i]);
    }
    self.errors.removeAll();
    for(var i=0; i < data.errors.length; i++) {
      self.errors.push(data.errors[i]);
    }
  };

  self.remove = function(data) {
    self.handler.sendAction({action:'REMOVE',params: {id: data.id}});
  };
};

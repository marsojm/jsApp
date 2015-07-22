var viewModel = function(actionHandler) {
  var self = this;
  self.persons = ko.observableArray();
  self.handler = actionHandler;

  self.init = function(data) {
    for(var i=0; i < data.length; i++) {
      self.persons.push(data[i]);
    }
  };

  self.render = function(data) {
    self.persons.removeAll();
    for(var i=0; i < data.length; i++) {
      self.persons.push(data[i]);
    }
  };

  self.remove = function(data) {
    self.handler.sendAction({action:'REMOVE',params: {id: data.id}});
  };
};

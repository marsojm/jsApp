var Presenter = function(handler) {
  var self = this;
  //self.viewModel = new ViewModel(self);
  self.handler = handler;

  self.vmo = {items:[],errors:[],isSuccess:false};
  self.load = function(dto) {

    var result = {items:[],errors:[],isSuccess:false};

    for(var i=0; i < dto.items.length; i++) {
      result.items.push(new VMO(dto.items[i]));
    }
    for(var i=0; i < dto.errors.length; i++) {
      result.errors.push(dto.errors[i]);
    }
    if (dto.hasOwnProperty('isSuccess')) {
      result.isSuccess = dto.isSuccess;
    }

    self.vmo = result;
  };

  self.getVMO = function() {
    return self.vmo;
  };

  self.sendAction = function(action) {
    switch (action.action) {
      case 'REMOVE':
        self.handler.handleAction(action);
        break;
      case 'UPDATE':
        var data = action.params.data;
        var d = {};
        d.id = data.id;
        d.name = data.name;
        d.age = data.age;
        d.salary = data.salary;
        action.params.data = d;
        self.handler.handleAction(action);
        break;
      default:
        console.log('unknown action');
    }
  };

};

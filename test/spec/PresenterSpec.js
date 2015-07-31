var Error = function(msg) {
  this.msg = msg;
};

describe("Presenter", function(){
  var self = this;
  var presenter;
  var data;
  var receivedAction;
  self.handleAction = function(action) {
    receivedAction = action;
  };

  beforeEach(function() {
    presenter = new Presenter(self);
    data = {items: [{id:1,name:"Joe", age:23, salary:3000},
                    {id:2,name:"Jim", age:33, salary:5000},
                    {id:3,name:"Mike", age:28, salary:3300},
                    {id:4,name:"Bruno", age:27, salary:4100}],
            errors:[],
            isSuccess: false,
    };
    receivedAction = null;
  });

  describe("when data has been loaded", function() {
    it("should have right number of persons", function() {
      var expected = 4;
      presenter.load(data);
      var vmo = presenter.getVMO();
      expect(vmo.items.length).toEqual(expected);
    });
  });

  describe("when delete action is performed", function() {
    beforeEach(function() {
      presenter.load(data);
    });

    it("the REMOVE action should be called with right parameters", function() {
      presenter.sendAction({action:'REMOVE',params: {id: 3}});
      expect(receivedAction.action).toEqual('REMOVE');
      expect(receivedAction.params.id).toEqual(3);
    });
  });

  describe("when update action is performed", function() {
    beforeEach(function() {
      presenter.load(data);
    });

    it("the Update action should be called with right parameters", function() {
      presenter.sendAction({action:'UPDATE',params: {data:{id:1,name:"Joe", age:55, salary:300}}});
      expect(receivedAction.action).toEqual('UPDATE');
      expect(receivedAction.params.data.id).toEqual(1);
      expect(receivedAction.params.data.name).toEqual("Joe");
      expect(receivedAction.params.data.age).toEqual(55);
      expect(receivedAction.params.data.salary).toEqual(300);
    });
  });
});

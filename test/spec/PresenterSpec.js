describe("Presenter", function(){
  var self = this;
  var presenter;
  var data;

  beforeEach(function() {
    presenter = new Presenter(self);
    data = {items: [{id:1,name:"Joe", age:23, salary:3000},
                    {id:2,name:"Jim", age:33, salary:5000},
                    {id:3,name:"Mike", age:28, salary:3300},
                    {id:4,name:"Bruno", age:27, salary:4100}],
            errors:[],
            isSuccess: false,
    };
  });

  describe("when data has been loaded", function() {
    it("should have right number of persons", function() {
      var expected = 4;
      presenter.load(data);
      console.log(presenter);
      var vmo = presenter.getVMO();
      expect(vmo.items.length).toEqual(expected);
    });
  });

});

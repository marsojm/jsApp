var Presenter = function() {
  var self = this;

  self.format = function(item) {
    item.salaryTitle = item.salary <= 3000 ? "poor" : "rich";
    item.salaryColor = item.salary <= 3000 ? "yellow" : "green";

    item.experience = item.age < 25 ? "young gun" : "professional";
    item.experienceBold = item.age >= 25;
    return item;
  };

  self.formatData = function(data) {
    var result = [];
    for(var i=0; i < data.length; i++) {
      var item = self.format(data[i]);
      result.push(item);
    }
    return result;
  }
};

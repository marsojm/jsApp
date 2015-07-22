var db = [
  {id:1,name:"Joe", age:23, salary:3000},
  {id:2,name:"Jim", age:33, salary:5000},
  {id:3,name:"Mike", age:28, salary:3300},
  {id:4,name:"Bruno", age:27, salary:4100}];

var API = function() {
  var self = this;
  self.validate = function(data) {
      if (!data.hasOwnProperty("name")) {

      }
      if (!data.hasOwnProperty("age")) {

      }
      if (!data.hasOwnProperty("name")) {

      }

      return true;
  };

  self.getAll = function() {
    return db;
  };

  self.save = function(data) {
    var isValid = self.validate(data);
    if (isValid) {
      var id = db[db.length - 1].id + 1;
      data.id = id;
      db.push(data);
      console.log(db);
      return id;
    }
    return -1; // return invalid id
  };
};

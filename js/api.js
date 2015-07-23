var db = [
  {id:1,name:"Joe", age:23, salary:3000},
  {id:2,name:"Jim", age:33, salary:5000},
  {id:3,name:"Mike", age:28, salary:3300},
  {id:4,name:"Bruno", age:27, salary:4100}];

var API = function() {
  var self = this;


  self.update = function(data) {
    if (data.name === "") return { success:false, msg: "Name is required" };
    if (data.age < 1 ) return { success:false, msg: "Age must be a positive integer" };
    if (data.salary < 1 ) return { success:false, msg: "Salary must be a positive integer" };

    for (idx in db) {
      if (db[idx].id === data.id) {
        db[idx] = data;
        return { success:true, msg: "Successfully updated", id:data.id };
      }
    }

    return { success:false, msg: "Did not find item with id " + data.id };
  };

  self.getAll = function() {
    return db;
  };

  self.remove = function(id) {
    for (idx in db) {
      if (db[idx].id === id) {
        db.splice(idx,1);
        return { success:true, msg: "" };
      }
    }

    return { success:false, msg: "No item was found with id " + id }
  };

};

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

  self.update = function(data) {
    for (idx in db) {
      if (db[idx].id === data.id) {
        db[idx] = data;
        return { success:true, msg: "" };
      }
    }

    return { success:false, msg: "Successfully updated", id:data.id };
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
    console.log(db);
    return { success:false, msg: "No item was found with id " + id }
  };

  self.save = function(data) {
    var isValid = self.validate(data);
    if (isValid) {
      var id = db[db.length - 1].id + 1;
      data.id = id;
      db.push(data);
      console.log(db);
      return {success:true, msg:"", id:id};
    }
    return {success:false, msg:"Unable to save the item.", id:-1};; // return invalid id
  };
};

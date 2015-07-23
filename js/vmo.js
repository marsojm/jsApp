var VMO = function(data) {
  this.id = data.id;
  this.name = data.name;
  this.age = data.age;
  this.salary = data.salary;
  this.salaryColor = data.salary <= 3000 ? "yellow" : "green";
  this.salaryTitle = data.salary <= 3000 ? "poor" : "rich";
  this.experience = data.age < 25 ? "young gun" : "professional";
  this.experienceBold = data.age >= 25;
};

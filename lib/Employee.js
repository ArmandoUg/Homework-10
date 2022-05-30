class Employee {
  // TODO - Write Employee class so it satisfies the test cases when running `npm run test`
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  } // constructor()

  getName() {
    return this.name;
  } // getName()

  getId() {
    return this.id;
  } // getId()

  getEmail() {
    return this.email;
  } // getEmail()

  getRole() {
    return "Employee";
  } // getRole()
}

module.exports = Employee;

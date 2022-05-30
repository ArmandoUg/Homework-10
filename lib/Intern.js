const Employee = require("./Employee");

class Intern extends Employee {
  // TODO - Write Intern class so it satisfies the test cases when running `npm run test`
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
    // } // constructor() for intern
  }

  getRole() {
    return "Intern";
  } // getRole()

  getSchool() {
    return this.school;} // getSchool()

}

module.exports = Intern;

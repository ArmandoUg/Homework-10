const Employee = require("./Employee");

class Engineer extends Employee {
  // TODO - Write Engineer class so it satisfies the test cases when running `npm run test`
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;} // constructor() for engineer

    getRole() {
      return "Engineer";} // getRole()

    getGithub() {
      return this.github;} // getGithub()

    }

module.exports = Engineer;

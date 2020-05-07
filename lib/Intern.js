// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

// The other three classes will extend Employee.

// In addition to Employee's properties and methods, Intern will also have:

// school

// getSchool()

// getRole() // Overridden to return 'Intern'


// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {

        super(name, id, email);
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole(){
        return "Intern";
    }
}
module.exports = Intern;
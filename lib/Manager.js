
// The other three classes will extend Employee.
// In addition to Employee's properties and methods, Manager will also have:


// officeNumber


// getRole() // Overridden to return 'Manager'

//module.exports = Manager;

//!!Needs office number too in getOfficeNumber()!!

// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {

        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }    

    getRole(){
        return "Manager";
    }
}
module.exports = Manager;
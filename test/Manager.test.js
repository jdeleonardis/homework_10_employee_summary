const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Can set office number via constructor argument", () => {
  const testValue = 100;
  const e = new Manager("Foo", 1, "test@test.com", testValue);
  expect(e.officeNumber).toBe(testValue);
});

test('getRole() should return "Manager"', () => {
  const testValue = "Manager";
  const e = new Manager("Foo", 1, "test@test.com", 100);
  expect(e.getRole()).toBe(testValue);
});

test("Can get office number via getOffice()", () => {
  const testValue = 100;
  const e = new Manager("Foo", 1, "test@test.com", testValue);
  expect(e.getOfficeNumber()).toBe(testValue);
});

describe("Manager", () => {
    describe("Initialization", () => {
      it("should create an object with name, id, email, office number when provided with arguments", () => {
        const manager = new Manager("Mike Johnson", 123, "mjohnson@hotmail.com",1234);
        expect(manager.name).toEqual("Mike Johnson");
        expect(manager.id).toEqual(123);
        expect(manager.email).toEqual("mjohnson@hotmail.com");
        expect(manager.officeNumber).toEqual(1234);  
      });  
    });
  });
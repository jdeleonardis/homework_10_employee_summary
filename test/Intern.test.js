const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
  const testValue = "UCLA";
  const e = new Intern("Foo", 1, "test@test.com", testValue);
  expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("Foo", 1, "test@test.com", "UCLA");
  expect(e.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "UCLA";
  const e = new Intern("Foo", 1, "test@test.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});

describe("Intern", () => {
    describe("Initialization", () => {
      it("should create an object with name, id, email, school when provided with arguments", () => {
        const intern = new Intern("Mike Johnson", 123, "mjohnson@hotmail.com","USCL");
        expect(intern.name).toEqual("Mike Johnson");
        expect(intern.id).toEqual(123);
        expect(intern.email).toEqual("mjohnson@hotmail.com");
        expect(intern.school).toEqual("USCL");  
      });  
    });
  });
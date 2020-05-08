const Engineer = require("../lib/Engineer");

test("Can set GitHUb account via constructor", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Foo", 1, "test@test.com", testValue);
  expect(e.github).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {
  const testValue = "Engineer";
  const e = new Engineer("Foo", 1, "test@test.com", "GitHubUser");
  expect(e.getRole()).toBe(testValue);
});

test("Can get GitHub username via getGithub()", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Foo", 1, "test@test.com", testValue);
  expect(e.getGithub()).toBe(testValue);
});


describe("Engineer", () => {
    describe("Initialization", () => {
      it("should create an object with name, id, email, github when provided with arguments", () => {
        const engineer = new Engineer("Mike Johnson", 123, "mjohnson@hotmail.com","mjohnson");
        expect(engineer.name).toEqual("Mike Johnson");
        expect(engineer.id).toEqual(123);
        expect(engineer.email).toEqual("mjohnson@hotmail.com");
        expect(engineer.github).toEqual("mjohnson");  
      });  
    });
  });
  

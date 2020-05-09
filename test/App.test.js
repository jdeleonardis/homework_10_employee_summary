const App = require("../App");
const fs = require("fs")

jest.mock("fs");

describe("App", () => {
      describe("fsWriteFile", () => {
        it("should call fs.writeFile with the passed in arguments", () => {
            const data = "Testing file write!";
            fs.writeFile(data);

            expect(fs.writeFile).lastCalledWith(data);
        });
      });
});
const { fizzBuzz } = require("../exercise1");

describe("fizzBuzz", () => {
  it("should throw an exception if input is not number", () => {
    const args = ["a", undefined, true, null, {}];
    args.forEach(arg => {
      expect(() => {
        fizzBuzz(arg);
      }).toThrow();
    });
  });

  it("should return FizzBuzz if input is devisible by 3 and 5", () => {
    const result = fizzBuzz(15);
    expect(result).toBe("FizzBuzz");
  });

  it("should return Fizz if input is only devisible by 3", () => {
    const numbers = [3, 6, 9, 12];
    numbers.forEach(number => expect(fizzBuzz(number)).toBe("Fizz"));
  });

  it("should return Buzz if input is only devisible by 5", () => {
    const numbers = [5, 10, 20];
    numbers.forEach(number => expect(fizzBuzz(number)).toBe("Buzz"));
  });

  it("should return number if input can not devisible by 3 or 5", () => {
    const numbers = [1, 2, 4, 7, 8, 11, 13, 14, 16];
    numbers.forEach(number => expect(fizzBuzz(number)).toBe(number));
  });
});

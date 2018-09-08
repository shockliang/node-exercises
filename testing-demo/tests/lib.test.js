const lib = require("../lib");
const db = require("../db");

describe("absolute", () => {
  it("should return a positive number if input is positive", () => {
    const result = lib.absolute(1);
    expect(result).toBe(1);
  });

  it("should return a positive number if input is negative", () => {
    const result = lib.absolute(-1);
    expect(result).toBe(1);
  });

  it("should return 0 if input is 0", () => {
    const result = lib.absolute(-1);
    expect(result).toBe(1);
  });
});

describe("greet", () => {
  it("should return the greeting message", () => {
    const result = lib.greet("shock");
    // expect(result).toMatch(/shock/); regex match
    expect(result).toContain("shock");
  });
});

describe("getCurrencies", () => {
  it("should return supported currencies", () => {
    const result = lib.getCurrencies();

    expect(result).toEqual(expect.arrayContaining(["EUR", "USD", "AUD"]));
  });
});

describe("getProduct", () => {
  it("should return the product with given id", () => {
    const result = lib.getProduct(1);

    // Must be match id and price totally.
    expect(result).toEqual({ id: 1, price: 10 });
    // Contains id and price.
    expect(result).toMatchObject({ id: 1, price: 10 });
    // The value type should be same as origin.
    expect(result).toHaveProperty("id", 1);
  });
});

describe("registerUser", () => {
  it("should throw if username is falsy", () => {
    const args = [null, undefined, NaN, "", 0, false];
    args.forEach(arg => {
      expect(() => {
        lib.registerUser(arg);
      }).toThrow();
    });
  });

  it("should return a user object if valid username is passed", () => {
    const result = lib.registerUser("shock");
    expect(result).toMatchObject({ username: "shock" });
    expect(result.id).toBeGreaterThan(0);
  });
});

describe("applyDiscount", () => {
  it("it should apply discount 10% if customer has more than 10 points", () => {
    db.getCustomerSync = function(customerId) {
      console.log("Faking reading customer.");
      return { id: customerId, points: 20 };
    };
    const order = { customerId: 1, totalPrice: 10 };
    lib.applyDiscount(order);
    expect(order.totalPrice).toBe(9);
  });
});

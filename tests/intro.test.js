import { describe, expect, it } from "vitest";
import { calculateAverage, factorial, fizzBuzz, max } from "../src/intro";

// Code first
describe("max", () => {
  it("should return the first argument if it is greater", () => {
    // AAA - Arrange, Act, Assert
    // Arrange - setup the test environment including any data and necessary test configurations - Turn on the TV
    const a = 2;
    const b = 1;

    // Act - we perform the action we want to test - Press the TV power button
    const result = max(a, b);

    // Assert - we check the outcome to ensure that it matches our expectations - Verify that the TV is ON
    expect(result).toBe(2);

    // --- single line of test
    // expect(max(2, 1)).toBe(2);
  });

  it("should return the second argument if it is greater", () => {
    expect(max(1, 2)).toBe(2);
  });

  it("should return the first argument if arguments are equal", () => {
    expect(max(1, 2)).toBe(2);
  });
});

describe("fizzBuzz", () => {
  it("should return fizzBuzz if argument is divisible by 3 and 5", () => {
    const n = 15;

    const result = fizzBuzz(n);

    expect(result).toBe("FizzBuzz");
  });

  it("should return fizz if argument is only divisible by 3", () => {
    expect(fizzBuzz(9)).toBe("Fizz");
  });

  it("should return Buzz if argument is only divisible by 5", () => {
    expect(fizzBuzz(20)).toBe("Buzz");
  });

  it("should return argument as a string if it is not divisible by 3 or 5", () => {
    expect(fizzBuzz(1)).toBe("1");
  });
});

// Test first - TDD - started by writing the test first then produced the function
describe("calculateAverage", () => {
  it("should return NaN if given an empty array", () => {
    expect(calculateAverage([])).toBe(NaN);
  });

  it("should calculate the average of an array with a single element", () => {
    expect(calculateAverage([1])).toBe(1);
  });

  it("should calculate the average of an array with two elements", () => {
    expect(calculateAverage([1, 2])).toBe(1.5);
  });

  it("should calculate the average of an array with three elements", () => {
    expect(calculateAverage([1, 2, 3])).toBe(2);
  });
});

// 0! = 1
// 1! = 1
// 2! = 2 x 1
// 3! = 3 x 2 x 1
// 4! = 4 x 3 x 2 x 1
// -1 = undefined
describe("factorial", () => {
  it("should return 1 if given 0", () => {
    expect(factorial(0)).toBe(1);
  });

  it("should return 1 if given 1", () => {
    expect(factorial(1)).toBe(1);
  });

  it("should return 2 if given 2", () => {
    expect(factorial(2)).toBe(2);
  });

  it("should return 6 if given 3", () => {
    expect(factorial(3)).toBe(6);
  });

  it("should return 24 if given 4", () => {
    expect(factorial(4)).toBe(24);
  });

  it("should return undefined if given a negative number", () => {
    // expect(factorial(-1)).toBe(undefined);
    expect(factorial(-1)).toBeUndefined();
  });
});

const findLetters = require("../challenge3");

test("Debería regresar ['m', 'n', 'p', 'l', 'y']", () => {
    expect(findLetters("monopoly")).toEqual(["m", "n", "p", "l", "y"]);
});

test("Debería regresar ['b', 'a', 'n']", () => {
    expect(findLetters("balloon")).toEqual(["b", "a", "n"]);
});

test("Debería regresar ['n', 'l', 'y', 'i']", () => {
    expect(findLetters("analysis")).toEqual(["n", "l", "y", "i"]);
});

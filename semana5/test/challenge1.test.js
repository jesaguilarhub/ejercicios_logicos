const removeDups = require("../challenge1");

test("Probando eliminar duplicados de ['Google', 'Facebook', 'Amazon', 'Facebook', 'Paypal']", () => {
    const arr1 = ['Google', 'Facebook', 'Amazon', 'Facebook', 'Paypal'];
    const outputArr1 = ['Google', 'Facebook', 'Amazon', 'Paypal'];
    expect(removeDups(arr1)).toEqual(outputArr1);
});

test("Probando eliminar duplicados de ['a', 'b', 'a', 'c', 'b']", () => {
    const arr2 = ['a', 'b', 'a', 'c', 'b'];
    const outputArr2 = ['a', 'b', 'c' ];
    expect(removeDups(arr2)).toEqual(outputArr2);
});

test("Probando eliminar duplicados de [10, 5, 2, 5, 1, 2, 9]", () => {
    const arr3 = [10, 5, 2, 5, 1, 2, 9];
    const outputArr3 = [10, 5, 2, 1, 9];
    expect(removeDups(arr3)).toEqual(outputArr3);
});
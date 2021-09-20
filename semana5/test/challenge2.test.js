const plantTrees = require("../challenge2");

test("Debería de regresar 12 arboles plantados con los parametros w=4, l=4, g=0", () => {
    const w = 4;
    const l = 4;
    const g = 0;
    expect(plantTrees(w,l,g)).toBe(12);
});

test("Debería de regresar 6 arboles plantados con los parametros w=4, l=4, g=1", () => {
    const w = 4;
    const l = 4;
    const g = 1;
    expect(plantTrees(w,l,g)).toBe(6);
});

test("Debería de regresar 0 arboles plantados con los parametros w=4, l=4, g=3", () => {
    const w = 4;
    const l = 4;
    const g = 3;
    expect(plantTrees(w,l,g)).toBe(0);
});

test("Debería de regresar 4 arboles plantados con los parametros w=3, l=3, g=1", () => {
    const w = 3;
    const l = 3;
    const g = 1;
    expect(plantTrees(w,l,g)).toBe(4);
});
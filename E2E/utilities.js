


function expectationsToBe(a, b) {
    expect(a).toBe(b);
};

function expectationsNotToBe(a, b) {
    expect(a).not.toBe(b);
};

exports.util = {
    toBe: expectationsToBe,
    notToBe: expectationsNotToBe
};
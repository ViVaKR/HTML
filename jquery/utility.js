
/**
 * Add two numbers
 * @param {number} a
 * @param {number} b
 * @returns {number}
 * @example
 * add(1, 2) // 3
*/
function add(a, b) {
    return a + b;
}

/**
 * Subtract two numbers
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function subtract(a, b) {
    return a - b;
}

/**
 * Multiply two numbers
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function multiply(a, b) {
    return a * b;
}

/**
 * Divide two numbers
 * @param {number} a
 * @param {number} b
 * @returns {number}
 * @throws {Error} Division by zero
 */
function divide(a, b) {
    if (b === 0) {
        throw new Error('Division by zero');
    }
    return a / b;
}

export { add, subtract, multiply, divide }; // 여러개의 값을 내보낼 때 사용

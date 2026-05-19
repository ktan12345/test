/**
 * Main entry point for the application.
 */

function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet('World'));

module.exports = { greet };

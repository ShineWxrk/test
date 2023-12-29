function generateExpression() {
  const digits = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
  const operators = ['+', '-'];

  let expression = '';

  for (let i = 0; i < digits.length - 1; i++) {
      expression += digits[i];

      if (Math.random() < 0.5) {
          expression += operators[Math.floor(Math.random() * operators.length)];
      }
  }

  expression += digits[digits.length - 1];

  return expression;
}

function calculateExpression(expression) {
  const operators = expression.match(/[\+\-]/g) || [];
  const operands = expression.split(/[\+\-]/).map(Number);

  let result = operands[0];

  for (let i = 0; i < operators.length; i++) {
      const operator = operators[i];
      const operand = operands[i + 1];

      if (operator === '+') {
          result += operand;
      } else if (operator === '-') {
          result -= operand;
      }
  }

  return result;
}

let result;
let expression;

do {
  expression = generateExpression();
  result = calculateExpression(expression);
} while (result !== 200);

console.log(`${expression} = ${result}`);
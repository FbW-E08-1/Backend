function parseNumberArgs(arg) {
  const number = parseFloat(arg);
  if (isNaN(number)) {
    console.log(
      `Sorry, the argument "${arg}" is not a number, please try again`,
    );
    process.exit();
  }

  return number;
}

function sum(numArray) {
  return numArray.reduce((sum, n) => sum + n, 0);
}

function average(numArray) {
  return sum(numArray) / numArray.length;
}

function median(numArray) {
  const sorted = numArray.slice();
  const middle = (numArray.length - 1) / 2;
  if (middle !== 0) {
    return (sorted[Math.floor(middle)] + sorted[Math.ceil(middle)]) / 2;
  }

  return sorted[middle];
}

const args = process.argv.slice(2);
const [operation, ...rest] = args;
const numbers = rest.map(parseNumberArgs);

switch (operation) {
  case "sum":
    console.log(sum(numbers));
    break;
  case "avg":
    console.log(average(numbers));
    break;
  case "med":
    console.log(median(numbers));
    break;
  default:
    console.log(
      'I cannot calculate that, please type either "sum" (to calculate the sum) or "avg" (To calculate the Average)',
    );
}

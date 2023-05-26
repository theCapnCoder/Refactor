function calculateAverageExample(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum / numbers.length;
}

// Refactor extract Function

function calculateAverage(numbers) {
  const sum = sumArray(numbers)
  return sum / numbers.length;
}

function sumArray(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  return sum;
}


function isPrimeTest(number) {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

// Refactor Extract Function

function isPrime(number) {
  if (number <= 1) {
    return false;
  }
  
  if(isDivisibleByAny(number, 2, number - 1)) {
    return false;
  }

  return true;
}

function isDivisibleByAny(number, start, end) {
  for (let i = start; i < end; i++) {
    if (number % i === 0) {
      return true;
    }
  }

  return false;
}

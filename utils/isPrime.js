// Utility function to check if a number is prime
function isPrime(n) {
  // Return false for non-integer or less than 2
  if (typeof n !== 'number' || !Number.isInteger(n)) return false;
  if (n < 2) return false;

  // Check divisibility up to the square root of n
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false; // If divisible, not a prime
  }

  return true; // Passed all checks, it's a prime
}

export default isPrime;

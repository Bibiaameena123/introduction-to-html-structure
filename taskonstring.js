function analyzeString(input) {
  // Normalize the string for case-insensitive operations
  const lowerCaseInput = input.toLowerCase();

  return {
    length: input.length,
    lowercase: input.toLowerCase(),
    uppercase: input.toUpperCase(),
    containsJavaScript: lowerCaseInput.includes('javascript'),
    countLetterA: (lowerCaseInput.match(/a/g) || []).length
  };
}

// Example usage
const result = analyzeString("JavaScript is Amazing!");
console.log(result);

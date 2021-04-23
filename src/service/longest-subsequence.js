/**
 * This function that takes one string input of any number of integers separated by single whitespace.
 * Returns the longest increasing subsequence (increased by any number) present in that sequence.
 *
 * @param {string} input
 * @returns {string} Longest Subsequence
 */
const longestSubsequence = (input) => {
  const numberArray = input.split(" ").map(Number);
  let longestLength, resultIndex, tempIndex;
  longestLength = resultIndex = tempIndex = 0;
  for (let i = 0; i < numberArray.length; i++) {
    if (i > 0 && numberArray[i - 1] >= numberArray[i]) {
      tempIndex = i;
    }
    if (longestLength < i - tempIndex + 1) {
      longestLength = i - tempIndex + 1;
      resultIndex = i;
    }
  }
  return numberArray
    .slice(resultIndex - longestLength + 1, resultIndex + 1)
    .join(" ");
};
module.exports = longestSubsequence;

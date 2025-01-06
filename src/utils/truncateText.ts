/**
 * Truncates a string to the specified number of characters.
 * If the string is longer than the specified length, it will add '...' at the end.
 *
 * @param str - The string to truncate.
 * @param num - The number of characters to keep.
 * @returns The truncated string.
 */
export default function truncateString(str: string, num: number): string {
  // Check if the string length is less than or equal to the specified number of characters
  if (str.length <= num) {
    return str;
  }

  // Otherwise, truncate the string and append '...'
  return str.slice(0, num) + "...";
}

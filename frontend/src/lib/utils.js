/**
 * Formats a Date object into a string with the format "MMM DD, YYYY" (e.g., "Jun 10, 2024").
 *
 * @param {Date} date - The date to format.
 * @returns {string} The formatted date string.
 */
export function formatDate(date) {
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

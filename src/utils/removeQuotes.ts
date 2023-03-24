/**
 * @author Lakkanna Walikar
 * @description remove quotes
 */
import trim from "lodash.trim";

/**
 * function to remove quotes from string
 * @param {string} value - A value to get remove quotes
 * @returns {string} string value removed quotes and whitespaces
 */
const removeQuotesFromString = (value: string): string => {
  // Issue: https://github.com/Lakkanna/css-converter/issues/21 and https://github.com/Lakkanna/css-converter/issues/22
  // This is fixed now
  const withoutWhiteSpace = trim(value);
  return withoutWhiteSpace.replace(/["']/g, "");
};

export default removeQuotesFromString;

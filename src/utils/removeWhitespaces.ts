/**
 * @author Lakkanna Walikar
 * @description remove whitespaces from string
 */

/**
 * function to remove whitespaces from string
 * @param {string} value - A string to get remove whitespaces
 * @returns {string} whitespaces removed string
 */
const removeWhiteSpace = (value: string): string => {
  return value.replace(/\s/g, '');
};

export default removeWhiteSpace

/**
 * @author Lakkanna Walikar
 * @description remove quotes
 */

 import removeWhitespaces from './removeWhitespaces';

 /**
  * function to remove quotes from string
  * @param {string} value - A value to get remove quotes
  * @returns {string} string value removed quotes and whitespaces
  */
 const removeQuotesFromString = (value: string): string => {
   const withoutWhiteSpace = removeWhitespaces(value);
   return withoutWhiteSpace.replace(/["']/g, '')
};

export default removeQuotesFromString;

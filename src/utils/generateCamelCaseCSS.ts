/**
 * @author Lakkanna Walikar
 * @description camel case css generator
 */

import isEmpty from "lodash.isempty";
import camelCase from "lodash.camelcase";
import removeQuotes from "./removeQuotes";

/**
 * function to kebab case css into camel case css
 * @param {string[]}    lines   Array of strings to get converted into camelCase css
 * @returns {string[]}          converted camel case css
 */
const generateCamelCaseCSS = (lines: string[]): string[] => {
  let returnLines: string[] = [];
  if (Array.isArray(lines)) {
    lines.forEach((line) => {
      if (!isEmpty(line) && typeof line === "string") {
        let [key, value] = line.split(":");
        let propertyValue: unknown = removeQuotes(value);
        propertyValue = isNaN(propertyValue as number)
          ? `"${propertyValue}"`
          : propertyValue;
        const newLine = `${camelCase(key.trim())}: ${propertyValue},`;
        returnLines.push(newLine);
      }
    });
    return returnLines;
  }
  return [""];
};

export default generateCamelCaseCSS;

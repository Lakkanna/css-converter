/**
 * @author Lakkanna Walikar
 * @description camel case css generator
 */

import { isEmpty, includes, startsWith, trim, camelCase } from "lodash";

import { removeQuotesFromString } from "./removeQuotes";
import { convertWebkitPrefixedKey } from "./convertWebkitPrefixedKey";

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
        // issue: https://github.com/Lakkanna/css-converter/issues/23
        // fixed
        if (includes(key, "-webkit") || startsWith(key, "-")) {
          key = convertWebkitPrefixedKey(trim(key));
        } else {
          key = camelCase(trim(key));
        }
        let propertyValue: unknown = removeQuotesFromString(value);
        propertyValue = isNaN(propertyValue as number)
          ? `"${propertyValue}"`
          : propertyValue;
        const newLine = `${key}: ${propertyValue},`;
        returnLines.push(newLine);
      }
    });
    return returnLines;
  }
  return [""];
};

export default generateCamelCaseCSS;

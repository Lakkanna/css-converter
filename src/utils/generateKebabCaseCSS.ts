/**
 * @author Lakkanna Walikar
 * @description kebab case css generator
 */

import isEmpty from "lodash.isempty";
import kebabCase from "lodash.kebabcase";

import { removeQuotesFromString } from "./removeQuotes";

/**
 *
 * @param {string[]}    lines   Array of strings to get converted into kebab-case css
 * @returns {string[]}          converted kebab case css
 */
const generateKebabCaseCSS = (lines: string[]): string[] => {
  let returnLines: string[] = [];
  if (Array.isArray(lines)) {
    lines.forEach((line) => {
      if (!isEmpty(line) && typeof line === "string") {
        let [key, value] = line.split(":");
        const newLine = `${kebabCase(key.trim())}: ${removeQuotesFromString(
          value
        )};`;
        returnLines.push(newLine);
      }
    });
    return returnLines;
  }
  return [""];
};

export default generateKebabCaseCSS;

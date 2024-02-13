/**
 * @author Lakkanna Walikar
 * @description kebab case css generator
 */

import { isEmpty, kebabCase } from "lodash";
import { addPrefixDashIfNeeded } from "./addPrefixDashIfNeeded";

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
        key = kebabCase(key.trim());
        key = addPrefixDashIfNeeded(key);
        const newLine = `${key}: ${removeQuotesFromString(value)};`;
        returnLines.push(newLine);
      }
    });
    return returnLines;
  }
  return [""];
};

export default generateKebabCaseCSS;

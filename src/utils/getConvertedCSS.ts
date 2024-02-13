/**
 * @author Lakkanna Walikar
 * @description css converter
 */

import { trim, includes } from "lodash";

import generateCamelCaseCSS from "./generateCamelCaseCSS";
import generateKebabCaseCSS from "./generateKebabCaseCSS";
import { removeNewLines } from "./removeNewLines";

/**
 * function to identify to which format to convert css and convert css
 * @param {string} text - A string value to convert to kebab case into camel case, vice-versa
 * @returns {string[]}    converted css
 */
const getConvertedCSS = (text: string): string[] => {
  const cleanText = trim(removeNewLines(text));
  if (typeof cleanText === "string") {
    const isCamelCased = includes(cleanText, "',") || includes(cleanText, '",');

    let splittedText = cleanText.split(isCamelCased ? "," : ";");

    let convertedCss: string[] = [];

    // HTML CSS to JS CSS (Generate kebab-case CSS)
    if (isCamelCased) {
      convertedCss = generateKebabCaseCSS(cleanText.split(","));
    } else {
      // JS CSS to HTML CSS (Generate camelCase CSS)
      convertedCss = generateCamelCaseCSS(splittedText);
    }
    return convertedCss;
  }
  return [""];
};

export default getConvertedCSS;

/**
 * @author Lakkanna Walikar
 * @description css converter
 */

import trim from "lodash.trim";

import generateCamelCaseCSS from "./generateCamelCaseCSS";
import generateKebabCaseCSS from "./generateKebabCaseCss";
import { removeNewLines } from "./removeNewLines";

/**
 * function to identify to which format to convert css and convert css
 * @param {string} text - A string value to convert to kebab case into camel case, vice-versa
 * @returns {string[]}    converted css
 */
const getConvertedCSS = (text: string): string[] => {
  const cleanText = trim(removeNewLines(text));
  if (typeof cleanText === "string") {
    let splittedText = cleanText.split(";");

    let convertedCss: string[] = [];

    // HTML CSS to JS CSS (Generate Camel Case CSS)
    if (splittedText.length > 1) {
      convertedCss = generateCamelCaseCSS(splittedText);
    } else {
      // JS CSS to HTML CSS (Generate kebab-case CSS)
      convertedCss = generateKebabCaseCSS(cleanText.split('",'));
    }
    return convertedCss;
  }
  return [""];
};

export default getConvertedCSS;

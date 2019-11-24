/**
 * @author Lakkanna Walikar
 * @description css converter
 */

import * as _ from 'lodash';
import generateCamelCaseCSS from './generateCamelCaseCSS';
import generateKebabCaseCSS from './generateKebabCaseCss';

/**
 * function to identify to which format to convert css and convert css
 * @param {string} text - A string value to convert to kebab case into camel case, vice-versa
 * @returns {string[]}    converted css
 */
const getConvertedCSS = (text: string): string[] => {
  let splittedText = _.split(text, ";");

			let convertedCss: string[] = [];

			// HTML CSS to JS CSS (Generate Camel Case CSS)
			if (splittedText.length > 1) {
				convertedCss = generateCamelCaseCSS(splittedText);
			} else {
				// JS CSS to HTML CSS (Generate kebab-case CSS)
				convertedCss = generateKebabCaseCSS(_.split(text, "\","));
      }
      return convertedCss;
}

export default getConvertedCSS;

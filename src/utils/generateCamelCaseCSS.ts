/**
 * @author Lakkanna Walikar
 * @description camel case css generator
 */

import * as _ from 'lodash';
import removeQuotes from './removeQuotes';

/**
 * function to kebab case css into camel case css
 * @param {string[]}    lines   Array of strings to get converted into camelCase css
 * @returns {string[]}          converted camel case css
 */
const generateCamelCaseCSS = (lines: string[]): string[] => {
	let returnLines: string[] = [];
	_.forEach(lines, (line) => {
		if (!_.isEmpty(line)) {
			let [key, value] = _.split(line, ":");
			const newLine = `${_.camelCase(_.trim(key))}: "${removeQuotes(value)}",`;
			returnLines.push(newLine);
		}
	});
	return returnLines;
};

export default generateCamelCaseCSS;

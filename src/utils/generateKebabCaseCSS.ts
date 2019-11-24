/**
 * @author Lakkanna Walikar
 * @description kebab case css generator
 */

import * as _ from 'lodash';
import removeQuotes from './removeQuotes';

/**
 *
 * @param {string[]}    lines   Array of strings to get converted into kebab-case css
 * @returns {string[]}          converted kebab case css
 */
const generateKebabCaseCSS = (lines: string[]): string[] => {
	let returnLines: string[] = [];
	_.forEach(lines, (line) => {
		if (!_.isEmpty(line)) {
			let [key, value] = _.split(line, ":");
			const newLine = `${_.kebabCase(_.trim(key))}: ${removeQuotes(value)};`;
			returnLines.push(newLine);
		}
	});
	return returnLines;
};

export default generateKebabCaseCSS;

/**
 * @author Lakkanna Walikar
 * @description remove whitespaces from string
 */

import * as _ from 'lodash';

/**
 * function to remove whitespaces from string
 * @param {string} value - A string to get remove whitespaces
 * @returns {string} whitespaces removed string
 */
const removeWhiteSpace = (value: string): string => {
	return _.replace(value, /\s/g, '');
};

export default removeWhiteSpace

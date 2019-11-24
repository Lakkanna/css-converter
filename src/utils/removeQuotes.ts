/**
 * @author Lakkanna Walikar
 * @description remove quotes
 */

import * as _ from 'lodash';
import removeWhitespaces from './removeWhitespaces';

 /**
  * function to remove quotes from string
  * @param {string} value - A value to get remove quotes
  * @returns {string} string value removed quotes and whitespaces
  */
 const removeQuotesFromString = (value: string): string => {
	return _.replace(removeWhitespaces(value), /"/g, '');
};

export default removeQuotesFromString;

/**
 *
 * @param input {string} Input string
 * @returns {string} replaced \n with empty string
 */
const removeNewLines = (input: string): string => {
  return input.replace(/\n/g, "");
};

export { removeNewLines };

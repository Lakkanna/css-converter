import startsWith from "lodash.startswith";

const addPrefixDashIfNeeded = (key: string): string => {
  if (startsWith(key, "webkit-")) {
    return `-${key}`;
  }
  return key;
};

export { addPrefixDashIfNeeded };

import { startsWith } from "lodash";

const addPrefixDashIfNeeded = (key: string): string => {
  if (startsWith(key, "webkit-")) {
    return `-${key}`;
  }
  return key;
};

export { addPrefixDashIfNeeded };

import { split, map, compact, join, upperFirst } from "lodash";

// -webkit-background-clip => WebkitBackgroundClip
const convertWebkitPrefixedKey = (key: string): string => {
  const values = map(compact(split(key, "-")), (value: string) =>
    upperFirst(value)
  );
  return join(values, "");
};

export { convertWebkitPrefixedKey };

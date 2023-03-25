import split from "lodash.split";
import compact from "lodash.compact";
import map from "lodash.map";
import upperFirst from "lodash.upperfirst";
import join from "lodash.join";

// -webkit-background-clip => WebkitBackgroundClip
const convertWebkitPrefixedKey = (key: string): string => {
  const values = map(compact(split(key, "-")), (value: string) =>
    upperFirst(value)
  );
  return join(values, "");
};

export { convertWebkitPrefixedKey };

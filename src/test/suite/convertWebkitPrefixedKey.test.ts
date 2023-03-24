import * as assert from "assert";

import { convertWebkitPrefixedKey } from "../../utils/convertWebkitPrefixedKey";

describe("convertWebkitPrefixedKey", () => {
  it("should convert", () => {
    assert.deepStrictEqual(
      convertWebkitPrefixedKey("-webkit-background-clip"),
      "WebkitBackgroundClip"
    );

    assert.deepStrictEqual(
      convertWebkitPrefixedKey("-webkit-mask-image"),
      "WebkitMaskImage"
    );

    assert.deepStrictEqual(
      convertWebkitPrefixedKey("-webkit-mask-position-x"),
      "WebkitMastPositionX"
    );

    assert.deepStrictEqual(
      convertWebkitPrefixedKey("-webkit-mask-position-y"),
      "WebkitMaskPositionY"
    );
  });
});

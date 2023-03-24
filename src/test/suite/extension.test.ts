import * as assert from "assert";

import generateKebabCaseCSS from "../../utils/generateKebabCaseCSS";
import generateCamelCaseCSS from "../../utils/generateCamelCaseCSS";

const camelCaseCss = `color: "red", fontWeight: "600",`;

const camelCaseCss2 = `		color: "red",
fontSize: "12px",
fontWeight: "bold",
align: "center",`;

const kebabCaseCss = `color: red; font-weight: 600;`;

const kebabCaseCss2 = `	color: red;
font-size: 12px;
font-weight: bold;
align: center;`;

// Defines a Mocha test suite to group tests of similar kind together
suite("Extension Tests", function () {
  test("Should generate kebab-case css 1", function () {
    const testCss = ["color: red;", "font-weight: 600;"];
    const generatedCss = generateKebabCaseCSS(camelCaseCss.split(","));
    assert.deepStrictEqual(testCss.join("\n"), generatedCss.join("\n"));
  });

  test("Should generate kebab-case css 2", function () {
    const testCss = [
      "color: red;",
      "font-size: 12px;",
      "font-weight: bold;",
      "align: center;",
    ];
    const generatedCss = generateKebabCaseCSS(camelCaseCss2.split(","));
    assert.deepStrictEqual(testCss.join("\n"), generatedCss.join("\n"));
  });

  test("should generate camelCase with spacing withing the string and remove only trainling spaces", () => {
    const inputCss = `border-radius: 100%/130% 130% 15px 15px;
    box-shadow: 0 1px 2px rgba(0,0,0,.5);
    text-shadow: -1px -1px 0 #000,2px -1px 0 #000,2px 2px 0 #000,-1px 2px 0 #000,2px 3px 0 #000,1px 3px 0 #000,2px 3px 0 #000;`;

    const expectedArray = [
      'borderRadius: "100%/130% 130% 15px 15px",',
      'boxShadow: "0 1px 2px rgba(0,0,0,.5)",',
      'textShadow: "-1px -1px 0 #000,2px -1px 0 #000,2px 2px 0 #000,-1px 2px 0 #000,2px 3px 0 #000,1px 3px 0 #000,2px 3px 0 #000",',
    ];
    const generatedCss = generateCamelCaseCSS(inputCss.split(";"));
    assert.deepStrictEqual(expectedArray.join("\n"), generatedCss.join("\n"));
  });
  test("Should generate camelCase css 1", function () {
    const testCss = ['color: "red",', "fontWeight: 600,"];
    const generatedCss = generateCamelCaseCSS(kebabCaseCss.split(";"));
    assert.deepStrictEqual(testCss.join("\n"), generatedCss.join("\n"));
  });

  test("Should generate camelCase css 2", function () {
    const testCss = [
      'color: "red",',
      'fontSize: "12px",',
      'fontWeight: "bold",',
      'align: "center",',
    ];
    const generatedCss = generateCamelCaseCSS(kebabCaseCss2.split(";"));
    assert.deepStrictEqual(testCss.join("\n"), generatedCss.join("\n"));
  });
});

import * as assert from 'assert';
import generateKebabCaseCSS from '../utils/generateKebabCaseCSS';
import generateCamelCaseCSS from '../utils/generateCamelCaseCSS';

const camelCaseCss = `color: "red", fontWeight: "600",`;

const kebabCaseCss = `color: red; font-weight: 600;`;

const kebabCaseCss2 = `	color: red;
font-size: 12px;
font-weight: bold;
align: center;`;

// Defines a Mocha test suite to group tests of similar kind together
suite("Extension Tests", function () {

    test("Should generate kebab-case css 1", function() {
        const testCss = ["color: red;", "font-weight: 600;"];
        const generatedCss = generateKebabCaseCSS(camelCaseCss.split(","));
        assert.equal(testCss.join("\n"), generatedCss.join("\n"));
    });

    test("Should generate kebab-case css 2", function() {
        const testCss = ["color: red;", "font-size: 12px;", "font-weight: bold;", "align: center;"];
        const generatedCss = generateKebabCaseCSS(camelCaseCss.split(","));
        assert.equal(testCss.join("\n"), generatedCss.join("\n"));
    });

    test("Should generate camelCase css 1", function() {
        const testCss = ['color: "red",', 'fontWeight: "600",'];
        const generatedCss = generateCamelCaseCSS(kebabCaseCss.split(";"));
        assert.equal(testCss.join( "\n"), generatedCss.join( "\n"));
    });

    test("Should generate camelCase css 2", function() {
        const testCss = ['color: "red",', 'fontSize: "12px",', 'fontWeight: "bold",', 'align: "center",'];
        const generatedCss = generateCamelCaseCSS(kebabCaseCss2.split(";"));
        assert.equal(testCss.join("\n"), generatedCss.join( "\n"));
    });
});

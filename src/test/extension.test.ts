//
// Note: This example test is leveraging the Mocha test framework.
// Please refer to their documentation on https://mochajs.org/ for help.
//

// The module 'assert' provides assertion methods from node
import * as assert from 'assert';
import * as _ from 'lodash';
import { generateKebabCaseCSS, generateCamelCaseCSS } from '../extension';

const camelCaseCss = `color: "red", fontWeight: "600",`;
const camelCaseCss2 = `		color: "red",
fontSize: "12px",
fontWeight: "bold",
align: "center",`;
const kababCaseCss = `color: red; font-weight: 600;`;
const kababCaseCss2 = `	color: red;
font-size: 12px;
font-weight: bold;
align: center;`;
// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
// import * as vscode from 'vscode';
// import * as myExtension from '../extension';

// Defines a Mocha test suite to group tests of similar kind together
suite("Extension Tests", function () {

    test("Should generate kebab-case css 1", function() {
        assert.equal(_.join(["color: red;", "font-weight: 600;"], "\n"), _.join(generateKebabCaseCSS(_.split(camelCaseCss,",")), "\n"));
    });

    test("Should generate kebab-case css 2", function() {
        assert.equal(_.join(["color: red;", "font-size: 12px;", "font-weight: bold;", "align: center;"], "\n"), _.join(generateKebabCaseCSS(_.split(camelCaseCss2,",")), "\n"));
    });

    test("Should generate camelCase css 1", function() {
        assert.equal(_.join(['color: "red",', 'fontWeight: "600",'], "\n"), _.join(generateCamelCaseCSS(_.split(kababCaseCss, ";")), "\n"));
    });

    test("Should generate camelCase css 2", function() {
        assert.equal(_.join(['color: "red",', 'fontSize: "12px",', 'fontWeight: "bold",', 'align: "center",'], "\n"), _.join(generateCamelCaseCSS(_.split(kababCaseCss2, ";")), "\n"));
    });
});
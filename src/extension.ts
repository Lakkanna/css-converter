import * as vscode from 'vscode';
import { commands } from 'vscode';
import * as _ from 'lodash';

const replaceWhiteSpace = (value: string): string => {
	return _.replace(value, /\s/g, '');
};

const replaceQuotes = (value: string): string => {
	return _.replace(replaceWhiteSpace(value), /"/g, '');
};

export const generateKebabCaseCSS = (lines: string[]): string[] => {
	let returnLines: string[] = [];
	_.forEach(lines, (line) => {
		if (!_.isEmpty(line)) {
			let [key, value] = _.split(line, ":");
			const newLine = `${_.kebabCase(_.trim(key))}: ${replaceQuotes(value)};`;
			returnLines.push(newLine);
		}
	});
	return returnLines;
};

export const generateCamelCaseCSS = (lines: string[]): string[] => {
	let returnLines: string[] = [];
	_.forEach(lines, (line) => {
		if (!_.isEmpty(line)) {
			let [key, value] = _.split(line, ":");
			const newLine = `${_.camelCase(_.trim(key))}: "${replaceQuotes(value)}",`;
			returnLines.push(newLine);
		}
	});
	return returnLines;
};


export function activate(context: vscode.ExtensionContext) {

	let disposable = vscode.commands.registerCommand('extension.cssConverter', () => {

		const editor = vscode.window.activeTextEditor;
		if (!editor) {
			vscode.window.showInformationMessage('No editor is active');
			return;
		}
		const text = editor.document.getText(editor.selection);
		if (_.isEmpty(text)) {
			vscode.window.showErrorMessage('You have not selected CSS!');
		} else {
			let splittedText = _.split(text, ";");

			let replacedText: string[] = [];
	
			// HTML CSS to JS CSS (Generate Camel Case CSS)
			if (splittedText.length > 1) {
				replacedText = generateCamelCaseCSS(splittedText);
			} else {
				// JS CSS to HTML CSS (Generate kebab-case CSS)
				replacedText = generateKebabCaseCSS(_.split(text, "\","));
			}
			// replace generated css 
			try {
				editor.edit(e => e.replace(editor.selection, _.join(replacedText, "\n")), { undoStopBefore: true, undoStopAfter: true, });
				const settings = vscode.workspace.getConfiguration('cssConverter');
				if (settings.get('autoFormat')) {
					commands.executeCommand('editor.action.formatSelection', []);
				}
				vscode.window.showInformationMessage("CSS Converted 😍");
			} catch (e) {
				vscode.window.showErrorMessage("Error while converting CSS! ☹️");
			}
		}
	});
	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}

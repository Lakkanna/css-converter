import vscode from 'vscode';
import isEmpty from 'lodash.isempty';
import getConvertedCSS from './utils/getConvertedCSS';
import writeToEditor from './utils/writeToEditor';

export function activate(context: vscode.ExtensionContext) {

	let disposable = vscode.commands.registerCommand('extension.cssConverter', () => {

		const editor = vscode.window.activeTextEditor;
		if (!editor) {
			vscode.window.showInformationMessage('No editor is active');
			return;
		}
		const text = editor.document.getText(editor.selection);
		if (isEmpty(text)) {
			vscode.window.showErrorMessage('You have not selected CSS!');
		} else {
      const convertedCSS = getConvertedCSS(text);
			writeToEditor(editor, convertedCSS);
		}
	});
	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}

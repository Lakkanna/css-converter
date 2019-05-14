# css-converter (VS-Code extension)

Convert a kebab-case css to camel case css or vice-versa.

## How to use
  1. Select the CSS text you want convert
  2. Open  `Command Pallette (Shift + Command + P) / (Shift + Control + P)` in VS-Code and enter `CSS Converter`
  3. Select `CSS Converter` from searched result
  4. **How's the josh** your css is converted.

![how to use](images/css-converter-demo.gif)

## Example
  ### **kebab-case to camelCase**
    background-color: #FFF;   ===>   backgroundColor: "#FFF",

  ### **camelCase to kebab-case**
    backgroundColor: "#FFF",   ===>   background-color: #FFF;

## Features

* Convert your html css to jsStyle which support in react style elements.

* Auto identifies CSS style format.

## Known Issues

* Need to fix issue of indentation after replacing new CSS
* Additional double quotes if try to convert kebab-case css to camelCase.

## Release Notes

### 0.0.2
* Added how to use gif in readme

### 0.0.1
**Initial release of CSS Converter** 
> Identifies format of css and converts it to kebab-case or camelCase based on which css format we selected.

-----------------------------------------------------------------------------------------------------------


**Enjoy!**

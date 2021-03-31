# Change Log

## [0.1.6] - 2021-03-31

### Changed

- updated npm packages and vscode

### Fixed

- Should not wrap number value with string quote,
  example

  ```javascript
    // Current output
    font-weight: 500; => fontWeight: 500

    // Previous output
    font-weight: 500; => fontWeight: '500'
  ```

## [0.1.5] - 2020-02-25

### Changed

- updated npm packages

## [0.1.4] - 2019-11-24

### Changed

- Removed unwanted libraries
- Project re-structured

## [0.1.3] - 2019-11-23

### Fixed

- Extension activation

## [0.1.2] - 2019-05-21

### Added

- Configuration for travis-ci
- Tests for build in travis-ci
- Badges in README.md
- Keywords

## [0.1.1] - 2019-05-18

### Added

- Key binding

  _mac_ - `Shift + Command + V`

  _window/linux_ - `Shift + Ctrl + V`

## [0.1.0] - 2019-05-18

### Added

- Key binding

## [0.0.9] - 2019-05-17

### Changed

- Moved demo gif top in Updated README.md

## [0.0.8] - 2019-05-17

### Changed

- Updated README.md

## [0.0.7] - 2019-05-17

### Added

- Added configuration for format, default value will be true, to turn off auto format add `cssConverter.autoFormat: false` in **settings.json**

## [0.0.6] - 2019-05-17

### Fixed

- Fixed camelCase CSS string with comma separated values issue

## [0.0.5] - 2019-05-17

### Fixed

- Format should apply only for selected range

## [0.0.4] - 2019-05-17

### Fixed

- Auto indentaion issue
- Additional double quotes if try to convert kebab-case css to camelCase

## [0.0.3] - 2019-05-16

### Added

- Black background how to use gif in readme

## [0.0.2] - 2019-05-14

### Added

- How to use gif in readme

## [0.0.1] - 2019-05-14

### Added

- Initial release of CSS Converter
- Identifies format of css and converts it to kebab-case or camelCase based on which css format we selected.

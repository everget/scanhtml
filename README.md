# scanhtml

:bar_chart: A robust HTML file statistics collector, analyzer and validator
[![Build Status](https://travis-ci.org/everget/scanhtml.svg?branch=master)](https://travis-ci.org/everget/scanhtml) [![Build status](https://ci.appveyor.com/api/projects/status/dl88bnkepmy3blwr/branch/master?svg=true)](https://ci.appveyor.com/project/everget/scanhtml/branch/master) [![codecov](https://codecov.io/gh/everget/scanhtml/branch/master/graph/badge.svg)](https://codecov.io/gh/everget/scanhtml) [![Coverage Status](https://coveralls.io/repos/github/everget/scanhtml/badge.svg?branch=master)](https://coveralls.io/github/everget/scanhtml?branch=master)

[![CodeFactor](https://www.codefactor.io/repository/github/everget/scanhtml/badge)](https://www.codefactor.io/repository/github/everget/scanhtml) [![codebeat badge](https://codebeat.co/badges/b930dfd0-6922-4750-b32c-9f8fdcccb0f6)](https://codebeat.co/projects/github-com-everget-scanhtml-master) [![Codacy Badge](https://api.codacy.com/project/badge/Grade/81c450c367f14b6ea8430a0ad348429c)](https://www.codacy.com/project/coriolan61/scanhtml/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=everget/scanhtml&amp;utm_campaign=Badge_Grade_Dashboard) [![BCH compliance](https://bettercodehub.com/edge/badge/everget/scanhtml?branch=master)](https://bettercodehub.com/)

[![npm version](https://img.shields.io/npm/v/scanhtml.svg?style=flat)](https://www.npmjs.com/package/scanhtml) [![npm](https://img.shields.io/npm/dm/scanhtml.svg?style=flat)](https://www.npmjs.com/package/scanhtml) [![install size](https://packagephobia.now.sh/badge?p=scanhtml@1.0.0)](https://packagephobia.now.sh/result?p=scanhtml@1.0.0) [![David](https://img.shields.io/david/dev/everget/scanhtml.svg)](https://david-dm.org/everget/scanhtml) [![Known Vulnerabilities](https://snyk.io/test/github/everget/scanhtml/badge.svg)](https://snyk.io/test/github/everget/scanhtml)

## Table of contents

1. [Installation](#installation)

1. [Usage](#usage)

1. [Report Structure](#report-structure)

1. [Examples](#examples)

1. [Options](#options)
	* [size](#size)
	* [elements](#elements)
	* [voidElements](#voidelements)
	* [svgElements](#svgelements)
	* [mathmlElements](#mathmlelements)
	* [obsoleteElements](#obsoleteelements)
	* [customElements](#customelements)
	* [attributes](#attributes)
	* [globalAttributes](#globalattributes)
	* [idAttributes](#idattributes)
	* [styleAttributes](#styleattributes)
	* [dataAttributes](#dataattributes)
	* [ariaAttributes](#ariaattributes)
	* [svgAttributes](#svgattributes)
	* [obsoleteAttributes](#obsoleteattributes)

1. [License](#license)

## Installation
```
npm install scanhtml --save
```

```
yarn add scanhtml --save
```

[Back to top](#table-of-contents)

## Usage

```js
import scanhtml from 'scanhtml';
// or const scanhtml = require('scanhtml');

const html = `

`;

// Switching off some metrics
const report = scanhtml(
	html,
	{
		svgElements: false,
		mathmlElements: false,
		customElements: false,
		svgAttributes: false,
	}
);
```

**_NOTE:_** Without provided options object `scanhtml` will use defaults. See available [Options](#options).

[Back to top](#table-of-contents)

## Report Structure

See [Report Structure](https://github.com/everget/scanhtml/tree/master/REPORT_STRUCTURE.md) for more details.

[Back to top](#table-of-contents)

## Examples

See [examples](https://github.com/everget/scanhtml/tree/master/examples) folder with stylesheets and their corresponding reports.

[Back to top](#table-of-contents)

## Options

#### size

Use this flag to fill `.size` metric

* Default: `true`

#### elements

Use this flag to fill `.elements` metric

* **_NOTE:_** Disabling this flag you will disable counting of all html elements

* Default: `true`

#### voidElements

Use this flag to fill `.elements.void` metric

* Default: `true`

#### svgElements

Use this flag to fill `.elements.svg` metric

* Default: `true`

#### mathmlElements

Use this flag to fill `.elements.mathml` metric

* Default: `true`

#### obsoleteElements

Use this flag to fill `.elements.obsolete` metric

* Default: `true`

#### customElements

Use this flag to fill `.elements.custom` metric

* Default: `true`

#### attributes

Use this flag to fill `.attributes` metric

* **_NOTE:_** Disabling this flag you will disable counting of all html attributes

* Default: `true`

#### globalAttributes

Use this flag to fill `.attributes.global` metric

* Default: `true`

#### idAttributes

Use this flag to fill `.attributes.id` metric

* Default: `true`

#### styleAttributes

Use this flag to fill `.attributes.style` metric

* Default: `true`

#### dataAttributes

Use this flag to fill `.attributes.data` metric

* Default: `true`

#### ariaAttributes

Use this flag to fill `.attributes.aria` metric

* Default: `true`

#### svgAttributes

Use this flag to fill `.attributes.svg` metric

* Default: `true`

#### obsoleteAttributes

Use this flag to fill `.attributes.obsolete` metric

* Default: `true`

## License

MIT © Alex Orekhov @everget

[Back to top](#table-of-contents)

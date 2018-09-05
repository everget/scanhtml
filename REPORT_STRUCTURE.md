## Report Structure

* [size](#size)
* [nodes](#nodes)
* [elements](#elements)
* [attributes](#attributes)

#### size

* **source** - `number`

* **gzipSource** - `number`

* **gzipSourcePercent** - `string | null`

* **minified** - `number`

* **minifiedPercent** - `string | null`

* **gzipMinified** - `number`

* **gzipMinifiedPercent** - `string | null`

[Back to top](#report-structure)

#### nodes

* **total** - `number`

* **usage** - `Record<string, number>`
	* **comments** - `number`
	* **texts** - `number`
	* **elements** - `number`

[Back to top](#report-structure)

#### elements

* **total** - `number`

* **unique** - `number`

* **usage** - `Record<string, number>`

* **void** - `Record<string, any>`
	* **total** - `number`
	* **unique** - `number`
	* **usage** - `Record<string, number>`

* **svg** - `Record<string, any>`
	* **total** - `number`
	* **unique** - `number`
	* **usage** - `Record<string, number>`

* **mathml** - `Record<string, any>`
	* **total** - `number`
	* **unique** - `number`
	* **usage** - `Record<string, number>`

* **obsolete** - `Record<string, any>`
	* **total** - `number`
	* **unique** - `number`
	* **usage** - `Record<string, number>`

* **custom** - `Record<string, any>`
	* **total** - `number`
	* **unique** - `number`
	* **usage** - `Record<string, number>`

[Back to top](#report-structure)

#### attributes

* **total** - `number`

* **unique** - `number`

* **usage** - `Record<string, number>`

* **global** - `Record<string, any>`
	* **total** - `number`
	* **unique** - `number`
	* **usage** - `Record<string, number>`

* **id** - `Record<string, any>`
	* **total** - `number`
	* **unique** - `number`
	* **usage** - `Record<string, number>`
	* **duplicated** - `Array<string>`

* **style** - `Record<string, any>`
	* **total** - `number`
	* **unique** - `number`
	* **valuesUsage** - `Record<string, number>`

* **data** - `Record<string, any>`
	* **total** - `number`
	* **unique** - `number`
	* **usage** - `Record<string, number>`
	* **valuesUsage** - `Record<string, number>`
	* **invalid** - `Record<string, number>`
		* **total** - `number`
		* **unique** - `number`
		* **usage** - `Record<string, number>`

* **aria** - `Record<string, any>`
	* **total** - `number`
	* **unique** - `number`
	* **usage** - `Record<string, number>`
	* **valuesUsage** - `Record<string, number>`
	* **invalid** - `Record<string, number>`
		* **total** - `number`
		* **unique** - `number`
		* **usage** - `Record<string, number>`

* **svg** - `Record<string, any>`
	* **total** - `number`
	* **unique** - `number`
	* **usage** - `Record<string, number>`
	* **valuesUsage** - `Record<string, number>`
	* **invalid** - `Record<string, number>`
		* **total** - `number`
		* **unique** - `number`
		* **usage** - `Record<string, number>`

* **obsolete** - `Record<string, any>`
	* **total** - `number`
	* **unique** - `number`
	* **usage** - `Record<string, number>`
	* **valuesUsage** - `Record<string, number>`

[Back to top](#report-structure)

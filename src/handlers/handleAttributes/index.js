import htmlAriaAttributes from 'aria-attributes';

import { htmlGlobalAttributes } from '../../constants/htmlGlobalAttributes';
import { countUsage } from '../../calculators/countUsage';

function countGlobalAttributes(attr, report) {
	report.attributes.global.total++;
	countUsage(attr, report.attributes.global.usage);
}

function countIdAttributes(attr, attrs, report) {
	report.attributes.id.total++;
	countUsage(attrs[attr], report.attributes.id.usage);
}

function countDataAttributes(attr, attrs, report) {
	report.attributes.data.total++;
	countUsage(attr, report.attributes.data.usage);
	countUsage(attr + '=' + attrs[attr], report.attributes.data.valuesUsage);
}

function countAriaAttributes(attr, attrs, report) {
	report.attributes.aria.total++;
	countUsage(attr, report.attributes.aria.usage);
	countUsage(attr + '=' + attrs[attr], report.attributes.aria.valuesUsage);

	if (htmlAriaAttributes.includes(attr) === false) {
		report.attributes.aria.invalid.total++;
		countUsage(attr, report.attributes.aria.invalid.usage);
	}
}

function countStyleAttributes(attr, attrs, report) {
	report.attributes.style.total++;
	countUsage(attrs[attr], report.attributes.style.valuesUsage);
}

/* eslint-disable-next-line no-unused-vars */
function countSvgAttributes(attr, attrs, report) {
}

/* eslint-disable-next-line no-unused-vars */
function countObsoleteAttributes(attr, attrs, report) {
}

export function handleAttributes(node, report, options) {
	Object
		.keys(node.attrs)
		/* eslint-disable-next-line complexity */
		.forEach((attr) => {
			report.attributes.total++;
			countUsage(attr, report.attributes.usage);

			if (htmlGlobalAttributes.includes(attr) && options.globalAttributes) {
				countGlobalAttributes(attr, report);
			}

			if (attr === 'id' && options.idAttributes) {
				countIdAttributes(attr, node.attrs, report);
			}

			if (attr.startsWith('data-') && options.dataAttributes) {
				countDataAttributes(attr, node.attrs, report);
			}

			if (attr.startsWith('aria-') || attr === 'role' && options.ariaAttributes) {
				countAriaAttributes(attr, node.attrs, report);
			}

			if (attr === 'style' && options.styleAttributes) {
				countStyleAttributes(attr, node.attrs, report);
			}

			// TODO
			// if (htmlSvgAttributes.includes(attr) && options.svgAttributes) {
			// 	countSvgAttributes(attr, node.attrs, report);
			// }

			// TODO
			// if (htmlObsoleteAttributes.includes(attr) && options.obsoleteAttributes) {
			// 	countObsoleteAttributes(attr, node.attrs, report);
			// }
		});
}

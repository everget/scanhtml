import posthtml from 'posthtml';
import isPlainObject from 'lodash.isplainobject';

import { getEmptyReport } from './common/getEmptyReport';
import { reHtmlComment } from './constants/reHtmlComment';
import { handleSize } from './handlers/handleSize';
import { handleElement } from './handlers/handleElement';
import { handleAttributes } from './handlers/handleAttributes';

function walkTree(tree, report, options) {
	tree.walk((node) => {
		report.nodes.total++;

		if (typeof node === 'string') {
			if (reHtmlComment.test(node)) {
				report.nodes.usage.comments++;
			} else {
				report.nodes.usage.texts++;
			}
		}

		if (typeof node.tag === 'string') {
			report.nodes.usage.elements++;

			if (options.elements) {
				handleElement(node, report, options);
			}
		}

		if (isPlainObject(node.attrs) && options.attributes) {
			handleAttributes(node, report, options);
		}

		if (Array.isArray(node.content)) {
			walkTree(
				{
					tag: node.tag,
					content: node.content,
					version: tree.version,
					name: tree.name,
					plugins: tree.plugins,
					messages: tree.messages,
					walk: tree.walk,
					match: tree.match,
					options: tree.options,
				},
				report,
				options
			);
		}
	});

	return tree;
}

export default function scanhtml(src, options) {
	if (typeof src !== 'string') {
		throw new TypeError('`scanhtml` expects a string');
	} else {
		const scanhtmlOptions = Object.assign(
			{},
			{
				size: true,
				elements: true,
				voidElements: true,
				svgElements: true,
				mathmlElements: true,
				obsoleteElements: true,
				customElements: true,
				attributes: true,
				globalAttributes: true,
				idAttributes: true,
				styleAttributes: true,
				ariaAttributes: true,
				dataAttributes: true,
				svgAttributes: true,
				obsoleteAttributes: true,
			},
			isPlainObject(options) && Object.keys(options).length > 0
				? options
				: {}
		);

		const report = getEmptyReport();

		if (scanhtmlOptions.size) {
			handleSize(src, report);
		}

		posthtml()
			.use((tree) => walkTree(tree, report, scanhtmlOptions))
			.process(src, { sync: true });

		report.elements.unique = Object.keys(report.elements.usage).length;
		report.elements.void.unique = Object.keys(report.elements.void.usage).length;
		report.elements.svg.unique = Object.keys(report.elements.svg.usage).length;
		report.elements.mathml.unique = Object.keys(report.elements.mathml.usage).length;
		report.elements.obsolete.unique = Object.keys(report.elements.obsolete.usage).length;
		report.elements.custom.unique = Object.keys(report.elements.custom.usage).length;

		report.attributes.unique = Object.keys(report.attributes.usage).length;

		report.attributes.global.unique = Object.keys(report.attributes.global.usage).length;

		report.attributes.id.unique = Object.keys(report.attributes.id.usage).length;
		report.attributes.id.duplicated = Object
			.entries(report.attributes.id.usage)
			.reduce(
				(acc, tuple) => {
					if (tuple[1] > 1) {
						acc.push(tuple[0]);
					}

					return acc;
				},
				[]
			);

		report.attributes.style.unique = Object.keys(report.attributes.style.valuesUsage).length;

		report.attributes.data.unique = Object.keys(report.attributes.data.usage).length;

		report.attributes.aria.unique = Object.keys(report.attributes.aria.usage).length;
		report.attributes.aria.invalid.unique = Object.keys(report.attributes.aria.invalid.usage).length;

		report.attributes.svg.unique = Object.keys(report.attributes.svg.usage).length;

		report.attributes.obsolete.unique = Object.keys(report.attributes.obsolete.usage).length;

		return report;
	}
}

import mathmlElements from 'mathml-tag-names';
import htmlSvgElements from 'svg-tag-names';

import { htmlElements } from '../../constants/htmlElements';
import { htmlVoidElements } from '../../constants/htmlVoidElements';
import { htmlObsoleteElements } from '../../constants/htmlObsoleteElements';
import { countUsage } from '../../calculators/countUsage';

export function handleElement(node, report, options) {
	report.elements.total++;
	countUsage(node.tag, report.elements.usage);

	if (htmlVoidElements.includes(node.tag) && options.voidElements) {
		report.elements.void.total++;
		countUsage(node.tag, report.elements.void.usage);
		return;
	}

	if (htmlObsoleteElements.includes(node.tag) && options.obsoleteElements) {
		report.elements.obsolete.total++;
		countUsage(node.tag, report.elements.obsolete.usage);
		return;
	}

	if (htmlSvgElements.includes(node.tag) && options.svgElements) {
		report.elements.svg.total++;
		countUsage(node.tag, report.elements.svg.usage);
		return;
	}

	if (mathmlElements.includes(node.tag) && options.mathmlElements) {
		report.elements.mathml.total++;
		countUsage(node.tag, report.elements.mathml.usage);
		return;
	}

	if (
		htmlElements.includes(node.tag) === false &&
		htmlObsoleteElements.includes(node.tag) === false &&
		htmlSvgElements.includes(node.tag) === false &&
		mathmlElements.includes(node.tag) === false &&
		options.customElements
	) {
		report.elements.custom.total++;
		countUsage(node.tag, report.elements.custom.usage);
	}
}

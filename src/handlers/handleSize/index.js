import { default as gzipSize } from 'gzip-size';
import { minify } from 'html-minifier';

import { percentDifference } from '../../calculators/percentDifference';

export function handleSize(src, report) {
	report.size.source = Buffer.byteLength(src, 'utf8');
	report.size.gzipSource = gzipSize.sync(src);
	report.size.gzipSourcePercent = percentDifference(
		report.size.source,
		report.size.gzipSource
	);

	try {
		const minifiedSrc = minify(src);
		report.size.minified = Buffer.byteLength(minifiedSrc, 'utf8');
		report.size.minifiedPercent = percentDifference(
			report.size.source,
			report.size.minified
		);

		report.size.gzipMinified = gzipSize.sync(minifiedSrc);
		report.size.gzipMinifiedPercent = percentDifference(
			report.size.source,
			report.size.gzipMinified
		);
	} catch (err) {
		/* eslint-disable-next-line no-console */
		console.log('Cannot minify source by `html-minifier` module');
	}
}

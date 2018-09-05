const fs = require('fs');
const path = require('path');
const scanhtml = require('../../dist/index');
const timeNow = require('./timeNow');
const walkDir = require('./walkDir');

module.exports = function scan(dir) {
	function fileHandler(file) {
		const htmlData = fs.readFileSync(file, 'utf8');
		console.log(`\nScan ${path.basename(file)} ...\n`);

		const startTime = timeNow();
		const scanResult = scanhtml(htmlData);

		fs.writeFileSync(
			file.replace(/html$/, '') + 'report.json',
			JSON.stringify(scanResult, null, 2),
		);

		console.log('Time Spent: ' + (timeNow() - startTime).toFixed(2) + 'ms');
	}

	walkDir(dir, fileHandler, (err) => {
		if (err) {
			throw err;
		}
	});
}

global.requestAnimationFrame = (cb) => setImmediate(cb);

const path = require('path');

require('../src/setupTests');

const rootDir = path.join(__dirname, '../');

[
	'svg',
	'css',
].forEach((ext) => {
	require.extensions[`.${ext}`] = (module, file) => {
		module.exports = file.split('/').slice(-1).join('');
		return module;
	}
});

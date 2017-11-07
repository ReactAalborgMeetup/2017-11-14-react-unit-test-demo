const path = require('path');

require('../src/setupTests');

const rootDir = path.join(__dirname, '../');

require.extensions['.svg'] = (module, file) => {
	module.exports = file.substr(rootDir.length);
	return module;
}

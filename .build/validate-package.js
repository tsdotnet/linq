const packageJson = require('../package.json');
const fs = require("fs");

let fail = 0;
for(const key of ['types', 'main', 'module'])
{
	const path = packageJson[key];
	if(!path)
		console.error('Required value "' + key + '" not found.');
	else if(!fs.existsSync(path))
		console.error('File "' + key + '": "' + path + '" not found.');
	else continue;
	fail = 1;
}
process.exit(fail);

const { createFile } = require('./helpers/multiply');
const colors = require('colors');
const argv = require('./config/yargs');

console.log('log', argv.b);

createFile(argv.b, argv.l, argv.h).then((res) => {
	console.log(res.rainbow);
});

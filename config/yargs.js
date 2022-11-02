const argv = require('yargs')
	.option('b', { alias: 'base', type: 'number', demandOption: true, describe: "Multiplying base" })
    .option('l', { alias: 'list', type: 'boolean', describe: "Show result on consule" })
    .option('h', { alias: 'hasta', type: 'number', describe: "Multiply until" })
	.check((argv, options) => (isNaN(argv.b) ? 'base must be a number' : true)).argv;



module.exports = argv;
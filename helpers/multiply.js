const fs = require("fs");

const createFile = async (base = 5, list = false, until = 10) => {
	let result = ``;

	for (x = 1; x <= until; x++) {
		result += `${base} * ${x} = ${base * x}\n`;
	}

	fs.writeFile('output/result.txt', result, (err) => {
		if (err) throw err;
	});

    if(list) console.log(result);

    return 'Done!';
};

module.exports = {
    createFile
}
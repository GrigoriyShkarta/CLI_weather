import chalk from 'chalk';
import dedent from 'dedent-js';

const printError = (error) => {
	console.log(chalk.bgRed(' ERROR ') + ' ' + error);
};

const printSucces = (message) => {
	console.log(chalk.bgGreen(' SUCCESS ') + ' ' + message);
};

const printHelp = () => {
	console.log(
		dedent`${chalk.bgCyan(' HELP ')}
		Without paramatres - print weather
		-s [CITY] for install city
		-h for print hepl
		-f for save token
		`
	);
};

export {printError, printSucces, printHelp};
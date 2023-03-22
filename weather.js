import {getArgs} from './helpers/args.js'
import { getWeather } from './services/api.service.js';
import { printHelp, printSucces, printError } from './services/log.service.js';
import {saveKeyValue, TOKEN_DICTIONARY} from './services/storage-service.js';

const saveToken = async (token) => {
	if (!`${token}`.length) {
		printError('No token passed');
		return;
	}
	try {
		await saveKeyValue(TOKEN_DICTIONARY.token, token);
		printSucces('Token saved');
	} catch (e) {
		printError(e.message);
	}
};

const getForcast = async () => {
	try {
		const weather = await getWeather('kharkiv');
	} catch (e) {
		if (e?.response?.status == 404) {
			printError("Wrong city");
		} else if (e?.response?.status == 401) {
			printError("Wrong token");
		} else {
			printError(e);
		}
	}
	
}

const initCLI = () => {
	const args = getArgs(process.argv);
	if (args.h) {
		printHelp();
	}
	if (args.s) {
		// save city
	}
	if (args.t) {
		return saveToken(args.t)
	}
	getForcast();
};

initCLI();
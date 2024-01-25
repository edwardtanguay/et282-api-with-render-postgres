import fs from 'fs';

export const readJsonFile = (pathAndFileName) => {
	try {
		const data = fs.readFileSync(pathAndFileName, 'utf8');
		return JSON.parse(data);
	} 
	catch (e) {
		console.log(e);
		console.error(`Error loading JSON`);
		return null;
	}
}
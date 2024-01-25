import { addSkill } from "../src/handlers.js";
import * as tools from './tools.js';

const locked = true;

const _skills = tools.readJsonFile('cli/data/skills.json');

for (const _skill of _skills) {
	try {
		if (locked) {
			console.log(`TEST IMPORT OF "${_skill.name}"`);
		} else {
			const skill = await addSkill(_skill);
			console.log(`imported skills ${_skill.name}`);
		}
	}
	catch (e) {
		console.log(`ERROR ${e.message}`);
	}
}

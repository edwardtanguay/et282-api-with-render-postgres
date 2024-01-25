import { addSkill } from "../src/handlers.js";
import * as tools from './tools.js';

const locked = true;

const _skills = tools.readJsonFile('cli/data/skills.json');

for (const _skill of _skills) {
	try {
		if (locked) {
			console.log(`TEST IMPORT OF SKILL "${_skill.name}"`);
		} else {
			const skill = await addSkill(_skill);
			if (skill !== null) {
				console.log(`imported skill "${skill.name}"`);
			} else {
				console.log(`imported skill is null`);
			}
		}
	}
	catch (e) {
		console.log(`ERROR ${e.message}`);
	}
}

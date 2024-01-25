import { addSkill } from "../src/handlers.js";
import * as tools from './tools.js';

const _skills = tools.readJsonFile('cli/data/skills.json');
console.log(_skills);


// const skill = await addSkill(_skill);
// console.log('added', skill);
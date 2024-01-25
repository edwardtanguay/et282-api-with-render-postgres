import { addSkill } from "../src/handlers.js";

const _skill = {
	"idCode": "777",
	"name": "nnn",
	"url": "uuu",
	"description": "ddd"
};

const skill = await addSkill(_skill);
console.log('added', skill);
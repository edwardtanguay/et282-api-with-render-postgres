import prisma from './db.js';
import express from 'express';

const app = express();
app.use(express.json());
const port = 3733;

app.get('/', (req, res) => {
	res.send(`
<h1>Skills API</h2>
<ul>
	<li><a href="/skills">/skills</a> - web development skills</li>
</ul>
	`);
});

app.get('/skills', async (req, res) => {
	const skills = await prisma.skill.findMany();
	res.json(skills);
});

app.post('/skills', async (req, res) => {
	const _skill = req.body;
	res.json(_skill);
})


app.listen(port, () => {
	console.log(`listening at http://localhost:${port}`);
});
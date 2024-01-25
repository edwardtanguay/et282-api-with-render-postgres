import express from 'express';

const app = express();
const port = 3733;

app.get('/', (req, res) => {
	res.send(`
<h1>Skills API</h2>
<ul>
	<li><a href="/skills">/skills</a> - web development skills</li>
</ul>
	`);
});

app.get('/skills', (req, res) => {
	res.json([
		{
			"idCode": "testangular111",
			"name": "testAngular",
			"url": "https://onespace.pages.dev/techItems?id=36",
			"description": "together with React and Vue.js one of the three most popular JavaScript frameworks"
		},
		{
			"idCode": "testangular222",
			"name": "testAngular",
			"url": "https://onespace.pages.dev/techItems?id=36",
			"description": "together with React and Vue.js one of the three most popular JavaScript frameworks"
		}
	]);
});

app.listen(port, () => {
	console.log(`listening at http://localhost:${port}`);
});
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

app.listen(port, () => {
	console.log(`listening at http://localhost:${port}`);
});
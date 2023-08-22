import express from 'express';

const app = express();
const port = 5000;

app.get('/', (req, res) => {
	res.send('<h1>Welcome Here</h1>');
});

app.get('/hi', (req, res) => {
	res.send('<h1>Hi Mom <span>🙋‍♂️</span></h1>')
})

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});

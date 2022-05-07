import express from 'express';

const app = express();

app.listen(3333, () => {
	console.log('hello');
});

app.get('/users', (req, res) => {
	return res.json({
		data: {
			name: 'Jaiane Oliveira',
			email: 'jaianeoliveira.dev@gmail.com',
		},
		status: 'authorized',
	});
});

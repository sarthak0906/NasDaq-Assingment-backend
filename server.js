const app = require('express')()
const fs  = require('fs');

app.get('/:Stock/:date', (req, res) =>{
	const dataPath = './' + req.params.Stock + req.params.date + '.json';
	
	fs.readFile(dataPath, 'utf8', (err, data) => {
		if (err){
			throw err;
		}

		res.send(JSON.parse(data));
	});
});

app.listen(3000, () => {
	console.log("Server running at " + 3000);
});
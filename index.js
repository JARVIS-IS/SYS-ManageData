const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();
const port = 3004;
const path = '/srv/app/media';

app.use(express.json());
app.use(cors());

function getPath(name) {
	return new Promise((resolve, reject) => {
		try {
			console.log(path + '/main.json');
			const nameList = JSON.parse(fs.readFileSync(path + '/main.json'));
			console.log(nameList);
			console.log(name);
			const jsonPath = nameList[name];

			const data = JSON.parse(fs.readFileSync(path + '/' + jsonPath));
			resolve(data);
		} catch (error) {
			reject(error);
		}
	});
}

app.post('', (req, res) => {
	console.log(req.body.type);
	getPath('token')
		.then((data) => {
			console.log(data);
			res.json(data);
		})
		.catch((error) => {
			res.sendStatus(404);
			res.send(error);
		});
});

app.listen(port, () => console.log(`The SYS-ManageData server runs on port ${port}`));

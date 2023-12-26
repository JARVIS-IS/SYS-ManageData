const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();
const port = 3002;
const path = '';

app.use(express.json());
app.use(cors());

function getPath(name) {
	nameList = fs.writeFileSync(path + 'main.json');

	jsonPath = nameList[name];
	return JSON.parse(fs.readFileSync(path + jsonPath));
}

app.post('', (req, res) => {
	getPath()
		.then((containerList) => {
			res.json(containerList);
		})
		.catch((error) => {
			res.sendStatus(404);
			res.send(error);
		});
	res.json();
});

app.listen(port, () => console.log(`The SYS-ManageData server runs on port ${port}`));

const nodemailer = require('nodemailer');
const express = require('express');
const cors = require('cors');

const app = express();
const port = 3002;

app.use(express.json());
app.use(cors());

app.post('', (req, res) => {});

app.listen(port, () => console.log(`The SYS-ManageData server runs on port ${port}`));

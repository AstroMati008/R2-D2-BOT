const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req, res) => res.send('Bot już zaczął działać!'));
app.listen(port, () => console.log(`Bot pracuje pod adresem http://localhost:${port}`));
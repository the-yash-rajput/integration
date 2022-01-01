const express = require('express');
const app = express();

app.use(express.json());

app.use(express.static('./public'));

app.post('/jsonapi', async (req, res) => {
    const value = req.body;

    var count = Object.keys(value).length;

    if (count >= 2) {
        res.sendStatus(201);
    }
    else {
        res.sendStatus(400);
    }
});

app.listen(8000, () => {            //server starts listening for any attempts from a client to connect at port: {port}
    console.log(`Now listening on port {8000}`); 
});
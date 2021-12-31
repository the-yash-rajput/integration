const express = require('express');
const app = express();
app.use(express.json());
// app.use(express.static('./frontend'))
const path = require("path");
// app.set("frontend", path.join(__dirname, "frontend"));
var bodyParser = require('body-parser')
// var jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({ extended: true }));


app.post('/jsonapi', async (req, res) => {
    console.log("running_post");
    console.log(req.body);
    const {data} = req.body;
    try {
        console.log(data);
        var myObject=JSON.parse(data);
        console.log("true");
        var count = Object.keys(myObject).length;
        console.log(count);
        if (count >= 2) {
            res.status(201);
            res.sendFile(__dirname + '/output.html');
            // res.send('Succeeded');
        }
        else {
            res.status(400);
            res.send('statement');
        }
    } catch (e) {
        console.log("false");
        res.status(400);
        res.send('statement');
    }
    

    // res.send("sending__");
});
app.get('/', async (req, res) => {
    // console.log("running");
    // console.log(req.body);
    res.sendFile(__dirname + '/index.html');
});

app.listen(3000, () => {            //server starts listening for any attempts from a client to connect at port: {port}
    console.log(`Now listening on port {3000}`); 
});

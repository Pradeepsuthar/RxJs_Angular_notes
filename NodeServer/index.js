const express = require("express");
const cors = require('cors')

const host = "127.0.0.1";
const port = 7860;

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}

const app = express();
app.use(cors(corsOptions));

app.get("/", (req, res, next) => {
    res.end("Welcome to our API");
});

// YouTube API
app.get("/youtube", (req, res, next) => {
    // res.header('Access-Control-Allow-Origin', '*');
    // res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    // res.header('Access-Control-Allow-Headers', 'Content-Type');
    const youtubeApiJson = require("./jsonAPI's/youTubeDB")
    var response = [];
    for (var i=0; i<youtubeApiJson.length;i++){
        if(youtubeApiJson[i].snippet.title.toLowerCase().includes(req.query.title.toLowerCase())===true){
            response.push(youtubeApiJson[i].snippet)
        }
    }
    res.json(response);
});

// Zomato API
app.get("/zomato", (req, res, next) => {
    const zomatoApi = require("./jsonAPI's/api.json")
    res.json(zomatoApi);
});


// Start Server
app.listen(port, () => {
    console.log(`Server running at http://${host}:${port}/`)
});

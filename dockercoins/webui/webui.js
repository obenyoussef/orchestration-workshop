var express = require('express');
var app = express();
var redis = require('redis');

var client = redis.createClient({
  socket: {
    host: 'redis',
    port: 6379
  }
});

client.connect().catch(console.error);

client.on("error", function (err) {
    console.error("Redis error", err);
});

app.get('/', function (req, res) {
    res.redirect('/index.html');
});

app.get('/json', async function (req, res) {
    try {
        const coins = await client.hLen('wallet');
        const hashes = await client.get('hashes');
        var now = Date.now() / 1000;
        res.json({
            coins: coins,
            hashes: hashes,
            now: now
        });
    } catch (err) {
        console.error(err);
        res.status(500).send("Error retrieving data");
    }
});

app.use(express.static('files'));

var server = app.listen(80, function () {
    console.log('WEBUI running on port 80');
});
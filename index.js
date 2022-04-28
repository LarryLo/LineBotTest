const Bot = require('./bot.js');
const bot = new Bot();
var express = require('express');
var bodyParser = require('body-parser');
var https = require('https');
var app = express();

var jsonParser = bodyParser.json();

var options = {
    host: 'api.line.me',
    port: 443,
    path: '/v2/bot/message/reply',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer vCziwbIMrTuRz9iWMa59VYUYE0YfSZFizqpSR4uVTzgrIPlwRfN/MJrShTe1ZfaaxzU/Kq1hI/B2Enl/JzSsGese6xgxhIVh7MJNEi2nyNSsVpkmENX9W4DIRT/8Mua2VbHXpAJ/vQIiDq+J7L1YMAdB04t89/1O/w1cDnyilFU='
    }
}
app.set('port', (process.env.PORT || 5000));

// views is directory for all template files

app.get('/', function(req, res) {
    //  res.send(parseInput(req.query.input));
    res.send('Hello');
});

app.post('/', jsonParser, function(req, res) {
    let event = req.body.events[0];
    let type = event.type;
    let msgType = event.message.type;
    let msg = event.message.text;
    let rplyToken = event.replyToken;

    let rplyVal = null;
    console.log(msg);
    if (type == 'message' && msgType == 'text') {
        try {
            rplyVal = parseInput(rplyToken, msg);
        } catch (e) {
            rplyVal = randomReply();
        }
    }

    if (rplyVal) {
        replyMsgToLine(rplyToken, rplyVal);
    } else {
        console.log('Do not trigger');
    }

    res.send('ok');
});

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});

function replyMsgToLine(rplyToken, rplyVal) {
    let rplyObj = {
        replyToken: rplyToken,
        messages: [{
            type: "text",
            text: rplyVal
        }]
    }

    let rplyJson = JSON.stringify(rplyObj);

    var request = https.request(options, function(response) {
        console.log('Status: ' + response.statusCode);
        console.log('Headers: ' + JSON.stringify(response.headers));
        response.setEncoding('utf8');
        response.on('data', function(body) {
            console.log(body);
        });
    });
    request.on('error', function(e) {
        console.log('Request error: ' + e.message);
    })
    request.end(rplyJson);
}

function parseInput(rplyToken, inputStr) {
    return bot.parseInput(inputStr);
}

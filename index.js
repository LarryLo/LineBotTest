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
    } 
    catch(e) {
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
    messages: [
      {
        type: "text",
        text: rplyVal
      }
    ]
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
  let countStr = '';
  let msgSplitor = ' ';
  let mainMsg = inputStr.split(msgSplitor);
  let trigger = mainMsg[0].toString;
  //Kx
  if (trigger.match(/^(k)(\d+)((\+|-)\d+)?(@\d+)?(\$(\+|-)?\d+)?$/)!= null ){
    return Kx(trigger);
  }
  //gr
  if (trigger.match(/^gr/)!= null ){
    return swGr();
  }
  return countStr;
}
//SW2.0指令
function Kx(triggermsg) {
  let returnStr = 'SW2.0威力表擲骰：\n';
  let tempMatch = triggermsg.match(/^(k)(\d+)((\+|-)\d+)?(@\d+)?(\$(\+|-)?\d+)?$/)[0].toString();
  //return tempMatch.match(/k\d+/).toString();
  let k=0;
  let b=0;
  let c=10;
  let s=0;
  let sFlag=false;
  let count=0;
  let damage=0;
  let dice=0;
  let dice1=0;
  let dice2=0;
  if(tempMatch.match(/k\d+/)!=null){
    k=tempMatch.match(/k\d+/).toString();
    k=k.match(/\d+/).toString();
  }
  if(tempMatch.match(/(\+|-)\d+/)!=null){
    b=tempMatch.match(/(\+|-)\d+/)[0].toString();
    b=b.match(/-?\d+/).toString();
  }
  if(tempMatch.match(/@\d+/)!=null){
    c=tempMatch.match(/@\d+/).toString();
    c=c.match(/\d+/).toString();
  }
  if(tempMatch.match(/\$(\+|-)?\d+/)!=null){
    s=tempMatch.match(/\$(\+|-)?\d+/)[0].toString();
    if(tempMatch.match(/(\+|-)/)==null)
      sFlag=true;
    s=s.match(/-?\d+/).toString();
  }
  if(c<7){
    returnStr+='c值不能小於7喔';
    return returnStr;
  }
  if(k<0||k>100){
    returnStr+='k值只支援0~100喔';
    return returnStr;
  }
  dice1= Math.ceil(Math.random()*6);dice2= Math.ceil(Math.random()*6);
  if(sFlag){
    dice=Number(s);
    returnStr+='['+dice+']';
  }
  else{
    dice=dice1+dice2+Number(s);
    returnStr+='['+dice1+','+dice2+']';
    if(s>0)returnStr+='+'+s;
    else if(s<0)returnStr+=+s;
  }
  if(dice>12){
    damage+=powerSheet[k][9];
  }
  else if(dice>2){
    damage+=powerSheet[k][dice-3];
  }
  else{
    return returnStr+'→☆大失敗☆ 回家領50囉～';
  }
  while(dice>=c){
    count++;
    dice1= Math.ceil(Math.random()*6);
    dice2= Math.ceil(Math.random()*6);
    dice=dice1+dice2;returnStr+=',['+dice1+','+dice2+']';
    if(dice>2){
      damage+=powerSheet[k][dice-3];
    }
  }
  damage=damage+Number(b);
  if(count){
    returnStr=returnStr+'→'+count+'迴轉→'+damage;
  }
  else{
    returnStr=returnStr+'→'+damage;
  }
  return returnStr;
}

//成長骰
function swGr() {
  let returnStr = 'SW2.0成長擲骰：\n';
  returnStr+='['+swGrSheet[Math.floor(Math.random()*6)]+', '+swGrSheet[Math.floor(Math.random()*6)]+']';
  return returnStr;
}

//表格放置區
////sw2.0
var swGrSheet=['靈巧','敏捷','力量','生命','智力','精神'];
var powerSheet=[[0,0,0,1,2,2,3,3,4,4],
                [0,0,0,1,2,3,3,3,4,4],
                [0,0,0,1,2,3,4,4,4,4],
                [0,0,1,1,2,3,4,4,4,5],
                [0,0,1,2,2,3,4,4,5,5],
                [0,1,1,2,2,3,4,5,5,5],
                [0,1,1,2,3,3,4,5,5,5],
                [0,1,1,2,3,4,4,5,5,6],
                [0,1,2,2,3,4,4,5,6,6],
                [0,1,2,3,3,4,4,5,6,7],
                [1,1,2,3,3,4,5,5,6,7],
                [1,2,2,3,3,4,5,6,6,7],
                [1,2,2,3,4,4,5,6,6,7],
                [1,2,3,3,4,4,5,6,7,7],
                [1,2,3,4,4,4,5,6,7,8],
                [1,2,3,4,4,5,5,6,7,8],
                [1,2,3,4,4,5,6,7,7,8],
                [1,2,3,4,5,5,6,7,7,8],
                [1,2,3,4,5,6,6,7,7,8],
                [1,2,3,4,5,6,7,7,8,9],
                [1,2,3,4,5,6,7,8,9,10],
                [2,2,3,4,6,6,7,8,9,10],
                [2,2,3,5,6,6,7,8,9,10],
                [2,2,3,5,6,7,7,8,9,10],
                [2,3,4,5,6,7,7,8,9,10],
                [2,3,4,5,6,7,8,8,9,10],
                [2,3,4,5,6,8,8,9,9,10],
                [2,3,4,6,6,8,8,9,9,10],
                [2,3,4,6,6,8,9,9,10,10],
                [2,3,4,6,7,8,9,9,10,10],
                [2,4,4,6,7,8,9,10,10,10],
                [2,4,5,6,7,8,9,10,10,11],
                [3,4,5,6,7,8,10,10,10,11],
                [3,4,5,6,8,8,10,10,10,11],
                [3,4,5,6,8,9,10,10,11,11],
                [3,4,5,7,8,9,10,10,11,12],
                [3,5,5,7,8,9,10,11,11,12],
                [3,5,6,7,8,9,10,11,12,12],
                [3,5,6,7,8,10,10,11,12,13],
                [4,5,6,7,8,10,11,11,12,13],
                [4,5,6,7,9,10,11,11,12,13],
                [4,6,6,7,9,10,11,12,12,13],
                [4,6,7,7,9,10,11,12,13,13],
                [4,6,7,8,9,10,11,12,13,14],
                [4,6,7,8,10,10,11,12,13,14],
                [4,6,7,9,10,10,11,12,13,14],
                [4,6,7,9,10,10,12,13,13,14],
                [4,6,7,9,10,11,12,13,13,15],
                [4,6,7,9,10,12,12,13,13,15],
                [4,6,7,10,10,12,12,13,14,15],
                [4,6,8,10,10,12,12,13,15,15],
                [5,7,8,10,10,12,12,13,15,15],
                [5,7,8,10,11,12,12,13,15,15],
                [5,7,9,10,11,12,12,14,15,15],
                [5,7,9,10,11,12,13,14,15,16],
                [5,7,10,10,11,12,13,14,16,16],
                [5,8,10,10,11,12,13,15,16,16],
                [5,8,10,11,11,12,13,15,16,17],
                [5,8,10,11,12,12,13,15,16,17],
                [5,9,10,11,12,12,14,15,16,17],
                [5,9,10,11,12,13,14,15,16,18],
                [5,9,10,11,12,13,14,16,17,18],
                [5,9,10,11,13,13,14,16,17,18],
                [5,9,10,11,13,13,15,17,17,18],
                [5,9,10,11,13,14,15,17,17,18],
                [5,9,10,12,13,14,15,17,18,18],
                [5,9,10,12,13,15,15,17,18,19],
                [5,9,10,12,13,15,16,17,19,19],
                [5,9,10,12,14,15,16,17,19,19],
                [5,9,10,12,14,16,16,17,19,19],
                [5,9,10,12,14,16,17,18,19,19],
                [5,9,10,13,14,16,17,18,19,20],
                [5,9,10,13,15,16,17,18,19,20],
                [5,9,10,13,15,16,17,19,20,21],
                [6,9,10,13,15,16,18,19,20,21],
                [6,9,10,13,16,16,18,19,20,21],
                [6,9,10,13,16,17,18,19,20,21],
                [6,9,10,13,16,17,18,20,21,22],
                [6,9,10,13,16,17,19,20,22,23],
                [6,9,10,13,16,18,19,20,22,23],
                [6,9,10,13,16,18,20,21,22,23],
                [6,9,10,13,17,18,20,21,22,23],
                [6,9,10,14,17,18,20,21,22,24],
                [6,9,11,14,17,18,20,21,23,24],
                [6,9,11,14,17,19,20,21,23,24],
                [6,9,11,14,17,19,21,22,23,24],
                [7,10,11,14,17,19,21,22,23,25],
                [7,10,12,14,17,19,21,22,24,25],
                [7,10,12,14,18,19,21,22,24,25],
                [7,10,12,15,18,19,21,22,24,26],
                [7,10,12,15,18,19,21,23,25,26],
                [7,11,13,15,18,19,21,23,25,26],
                [7,11,13,15,18,20,21,23,25,27],
                [8,11,13,15,18,20,22,23,25,27],
                [8,11,13,16,18,20,22,23,25,28],
                [8,11,14,16,18,20,22,23,26,28],
                [8,11,14,16,19,20,22,23,26,28],
                [8,12,14,16,19,20,22,24,26,28],
                [8,12,15,16,19,20,22,24,27,28],
                [8,12,15,17,19,20,22,24,27,29],
                [8,12,15,18,19,20,22,24,27,30]];
//表格結束
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
  let msgSplitor = (/\S+/ig);
  let mainMsg = inputStr.match(msgSplitor);
  let trigger = mainMsg[0].toString().toLowerCase(); 
  //Kx
  if (trigger.match(/^(k)(\d+)((\+|-)\d+)?(@\d+)?(\$(\+|-)?\d+)?$/)!= null ){
    return Kx(trigger);
  }
  //gr
  if (trigger.match(/^gr$/)!= null ){
    return swGr();
  }
  //峻崴
  if (trigger.match(/^峻崴$/)!= null ){
    return inputStr;
  }
  //基本骰組xdx+a>b
  if (trigger.match(/^(\d+d\d+|\d+d)((\+|-)\d+)?((>=|<=|=|>|<)\d+)?$/)!= null ){
    return xDx(inputStr);
  }
  //基本運算
  if (trigger.match(/^(\d|\(|\)|\+|-|\*|\/)+$/)!= null && trigger.match(/\D/)!=null){
    return claculater(inputStr);
  }
  return countStr;
}

//骰組function
////SW2.0function開始
//////sw威力表
function Kx(inputStr) {
  let returnStr = 'SW2.0威力表擲骰：';
  let tempMatch = inputStr.match(/^(k)(\d+)((\+|-)\d+)?(@\d+)?(\$(\+|-)?\d+)?$/)[0].toString();
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

//////成長骰
function swGr() {
  let returnStr = 'SW2.0成長擲骰：';
  returnStr+='['+swGrSheet[Math.floor(Math.random()*6)]+', '+swGrSheet[Math.floor(Math.random()*6)]+']';
  return returnStr;
}
////SW2.0function結束
////基本運算
function claculater(inputStr){
  let returnStr = '基本運算：';
  let tempMatch=inputStr.match(/^(\d|\(|\)|\+|-|\*|\/)+/)[0].toString();
  let calError=(/((\((\+|-|\*|\/))|\d\(|((\+|-|\*|\/)\))|\)\d|((\+|-|\*|\/)(\+|-|\*|\/)))/);
  if(tempMatch.match(calError) != null){
    return undefined;
  }
  while(tempMatch.match(/\([^(]+\)/) != null){
    let target=tempMatch.match(/\([^(]+\)/)[0].toString();
    tempMatch=tempMatch.replace(target,claculate(target));
  }
  tempMatch=claculate(tempMatch);
  if(tempMatch.match(/[^0-9]/)){
    return undefined;
  }
  returnStr += tempMatch;
  return returnStr;
}
function claculate(inputStr){
  let tempMatch=inputStr.match(/[^()]+/).toString();
  //乘
  while(tempMatch.match(/\d+\*\d+/)!=null){
    //b[0]*b[1]=a
    let a = tempMatch.match(/\d+\*\d+/).toString();
    let b = a.match(/\d+/g);
    let c = b[0]*b[1];
    tempMatch=tempMatch.replace(a,c.toString());
  }
  //除
  while(tempMatch.match(/\d+\/\d+/)!=null){
    //b[0]/b[1]=a
    let a = tempMatch.match(/\d+\/\d+/).toString();
    let b = a.match(/\d+/g);
    let c = Math.floor(b[0]/b[1]);
    tempMatch=tempMatch.replace(a,c.toString());
  }
  //加
  while(tempMatch.match(/\d+\+\d+/)!=null){
    //b[0]+b[1]=a
    let a = tempMatch.match(/\d+\+\d+/).toString();
    let b = a.match(/\d+/g);
    let c = Number(b[0])+Number(b[1]);
    tempMatch=tempMatch.replace(a,c.toString());
  }
  //減
  while(tempMatch.match(/\d+-\d+/)!=null){
    //b[0]-b[1]=a
    let a = tempMatch.match(/\d+-\d+/).toString();
    let b = a.match(/\d+/g);
    let c = b[0]-b[1];
    tempMatch=tempMatch.replace(a,c.toString());
  }
  return tempMatch;
}

////基本骰組
function xDx(inputStr){
  let returnStr='基本骰組：[';
  let answer=0;
  
  //xDx
  if(inputStr.match(/\d+d\d+/)!=null){
    let tempMatch=inputStr.match(/\d+d\d+/).toString();
    let a=tempMatch.match(/\d+/g);
    for(i=0;i<a[0];i++){
      let dice=Math.ceil(Math.random()*a[1]);
      answer+=dice;
      if(i>0) returnStr+=',';
      returnStr+=dice.toString();
    }
    returnStr+=']';
  }
  //xD
  else if(inputStr.match(/\d+d/)!=null){
    let tempMatch=inputStr.match(/\d+d/).toString();
    let a=tempMatch.match(/\d+/g);    
    for(i=0;i<a[0];i++){
      let dice=Math.ceil(Math.random()*6);
      answer+=dice;
      if(i>0) returnStr+=',';
      returnStr+=dice.toString();
    }
    returnStr+=']';
  }
  //Dx
  else if(inputStr.match(/d\d+/)!=null){
    return undefined;
  }
  if(inputStr.match(/\+\d+/)!=null){
    let tempMatch=inputStr.match(/\+\d+/).toString();
    let a=tempMatch.match(/\d+/g);
    answer+=Number(a[0]);
    returnStr+='+'+a[0].toString();
  }
  if(inputStr.match(/-\d+/)!=null){
    let tempMatch=inputStr.match(/-\d+/).toString();
    let a=tempMatch.match(/\d+/g);
    answer-=Number(a[0]);
    returnStr+='-'+a[0].toString();
  }
  returnStr+=' = '+answer.toString();
  return returnStr;
}


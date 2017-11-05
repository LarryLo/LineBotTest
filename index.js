var version='1.05 城鎮beta';
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
var swRmSheet1=['有個領主'
               ,'一把守護之劍'
               ,'一批走私貨品'
               ,'一個德雷克'
               ,'一隊暗影傭兵團'
               ,'一隊貿易商旅'
               ,'一個神官'
               ,'一堆狗頭人'
               ,'三隻伯格妖'
               ,'一個精靈'
               ,'一群精靈'
               ,'一個矮人'
               ,'一群矮人'
               ,'一個人類'
               ,'一群人類'
               ,'一個草原妖精'
               ,'一群草原妖精'
               ,'一個塔比特'
               ,'一群長頸巨龍'
               ,'一群哥布林'
               ,'一個符民'
               ,'一個未啟動的符民'
               ,'兩隻巴西利斯克'
               ,'一大群人馬'
               ,'一支蠻族軍隊'
               ,'一個龍人'
               ,'一個慧人'
               ,'一個女武神'
               ,'一個古貓人'
               ,'一隻兔子'
               ,'一個吟遊詩人'
               ,'三萬伯格妖'
               ,'三億個龍人'
               ,'一個公會長'
               ,'一批輕騎兵'
               ,'一個傭兵團'
               ,'一批重步兵'
               ,'一個國王'
               ,'兩個公爵'
               ,'三個伯爵'
               ,'四個男爵'
               ,'五個子爵'
               ,'六個侯爵'
               ,'七個小矮人'
               ,'八個老太婆'
               ,'九個太陽傳教士'
               ,'一個手持雙刀的輕戰士'
               ,'一個手無縛雞之力的拳鬥士'
               ,'一個身穿重裝鎧甲的法師'
               ,'某個工具人'];
var swRmSheet2=['在宴會上'
               ,'在冒險者店裡'
               ,'在森林裡'
               ,'在河邊'
               ,'在娼館裡'
               ,'在路邊'
               ,'在睡覺時'
               ,'在領主宅底'
               ,'在魔動文明遺跡中'
               ,'在一座小島上'
               ,'在隔壁城鎮'
               ,'在附近的村莊'
               ,'在平原上'
               ,'在迷宮裡'
               ,'在城牆上'
               ,'在船上'
               ,'在發呆時'
               ,'在蒐集戰利品時'
               ,'在貧民窟裡'
               ,'在攻擊的時候'
               ,'在洗澡之前，脫光了以後'
               ,'在櫃台前'
               ,'在異空間'
               ,'在戰場中央'
               ,'在山頂上'
               ,'在沙漠'
               ,'在沼澤'
               ,'在極寒之地'
               ,'在餐廳'
               ,'在沙灘上'
               ,'在湖裡'
               ,'在洞窟'
               ,'在王宮'
               ,'在莊園裡'
               ,'在旅館'
               ,'在冒險者公會'
               ,'在酒館'
               ,'在教堂'
               ,'在賭場'
               ,'在競技場'
               ,'在火山'
               ,'在冰河'
               ,'在哨所中'
               ,'在堡壘裡'
               ,'在軍營'
               ,'在一座高塔上面'
               ,'在內衣堆上'];
var swRmSheet3=['被吃掉了'
               ,'爆炸了'
               ,'被藏起來了'
               ,'失蹤了'
               ,'喝醉了'
               ,'打起來了'
               ,'自殺了'
               ,'佔領該處了'
               ,'到處施放魔法'
               ,'準備睡覺了'
               ,'販賣戰利品'
               ,'脫手裝備中'
               ,'開始遊行了'
               ,'展開攻擊了'
               ,'被襲擊了'
               ,'被偷走了'
               ,'當上領主了'
               ,'當上神官了'
               ,'四處搜索著'
               ,'騎著魔動機車'
               ,'找到了迷宮入口'
               ,'看到了貴族的醜聞'
               ,'孵了一顆蛋'
               ,'被拿去料理了'
               ,'下海了'
               ,'發起革命'
               ,'膝蓋上中了一箭'
               ,'組成了聯邦'
               ,'協議停戰了'
               ,'叛亂了'
               ,'得了重病'
               ,'被埋伏了'
               ,'開始無差別殺人'
               ,'解放了奴隸'
               ,'脫褲子放屁'
               ,'得了不治之症'
               ,'暴斃了'
               ,'腿斷了'
               ,'瞎了'
               ,'唱起歌來'
               ,'無法生育了'
               ,'受到了詛咒'
               ,'失智了'
               ,'精神失常了'
               ,'撿到了古文明的神奇物品'
               ,'謀殺行動暴露了'
               ,'偷情被發現了'
               ,'去朝聖了'
               ,'蓋了一座實驗室'
               ,'重要的東西被偷走了'
               ,'使用左右開弓打出了1000點傷害'
               ,'用守護吃下了全部的傷害還沒有死'
               ,'用石頭打死一個伯格妖'
               ,'用內褲悶死一隻哥布林'];
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
  //help
  if (trigger.match(/^(sw)?(help|幫助)$/)!= null ){
    return help(trigger);
  }
  //test
  if (trigger.match(/^$/)!= null ){
    return srand(trigger);
  }
  //SW2.0 威力骰
  if (trigger.match(/^(k)(\d+)((\+|-)\d+)?(@\d+)?(\$(\+|-)?\d+)?$/)!= null ){
    return Kx(trigger);
  }
  //SW2.0 成長骰
  if (trigger.match(/^gr$/)!= null ){
    return swGr();
  }
  //SW2.0 大失敗表
  if (trigger.match(/^swft$/)!= null ){
    return swFt();
  }
  //SW2.0 纏繞表
  if (trigger.match(/^swtt$/)!= null ){
    return swTt();
  }
  //SW2.0 流言表
  if (trigger.match(/^swrm$/)!= null ){
    return swRm();
  }
  //忍神判定
  if (trigger.match(/^sg(\+\d+|-\d+)?>=\d+(#\d+)?(@\d+)?$/)!= null ){
    return sg(trigger);
  }
  //基本骰組 xdx+a>b
  if (trigger.match(/^(\d+d\d+|\d+d)((\+|-)\d+)?((>=|<=|=|>|<)\d+)?$/)!= null ){
    return xDx(trigger);
  }
  //基本骰組 d66
  if (trigger.match(/^d66$/)!= null ){
    return d66();
  }  
  /*//基本運算(暫時關閉)
  if (trigger.match(/^(\d|\(|\)|\+|-|\*|\/)+$/)!= null && trigger.match(/\D/)!=null){
    return claculater(inputStr);
  }*/
  //雜項
  if (trigger.match(/^(峻崴|霍普)$/)!= null ){
    return GinWay();
  }  
  if (trigger.match(/^泡泡$/)!= null ){
    return '泡泡！泡泡！更多泡泡！';
  }  
  if (trigger.match(/^複雜度$/)!= null ||
      trigger.match(/^O\(\)$/)!= null){
    return '☆逼歐恩平方☆';
  }
  return countStr;
}

//骰組function
////seed random
function srand(seed_o){
  //
  try{
  //
  let seed=srand(1);
  if(seed.match(/\D/)!=null){
    for(let i=0;i<seed.length;i++){
      seed=Number(seed)+Number(seed_o.charCodeAt(i));
      seed=srand(seed);
    }
    return seed;
  }
  else{
    seed='0.'+Math.sin(seed_o).toString().substr(6);
    return seed.toString();  
  }
  //
  }
  catch(error){
  return error.toString();
  }
  //
}
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
  let bool=false;
  
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
  if(inputStr.match(/(>=|<=|=|>|<)\d+/)){
    let tempMatch=inputStr.match(/(>=|<=|=|>|<)\d+/).toString();
    let a=tempMatch.match(/\d+/g);
    if(tempMatch.match(/>/) && Number(answer)>Number(a[0]))
      returnStr+='→成功';
    else if(tempMatch.match(/</) && Number(answer)<Number(a[0]))
      returnStr+='→成功';
    else if(tempMatch.match(/=/) && Number(answer)==Number(a[0]))
      returnStr+='→成功';
    else returnStr+='→失敗';
  }
  return returnStr;
}
////d66骰
function d66(){
  let returnStr='基本骰組：'+Math.ceil(Math.random()*6)+Math.ceil(Math.random()*6);
  return returnStr;
}
////SW2.0 function 開始
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
    if(s.match(/(\+|-)/)==null)
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
  dice1= Math.ceil(Math.random()*6);
  dice2= Math.ceil(Math.random()*6);
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
//////大失敗表
function swFt() {
  let returnStr = 'SW2.0大失敗表：';
  let swFtSheet=['額外擲兩次大失敗表，兩方效果皆適用（不會累加），另外本次大失敗額外增加50點經驗'
                ,'傷害增加攻擊者的「劍之碎片」點'
                ,'傷害增加攻擊者的「等級」點'
                ,'骰兩次傷害骰，選擇較高者'
                ,'傷害增加為原本的兩倍'
                ,'防護點無效化'];
  returnStr+=swFtSheet[Math.floor(Math.random()*6)];
  return returnStr;
}
//////纏繞表
function swTt() {
  let returnStr = 'SW2.0纏繞表：';
  let swTtSheet=['頭或臉：使用牙齒的命中判定-2，魔法行使判定-2'
                ,'武器：武器無法使用，盾牌加值無效化'
                ,'手腕：命中判定-2，盾牌加值無效化'
                ,'腳：迴避判定-2'
                ,'身體：所有行為判定-1'
                ,'特殊：使用該部位的行為判定-1，失去該部位加值'];
  returnStr+=swTtSheet[Math.floor(Math.random()*6)];
  return returnStr;
}
//////流言表
function swRm() {
  let returnStr = 'SW2.0流言：';
  returnStr+=swRmSheet1[Math.floor(Math.random()*swRmSheet1.length)];
  returnStr+=swRmSheet2[Math.floor(Math.random()*swRmSheet2.length)];
  returnStr+=swRmSheet3[Math.floor(Math.random()*swRmSheet3.length)];
  return returnStr;
}
////SW2.0 function 結束
////忍神 function 開始
//////sg基本判定
function sg(inputStr) {
  let returnStr = '忍神骰組：[';
  let tempMatch = inputStr.match(/^sg(\+\d+|-\d+)?>=\d+(#\d+)?(@\d+)?$/)[0].toString();
  let dice=0;
  let ans=0;
  let ans2=0;
  let t=0;
  let b=0;
  let f=2;
  let s=12;
  if(tempMatch.match(/sg>=\d+/)!=null){
    t=tempMatch.match(/sg>=\d+/).toString();
    t=t.match(/\d+/).toString();
  }
  if(tempMatch.match(/(\+|-)\d+/)!=null){
    b=tempMatch.match(/(\+|-)\d+/)[0].toString();
  }
  if(tempMatch.match(/#\d+/)!=null){
    f=tempMatch.match(/#\d+/).toString();
    f=f.match(/\d+/).toString();
  }
  if(tempMatch.match(/@\d+/)!=null){
    s=tempMatch.match(/@\d+/).toString();
    s=s.match(/\d+/).toString();
  }
  if(Number(s)<=Number(f)){
    s=Number(f)+1;
    s=s.toString();
  }
  dice=Math.ceil(Math.random()*6);
  ans+=dice;
  returnStr+=dice+',';
  dice=Math.ceil(Math.random()*6);
  ans+=dice;
  returnStr+=dice+']';
  ans2=ans+Number(b);
  if(Number(b)!=0){
    returnStr+=b;
  }
  returnStr+='='+ans2;
  if(ans>=s){
    returnStr+='→☆大成功☆';
    return returnStr;
  }
  else if(ans<=f){
    returnStr+='→★大失敗★ 下次見～';
  }
  else if(ans2>=t){
    returnStr+='→成功';
  }
  else{
    returnStr+='→失敗';
  }
  return returnStr;
}
////忍神 function 結束
////峻崴骰
function GinWay() {
  let GWSheet=['壁虎','仙人掌','30歲','烤塑膠','嘴對嘴','尾頭彈']
  return GWSheet[Math.floor(Math.random()*GWSheet.length)];
}
function help(inputStr){
  let returnStr='';
  if(inputStr.match(/sw/)!=null){
    returnStr+='======================\n';
    returnStr+='SW2.0骰組\n';
    returnStr+='======================\n';
    returnStr+='威力骰 Kn+n@n$n\n';
    returnStr+='Kn為威力 威力10即為K10\n';
    returnStr+='@n為c值 @8即為c值8\n';
    returnStr+='$為骰目更改 $±n為增加/減少骰目 $n為指定骰目\n';
    returnStr+='Ex：K10+3@7$+1\n';
    returnStr+='\n';
    returnStr+='成長骰 gr\n';
    returnStr+='\n';
    returnStr+='大失敗表 swft\n';
    returnStr+='\n';
    returnStr+='纏繞表 swTt\n';
    returnStr+='\n';
    returnStr+='自製流言表 swTt\n';
    returnStr+='在PC使用探聽判定或GM沒梗時使用\n';
    returnStr+='內容「非常」有特色 請小心服用\n';
    returnStr+='\n';
  }
  else{
    returnStr+='泡泡！泡泡！更多泡泡！\n';
    returnStr+='泡沫排序 ver'+version+' 現正運作中☆\n';
    returnStr+='\n';
    returnStr+='======================\n';
    returnStr+='基本骰組\n';
    returnStr+='======================\n';
    returnStr+='基本骰 nDn+n>n\n';
    returnStr+='直接輸入nD則為nD6\n';
    returnStr+='大小判斷支援[ > , < , >= , <= , = ]五種\n';
    returnStr+='Ex：2D, 2D6, 3D4-1>=3\n';
    returnStr+='\n';
    returnStr+='d66骰 d66\n';
    returnStr+='\n';
    returnStr+='======================\n';
    returnStr+='SW2.0骰組\n';
    returnStr+='======================\n';
    returnStr+='詳見 swhelp\n';
    returnStr+='\n';
    returnStr+='======================\n';
    returnStr+='忍神骰組\n';
    returnStr+='======================\n';
    returnStr+='判定骰 sg+n>=n#n@n\n';
    returnStr+='>=n為成功值 #n為大失敗值 @n為大成功值\n';
    returnStr+='Ex：sg>=6,sg+2>=7#4@10\n';
    returnStr+='\n';
    returnStr+='-----------------------\n';
    returnStr+='泡沫排序 dice bot\n';
    returnStr+='以 LarryLo 的 line bot 為基底增加骰組而成\n';
    returnStr+='\n';
    returnStr+='製作者為界面活性\n';
    returnStr+='如果有問題或建議歡迎來聯絡我喔\n';
  }
  return returnStr;
}

var version='1.08beta tw2';
//表格放置區
////sw2.0
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
  //let trigger2 = mainMsg[1].toString().toLowerCase(); 
  //help
  if (trigger.match(/^(sw|sg)?(help|幫助)$/)!= null ){
    return help(trigger);
  }
  //SW2.0 威力骰
  if (trigger.match(/^(k)(\d+)((\+|-)\d+)?(@\d+)?(\$(\+|-)?\d+)?(gf)?$/)!= null ){
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
  //SW2.0 城鎮生成
  if (trigger.match(/^swtw/)!= null ){
    return swTw(trigger);
  }
  //忍神判定
  if (trigger.match(/^sg(\+\d+|-\d+)?>=\d+(#\d+)?(@\d+)?$/)!= null ){
    return sg(trigger);
  }
  //忍神情感表
  if (trigger.match(/^sget$/)!= null ){
    return sgEt();
  }
  //忍神大失敗表
  if (trigger.match(/^sgft$/)!= null ){
    return sgFt();
  }
  //忍神變調表
  if (trigger.match(/^sgwt$/)!= null ){
    return sgWt();
  }
  //忍神戰國變調表
  if (trigger.match(/^sggwt$/)!= null ){
    return sgGWt();
  }
  //忍神場景表
  if (trigger.match(/^sgst$/)!= null ){
    return sgSt();
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
  if (trigger.match(/投人機$/)!= null ){
    return terbuchet(trigger);
  }
  if (trigger.match(/^霍普rm$/)!= null ){
    return GinWayRm();
  }
  if (trigger.match(/^\\泡泡\/$/)!= null ){
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
function srand(seed){
  seed='0.'+Math.sin(seed).toString().substr(6);
  return Number(seed);
}
////strToSeed
function strToSeed(inputStr){
  let seed=7;
  for(let i=0;i<inputStr.length;i++){
  	seed=seed/7*inputStr.charCodeAt(i);
  }
  return Number(seed);
}
////extract
function extract(rate,num){
  let sum=0;
  num=num*rate.reduce(function(a,b){return a+b;},0);
  for(let i=0;i<rate.length;i++){
    sum+=rate[i];
    if(sum>num) return i;
  }
  return undefined;
}
////extractStr
function extractStr(rate,num){
  let sum=0;
  num=num*rate.reduce(function(a,b){return a+b[0];},0);
  for(let i=0;i<rate.length;i++){
    sum+=rate[i][0];
    if(sum>num) return rate[i][1];
  }
  return undefined;
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
    for(let i=0;i<a[0];i++){
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
    for(let i=0;i<a[0];i++){
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
  let tempMatch = inputStr.match(/^(k)(\d+)((\+|-)\d+)?(@\d+)?(\$(\+|-)?\d+)?(gf)?$/)[0].toString();
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
  if(c<3){
    //returnStr+='c值不能小於2喔';
    //return returnStr;
    c=3;
  }
  if(k<0||k>100){
    returnStr+='k值只支援0~100喔';
    return returnStr;
  }
  dice1= Math.ceil(Math.random()*6);
  if(tempMatch.match(/gf$/)!=null)  dice2=dice1;
  else dice2= Math.ceil(Math.random()*6);
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
    if(tempMatch.match(/gf$/)!=null)  dice2=dice1;
    else dice2= Math.ceil(Math.random()*6);
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
  let sheet=['靈巧','敏捷','力量','生命','智力','精神'];
  returnStr+='['+sheet[Math.floor(Math.random()*6)]+', '+sheet[Math.floor(Math.random()*6)]+']';
  return returnStr;
}
//////大失敗表
function swFt() {
  let returnStr = 'SW2.0大失敗表：';
  let sheet=['[1]額外擲兩次大失敗表，兩方效果皆適用（不會累加），另外本次大失敗額外增加50點經驗'
            ,'[2]傷害增加攻擊者的「劍之碎片」點'
            ,'[3]傷害增加攻擊者的「等級」點'
            ,'[4]骰兩次傷害骰，選擇較高者'
            ,'[5]傷害增加為原本的兩倍'
            ,'[6]防護點無效化'];
  returnStr+=sheet[Math.floor(Math.random()*6)];
  return returnStr;
}
//////纏繞表
function swTt() {
  let returnStr = 'SW2.0纏繞表：';
  let sheet=['[1]頭或臉：使用牙齒的命中判定-2，魔法行使判定-2'
            ,'[2]武器：武器無法使用，盾牌加值無效化'
            ,'[3]手腕：命中判定-2，盾牌加值無效化'
            ,'[4]腳：迴避判定-2'
            ,'[5]身體：所有行為判定-1'
            ,'[6]特殊：使用該部位的行為判定-1，失去該部位加值'];
  returnStr+=sheet[Math.floor(Math.random()*6)];
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
//////城鎮生成
function swTw(inputStr){
  inputStr=inputStr.replace(/^swtw/,'');
  let seedO=strToSeed(inputStr);
  let seed=seedO;
  let townLvSheet=['小型村','中型村','小型鎮','中型鎮','大型鎮','小型城市','中型城市','大型城市（經濟樞紐級）','巨型城都（王城級）','超巨型城都'];
  let popuSheet=[25,80,200,500,1000,2000,5000,10000,20000,60000];
  //信仰組成機率:村莊多為單一、城鎮較為多樣
  let riligionComRate=[[9,4,1],[3,2,1],[1,1,1]];
  //信仰組成:單一、雙重、多重
  let riligionComSheet=[[90],[50,40],[30,20,20,10]];
  let riligionSheet=[[4,'始祖神'],[1,'太陽神'],[1,'賢神'],[1,'妖精神'],[1,'炎武帝'],
                     [1,'騎士神'],[1,'月神'],[1,'酒幸神'],[1,'慈雨神'],[1,'隱密神'],
                     [1,'水神'],[1,'融合神'],[1,'纏衣神'],[1,'劍神'],[1,'韋馱天'],
                     [1,'器械神'],[1,'刃神'],[1,'鐵鎚神'],[1,'龍帝神'],[1,'韋馱天']];
  
  let level=0;
  if(inputStr.match(/村$/)!=null) level=Math.floor(srand(seed)*2);
  else if(inputStr.match(/鎮$/)!=null) level=2+Math.floor(srand(seed)*3);
  else if(inputStr.match(/城$/)!=null) level=5+Math.floor(srand(seed)*4.2);
  else level=Math.floor(srand(seed)*9.2);
  let population=Math.floor(popuSheet[level]*(2+srand(++seed)+srand((seed++)+1))/3);
  
  let returnStr='SW2.0城鎮：'+inputStr+'\n';
  returnStr+='規模：'+townLvSheet[level]+' 約'+population+'人\n';
  
  let type=0;
  if(level<2) type=0;
  else if(level<5) type=1;
  else if(level<10) type=2;
  
  let rCType=extract(riligionComRate[type],srand(++seed));
  rCType=riligionComSheet[rCType];
  
  //信仰組成
  //riligionComType處理
  randNum=srand(seed+3);
  for(let i=0;i<rCType.length;i++){
    rCType[i]=rCType[i]+Math.floor(srand(++seed)*6)-Math.floor(srand((seed++)+1)*6);
  }
  rCType=rCType.sort(function(a,b){return b-a}); //排序信仰
  rCType.push(100-rCType.reduce(function(a,b){return a+b;},0)); //加入其他信仰
  //riligion處理
  let riligion=[];
  for(let i=0;i<rCType.length-1;i++){
    let r=extractStr(riligionSheet,srand(++seed));
    riligion.push(r);
  }
  riligion.push('其他');
  
  returnStr+='信仰組成：';
  for(let i=0;i<rCType.length;i++){
    returnStr+=riligion[i]+'：'+rCType[i]+'%  ';
  }
  
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
function sgFt() {
  let returnStr = '忍神大失敗表：';
  let sheet=['[1]不太對勁！該輪所有行為判定受到-1修正。'
            ,'[2]大事不妙！損失一個任意忍具。'
            ,'[3]情報洩漏！你以外的角色可以知曉你的【祕密】或【居所】任意一個。'
            ,'[4]太大意了！術式操作失敗，任選【生命力】流失一點。'
            ,'[5]敵人的陰謀？落入陷阱中，隨機受到一個變調。'
            ,'[6]呼，真是危險，還好沒有發生什麼事。'];
  returnStr+=sheet[Math.floor(Math.random()*6)];
  return returnStr;
}
function sgEt() {
  let returnStr = '忍神感情表：';
  let sheet=['[1]共感＼不信'
            ,'[2]友情＼憤怒'
            ,'[3]愛情＼忌妒'
            ,'[4]忠誠＼侮辱'
            ,'[5]憧憬＼自卑'
            ,'[6]狂信＼殺意'];
  returnStr+=sheet[Math.floor(Math.random()*6)];
  return returnStr;
}
function sgWt() {
  let returnStr = '忍神變調表：';
  let sheet=['[1]故障：所有的忍具變為無法使用，每輪結束時可以進行【絡繰術】判定嘗試解除此狀態。'
            ,'[2]麻痺：從已學得的特技中隨機選擇1個，受到此變調影響時該特技視為未習得狀態，每輪結束時可以進行【身體操術】判定嘗試解除此狀態。'
            ,'[3]重傷：進行命中、情報、感情判定時受到1點接近戰傷害，每輪結束時可以進行【生存術】判定嘗試解除此狀態。本效果不可累積。'
            ,'[4]行蹤不明：主要階段時、不是自己主場的場景變為無法出場，每輪結束時可以進行【經濟力】判定嘗試解除此狀態。'
            ,'[5]忘卻：從已獲得感情中隨機選擇1個，受到此變調影響時該感情視為未獲得狀態，每輪結束時可以進行【記憶術】判定嘗試解除此狀態。'
            ,'[6]詛咒：從已習得的忍法中隨機選擇1個，受到此變調影響時該忍法視為未習得狀態，每輪結束時可以進行【咒術】判定嘗試解除此狀態。'];
  returnStr+=sheet[Math.floor(Math.random()*6)];
  return returnStr;
}
function sgGWt() {
  let returnStr = '忍神戰國變調表：';
  let sheet=['[1]催眠：戰鬥開始時擁有此變調或得到此變調的當下，若不減少1點【生命力】則立刻從戰鬥中脫落，每輪結束時可以進行【意氣】判定嘗試解除此狀態。本效果不可累積。'
            ,'[2]火達摩：受到本變調影響者大失敗值+1、且大失敗時受到1點【接近戰傷害】，場景結束時自動解除。疊加後大失敗值與傷害值都會增加。'
            ,'[3]猛毒：若受到了本變調，回合結束丟1D6(猛毒和飢餓共用此判定)，奇數則減少1點【生命力】，每輪結束可進行【毒術】判定嘗試解除此狀態。疊加後傷害值會增加。'
            ,'[4]飢餓：若受到了本變調，回合結束時1D6(猛毒和飢餓共用此判定)，偶數則減少1點【生命力】，每輪結束可進行【兵糧術】判定嘗試解除此狀態。疊加後傷害值會增加。'
            ,'[5]殘刃：若受到了本變調影響，回復判定、忍法、忍具與背景的回復生命效果無效化，每輪結束時可以進行【拷問術】判定嘗試解除此狀態。本效果不可累積。'
            ,'[6]野望：命中判定+1，除此之外的所有判定-1，每輪結束時可以進行【憑依術】判定嘗試解除此狀態。本效果不可累積。'];
  returnStr+=sheet[Math.floor(Math.random()*6)];
  return returnStr;
}
function sgSt() {
  let returnStr = '忍神場景表：';
  let sheet=['[2]周圍充滿了血的氣息，似乎有進行過戰鬥的氣息。不對，戰鬥還在繼續嗎？'
            ,'[3]這是…夢嗎？那是本應結束了的過去，但確無法忘懷。'
            ,'[4]眺望著眼前展開的城市。在這裡的話就可以將一街一物盡收眼底…'
            ,'[5]像是世界末日般的黑暗。黑暗之中你們在低低私語。'
            ,'[6]度過了悠閒的時光，幾乎要忘卻影之世界的一切。'
            ,'[7]空氣清新的森林裡，鳥兒婉轉歌唱，清風拂過樹葉嘩嘩地作響。'
            ,'[8]人群如山海湧動而喧囂，毫不知曉影之世界的單純人們高談闊論，喋喋不休。'
            ,'[9]大雨傾盆。人們慌張的奔向避雨之所。'
            ,'[10]大風呼嘯。頭髮跟衣服被吹的搖曳。似乎有什麼事要發生了…'
            ,'[11]醉漢大吼著，攬客聲呼喚著，女人們嬌聲著，這是繁華街道常見的畫面。'
            ,'[12]太陽的微笑包裹著你，那對於影之世界的住民來說太過於耀眼。'];
  returnStr+=sheet[Math.floor(Math.random()*6)+Math.floor(Math.random()*6)];
  return returnStr;
}
////忍神 function 結束
////雜項
//////峻崴骰
function GinWay() {
  let GWSheet=['壁虎','仙人掌','30歲','烤塑膠','嘴對嘴','尾頭彈'];
  return GWSheet[Math.floor(Math.random()*GWSheet.length)];
}
//////投人機
function terbuchet(inputStr) {
  let returnStr='咻～！';
  if(inputStr.match(/(活性|界面|^投人機$)/)!=null) return undefined;
  returnStr+=inputStr.replace(/投人機$/, '飛了');
  returnStr+=Math.pow(10,Math.random()*8-2).toFixed(2)+'公尺！';
  return returnStr;
}
//////峻崴流言表
function GinWayRm() {
  let returnStr = 'SW2.0流言：';
  returnStr+='霍普';
  returnStr+=swRmSheet2[Math.floor(Math.random()*swRmSheet2.length)];
  returnStr+=swRmSheet3[Math.floor(Math.random()*swRmSheet3.length)];
  return returnStr;
}
////雜項結束
////幫助
function help(inputStr){
  let returnStr='';
  if(inputStr.match(/sw/)!=null){
    returnStr+='======================\n';
    returnStr+='SW2.0骰組\n';
    returnStr+='======================\n';
    returnStr+='威力骰 Kn+n@n$nGF\n';
    returnStr+='Kn為威力 威力10即為K10\n';
    returnStr+='@n為c值 @8即為c值8\n';
    returnStr+='$為骰目更改 $±n為增加/減少骰目 $n為指定骰目\n';
    returnStr+='GF為極限命運\n';
    returnStr+='Ex：K10+3@7$+1\n';
    returnStr+='\n';
    returnStr+='成長骰 gr\n';
    returnStr+='大失敗表 swFt\n';
    returnStr+='纏繞表 swTt\n';
    returnStr+='自製流言表 swRm\n';
    returnStr+='在PC使用探聽判定或GM沒梗時使用\n';
    returnStr+='內容「非常」有特色 請小心服用\n';
    returnStr+='\n';
  }
  else if(inputStr.match(/sg/)!=null){
    returnStr+='======================\n';
    returnStr+='忍神骰組\n';
    returnStr+='======================\n';
    returnStr+='判定骰 sg+n>=n#n@n\n';
    returnStr+='>=n為成功值 #n為大失敗值 @n為大成功值\n';
    returnStr+='Ex：sg>=6,sg+2>=7#4@10\n';
    returnStr+='\n';
    returnStr+='情感表 sgEt\n';
    returnStr+='大失敗表 sgFt\n';
    returnStr+='變調表 sgWt\n';
    returnStr+='戰國變調表 sgGwt\n';
    returnStr+='場景表 sgSt\n';
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
    returnStr+='詳見 swHelp\n';
    returnStr+='\n';
    returnStr+='======================\n';
    returnStr+='忍神骰組\n';
    returnStr+='======================\n';
    returnStr+='詳見 sgHelp\n';
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

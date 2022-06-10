/* jshint esversion: 9 */
class Bot {
	constructor() {
		////
		this.parseInput = (inputStr) => {
			let res;
			for (let p in this.parser) {
				res = this.parser[p](inputStr);
				if (res != undefined && res != "") break;
			}
			return res;
		};

		this.parserExtant = (parserName, parserFn) => {
			this.parser[parserName] = parserFn;
			return this;
		};

		this.helpList = [];

		this.helpExtant = (parserName, helpFn) => {
			this.helpList = this.helpList.concat(...helpFn);
			return this;
		};

		////


		this.version = '2.2 helpβ';
		//表格放置區
		////sw2.0
		this.powerSheet = [
			[0, 0, 0, 1, 2, 2, 3, 3, 4, 4],
			[0, 0, 0, 1, 2, 3, 3, 3, 4, 4],
			[0, 0, 0, 1, 2, 3, 4, 4, 4, 4],
			[0, 0, 1, 1, 2, 3, 4, 4, 4, 5],
			[0, 0, 1, 2, 2, 3, 4, 4, 5, 5],
			[0, 1, 1, 2, 2, 3, 4, 5, 5, 5],
			[0, 1, 1, 2, 3, 3, 4, 5, 5, 5],
			[0, 1, 1, 2, 3, 4, 4, 5, 5, 6],
			[0, 1, 2, 2, 3, 4, 4, 5, 6, 6],
			[0, 1, 2, 3, 3, 4, 4, 5, 6, 7],
			[1, 1, 2, 3, 3, 4, 5, 5, 6, 7],
			[1, 2, 2, 3, 3, 4, 5, 6, 6, 7],
			[1, 2, 2, 3, 4, 4, 5, 6, 6, 7],
			[1, 2, 3, 3, 4, 4, 5, 6, 7, 7],
			[1, 2, 3, 4, 4, 4, 5, 6, 7, 8],
			[1, 2, 3, 4, 4, 5, 5, 6, 7, 8],
			[1, 2, 3, 4, 4, 5, 6, 7, 7, 8],
			[1, 2, 3, 4, 5, 5, 6, 7, 7, 8],
			[1, 2, 3, 4, 5, 6, 6, 7, 7, 8],
			[1, 2, 3, 4, 5, 6, 7, 7, 8, 9],
			[1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
			[2, 2, 3, 4, 6, 6, 7, 8, 9, 10],
			[2, 2, 3, 5, 6, 6, 7, 8, 9, 10],
			[2, 2, 3, 5, 6, 7, 7, 8, 9, 10],
			[2, 3, 4, 5, 6, 7, 7, 8, 9, 10],
			[2, 3, 4, 5, 6, 7, 8, 8, 9, 10],
			[2, 3, 4, 5, 6, 8, 8, 9, 9, 10],
			[2, 3, 4, 6, 6, 8, 8, 9, 9, 10],
			[2, 3, 4, 6, 6, 8, 9, 9, 10, 10],
			[2, 3, 4, 6, 7, 8, 9, 9, 10, 10],
			[2, 4, 4, 6, 7, 8, 9, 10, 10, 10],
			[2, 4, 5, 6, 7, 8, 9, 10, 10, 11],
			[3, 4, 5, 6, 7, 8, 10, 10, 10, 11],
			[3, 4, 5, 6, 8, 8, 10, 10, 10, 11],
			[3, 4, 5, 6, 8, 9, 10, 10, 11, 11],
			[3, 4, 5, 7, 8, 9, 10, 10, 11, 12],
			[3, 5, 5, 7, 8, 9, 10, 11, 11, 12],
			[3, 5, 6, 7, 8, 9, 10, 11, 12, 12],
			[3, 5, 6, 7, 8, 10, 10, 11, 12, 13],
			[4, 5, 6, 7, 8, 10, 11, 11, 12, 13],
			[4, 5, 6, 7, 9, 10, 11, 11, 12, 13],
			[4, 6, 6, 7, 9, 10, 11, 12, 12, 13],
			[4, 6, 7, 7, 9, 10, 11, 12, 13, 13],
			[4, 6, 7, 8, 9, 10, 11, 12, 13, 14],
			[4, 6, 7, 8, 10, 10, 11, 12, 13, 14],
			[4, 6, 7, 9, 10, 10, 11, 12, 13, 14],
			[4, 6, 7, 9, 10, 10, 12, 13, 13, 14],
			[4, 6, 7, 9, 10, 11, 12, 13, 13, 15],
			[4, 6, 7, 9, 10, 12, 12, 13, 13, 15],
			[4, 6, 7, 10, 10, 12, 12, 13, 14, 15],
			[4, 6, 8, 10, 10, 12, 12, 13, 15, 15],
			[5, 7, 8, 10, 10, 12, 12, 13, 15, 15],
			[5, 7, 8, 10, 11, 12, 12, 13, 15, 15],
			[5, 7, 9, 10, 11, 12, 12, 14, 15, 15],
			[5, 7, 9, 10, 11, 12, 13, 14, 15, 16],
			[5, 7, 10, 10, 11, 12, 13, 14, 16, 16],
			[5, 8, 10, 10, 11, 12, 13, 15, 16, 16],
			[5, 8, 10, 11, 11, 12, 13, 15, 16, 17],
			[5, 8, 10, 11, 12, 12, 13, 15, 16, 17],
			[5, 9, 10, 11, 12, 12, 14, 15, 16, 17],
			[5, 9, 10, 11, 12, 13, 14, 15, 16, 18],
			[5, 9, 10, 11, 12, 13, 14, 16, 17, 18],
			[5, 9, 10, 11, 13, 13, 14, 16, 17, 18],
			[5, 9, 10, 11, 13, 13, 15, 17, 17, 18],
			[5, 9, 10, 11, 13, 14, 15, 17, 17, 18],
			[5, 9, 10, 12, 13, 14, 15, 17, 18, 18],
			[5, 9, 10, 12, 13, 15, 15, 17, 18, 19],
			[5, 9, 10, 12, 13, 15, 16, 17, 19, 19],
			[5, 9, 10, 12, 14, 15, 16, 17, 19, 19],
			[5, 9, 10, 12, 14, 16, 16, 17, 19, 19],
			[5, 9, 10, 12, 14, 16, 17, 18, 19, 19],
			[5, 9, 10, 13, 14, 16, 17, 18, 19, 20],
			[5, 9, 10, 13, 15, 16, 17, 18, 19, 20],
			[5, 9, 10, 13, 15, 16, 17, 19, 20, 21],
			[6, 9, 10, 13, 15, 16, 18, 19, 20, 21],
			[6, 9, 10, 13, 16, 16, 18, 19, 20, 21],
			[6, 9, 10, 13, 16, 17, 18, 19, 20, 21],
			[6, 9, 10, 13, 16, 17, 18, 20, 21, 22],
			[6, 9, 10, 13, 16, 17, 19, 20, 22, 23],
			[6, 9, 10, 13, 16, 18, 19, 20, 22, 23],
			[6, 9, 10, 13, 16, 18, 20, 21, 22, 23],
			[6, 9, 10, 13, 17, 18, 20, 21, 22, 23],
			[6, 9, 10, 14, 17, 18, 20, 21, 22, 24],
			[6, 9, 11, 14, 17, 18, 20, 21, 23, 24],
			[6, 9, 11, 14, 17, 19, 20, 21, 23, 24],
			[6, 9, 11, 14, 17, 19, 21, 22, 23, 24],
			[7, 10, 11, 14, 17, 19, 21, 22, 23, 25],
			[7, 10, 12, 14, 17, 19, 21, 22, 24, 25],
			[7, 10, 12, 14, 18, 19, 21, 22, 24, 25],
			[7, 10, 12, 15, 18, 19, 21, 22, 24, 26],
			[7, 10, 12, 15, 18, 19, 21, 23, 25, 26],
			[7, 11, 13, 15, 18, 19, 21, 23, 25, 26],
			[7, 11, 13, 15, 18, 20, 21, 23, 25, 27],
			[8, 11, 13, 15, 18, 20, 22, 23, 25, 27],
			[8, 11, 13, 16, 18, 20, 22, 23, 25, 28],
			[8, 11, 14, 16, 18, 20, 22, 23, 26, 28],
			[8, 11, 14, 16, 19, 20, 22, 23, 26, 28],
			[8, 12, 14, 16, 19, 20, 22, 24, 26, 28],
			[8, 12, 15, 16, 19, 20, 22, 24, 27, 28],
			[8, 12, 15, 17, 19, 20, 22, 24, 27, 29],
			[8, 12, 15, 18, 19, 20, 22, 24, 27, 30]
		];
		this.swRmSheet1 = ['有個領主', '一把守護之劍', '一批走私貨品', '一個德雷克', '一隊暗影傭兵團', '一隊貿易商旅', '一個神官', '一堆狗頭人', '三隻伯格妖', '一個精靈', '一群精靈', '一個矮人', '一群矮人', '一個人類', '一群人類', '一個草原妖精', '一群草原妖精', '一個塔比特', '一群長頸巨龍', '一群哥布林', '一個符民', '一個未啟動的符民', '兩隻巴西利斯克', '一大群人馬', '一支蠻族軍隊', '一個龍人', '一個慧人', '一個女武神', '一個古貓人', '一隻兔子', '一個吟遊詩人', '三萬伯格妖', '三億個龍人', '一個公會長', '一批輕騎兵', '一個傭兵團', '一批重步兵', '一個國王', '兩個公爵', '三個伯爵', '四個男爵', '五個子爵', '六個侯爵', '七個小矮人', '八個老太婆', '九個太陽傳教士', '一個手持雙刀的輕戰士', '一個手無縛雞之力的拳鬥士', '一個身穿重裝鎧甲的法師', '某個工具人'];
		this.swRmSheet2 = ['在宴會上', '在冒險者店裡', '在森林裡', '在河邊', '在娼館裡', '在路邊', '在睡覺時', '在領主宅底', '在魔動文明遺跡中', '在一座小島上', '在隔壁城鎮', '在附近的村莊', '在平原上', '在迷宮裡', '在城牆上', '在船上', '在發呆時', '在蒐集戰利品時', '在貧民窟裡', '在攻擊的時候', '在洗澡之前，脫光了以後', '在櫃台前', '在異空間', '在戰場中央', '在山頂上', '在沙漠', '在沼澤', '在極寒之地', '在餐廳', '在沙灘上', '在湖裡', '在洞窟', '在王宮', '在莊園裡', '在旅館', '在冒險者公會', '在酒館', '在教堂', '在賭場', '在競技場', '在火山', '在冰河', '在哨所中', '在堡壘裡', '在軍營', '在一座高塔上面', '在內衣堆上'];
		this.swRmSheet3 = ['被吃掉了', '爆炸了', '被藏起來了', '失蹤了', '喝醉了', '打起來了', '自殺了', '佔領該處了', '到處施放魔法', '準備睡覺了', '販賣戰利品', '脫手裝備中', '開始遊行了', '展開攻擊了', '被襲擊了', '被偷走了', '當上領主了', '當上神官了', '四處搜索著', '騎著魔動機車', '找到了迷宮入口', '看到了貴族的醜聞', '孵了一顆蛋', '被拿去料理了', '下海了', '發起革命', '膝蓋上中了一箭', '組成了聯邦', '協議停戰了', '叛亂了', '得了重病', '被埋伏了', '開始無差別殺人', '解放了奴隸', '脫褲子放屁', '得了不治之症', '暴斃了', '腿斷了', '瞎了', '唱起歌來', '無法生育了', '受到了詛咒', '失智了', '精神失常了', '撿到了古文明的神奇物品', '謀殺行動暴露了', '偷情被發現了', '去朝聖了', '蓋了一座實驗室', '重要的東西被偷走了', '使用左右開弓打出了1000點傷害', '用守護吃下了全部的傷害還沒有死', '用石頭打死一個伯格妖', '用內褲悶死一隻哥布林'];
		//表格結束
		
		this.parser = {
			oriParser: (inputStr) => {
				let countStr = '';
				let msgSplitor = (/\S+/ig);
				let mainMsg = inputStr.match(msgSplitor);
				let trigger = mainMsg[0].toString().toLowerCase();
				//let trigger2 = mainMsg[1].toString().toLowerCase(); 
				//help
				if (trigger.match(new RegExp(`^(sw|sg|dryh|toy|${this.helpList.map(h => h.reg.toLowerCase()).join("|")})?(help|幫助)$`, "g")) != null) {
					return this.help(trigger);
				}
				if (trigger.match(/^ver$/) != null) {
					return this.version;
				}
				//SW2.0 威力骰
				if (trigger.match(/^(k)(\d+)(((\+|-)\d+)|(@\d+)|(\$(\+|-)?\d+)|(gf))*$/) != null) {
					return this.Kx(trigger);
				}
				//SW2.0 超越判定
				if (trigger.match(/^swfc((\+|-)\d+)?$/) != null) {
					return this.swFc(trigger);
				}
				//SW2.0 成長骰
				if (trigger.match(/^gr\d*$/) != null) {
					return this.swGr(trigger);
				}
				//SW2.0 大失敗表
				if (trigger.match(/^swft$/) != null) {
					return this.swFt();
				}
				//SW2.0 纏繞表
				if (trigger.match(/^swtt$/) != null) {
					return this.swTt();
				}
				//SW2.0 流言表
				if (trigger.match(/^swrm$/) != null) {
					return this.swRm();
				}
				//SW2.0 寶物表
				if (trigger.match(/^swdi$/) != null) {
					return this.swDi();
				}
				//SW2.0 城鎮生成
				if (trigger.match(/^swtw/) != null) {
					return this.swTw(trigger);
				}
				//忍神判定
				if (trigger.match(/^sg(\+\d+|-\d+)?>=\d+(#\d+)?(@\d+)?$/) != null) {
					return this.sg(trigger);
				}
				if (trigger.match(/^sg$/) != null) {
					return this.sg('sg>=5');
				}
				//忍神情感表
				if (trigger.match(/^sget$/) != null) {
					return this.sgEt();
				}
				//忍神大失敗表
				if (trigger.match(/^sgft$/) != null) {
					return this.sgFt();
				}
				//忍神變調表
				if (trigger.match(/^sgwt$/) != null) {
					return this.sgWt();
				}
				//忍神戰國變調表
				if (trigger.match(/^sggwt$/) != null) {
					return this.sgGWt();
				}
				//忍神場景表
				if (trigger.match(/^sgst$/) != null) {
					return this.sgSt();
				}
				//忍神分野表
				if (trigger.match(/^sgrtt$/) != null) {
					return this.sgRtt();
				}
				//忍神戰場表
				if (trigger.match(/^sgbt$/) != null) {
					return this.sgBt();
				}
				//CoC7基本骰組
				if (trigger.match(/^cc<=\d+(\(-?\d+\))?$/) != null) {
					return this.cc(trigger);
				}
				//死亡flag flag表
				if (trigger.match(/^df$/) != null) {
					return this.df();
				}
				//死亡flag 場景表
				if (trigger.match(/^dfs$/) != null) {
					return this.dfs();
				}
				//死亡flag 關係表
				if (trigger.match(/^dfr$/) != null) {
					return this.dfr();
				}
				//請勿入睡 PC骰
				if (trigger.match(/^dryh((\d+d)|(\d+e)|(\d+m))+$/) != null) {
					return this.dontRestYourHeadPC(trigger);
				}
				//請勿入睡 GM骰
				if (trigger.match(/^dryh(\d+p)$/) != null) {
					return this.dontRestYourHeadGM(trigger);
				}
				//fudge骰
				if (trigger.match(/^fg(\+\d+|-\d+)*$/) != null) {
					return this.fudge(trigger);
				}
				//cookJudge骰
				if (inputStr.match(/^ck (\S+ )+/i) != null) {
					return this.cookJudge(inputStr);
				}
				//cook骰
				if (trigger.match(/^ck\d+/) != null) {
					return this.cook(trigger);
				}
				//基本骰組 this.xDx+a>b
				if (trigger.match(/^(\d+d\d+|\d+d)((\+|-)\d+)?((>=|<=|=|>|<)\d+)?$/) != null) {
					return this.xDx(trigger);
				}
				//基本骰組 this.xBx+a>b
				if (trigger.match(/^(\d+b\d+|\d+b|b\d+)((\+|-)\d+)?((>=|<=|=|>|<)\d+)?$/) != null) {
					return this.xBx(trigger);
				}
				//基本骰組 this.d66
				if (trigger.match(/^d66$/) != null) {
					return this.d66();
				}
				//基本骰組 choice
				if (trigger.match(/^choice$/) != null) {
					return this.choice(inputStr);
				}
				//基本骰組 choiceN
				if (trigger.match(/^choice\d+$/) != null) {
					return this.choiceN(inputStr);
				}
				///基本運算
				if (trigger.match(/[^\d\+\-\*\/%\(\)\.d><=]/) == null &&
					trigger.match(/[\+\-\*\/%><=]/) != null &&
					trigger.match(/^[\d\+\-\*\/%\(\)\.d]+((>=|<=|=|>|<)\d+(\.\d+)?)?/) != null) {
					return this.claculate(trigger);
				}
				//*/
				//雜項
				if (trigger.match(/^(紅炎的|紅蓮的)/) != null) {
					return '\\蓮帝/';
				}
				if (trigger.match(/投人機$/) != null) {
					return this.terbuchet(trigger);
				}
				if (trigger.match(/^霍普rm$/) != null) {
					return this.GinWayRm();
				}
				if (trigger.match(/^hpm\d*$/) != null) {
					return this.GinWayMonster();
				}
				if (trigger.match(/^生成霍普角色$/) != null) {
					return this.GinWayCharacter();
				}
				if (trigger.match(/^\\泡泡\/$/) != null) {
					return '泡泡！泡泡！更多泡泡！';
				}
				if (inputStr.match(/複雜度/) != null ||
					inputStr.match(/O\(\)/) != null) {
					return '☆逼歐恩平方☆';
				}
				if (trigger.match(/^(鑑定|aps|鑑定武器|apsw|鑑定防具|apsa|鑑定道具|apsi)/) != null) {
					return this.appraisal(inputStr);
				}
				/*/
				if (inputStr.match(/(峻巍|霍普|哼|機掰|G8|閉嘴|口亨)/)!= null ){
				return this.GinWay();
				}
				//*/
				//
				if (inputStr.match(/霍普黑雷達/) != null) {
					return this.GinWay();
				}
				//*/
				return countStr;
			}
		};
	}

		//骰組function
		////seed random
		srand(seed) {
			seed = '0.' + Math.sin(seed).toString().substr(6);
			return Number(seed);
		}
		////this.strToSeed
		strToSeed(inputStr) {
			let seed = 7;
			for (let i = 0; i < inputStr.length; i++) {
				seed = (seed / 7 * inputStr.charCodeAt(i)) % 65535;
			}
			return Number(seed);
		}
		////this.extract
		extract(rate, num) {
			let sum = 0;
			num = num * rate.reduce(function(a, b) {
				return a + b;
			}, 0);
			for (let i = 0; i < rate.length; i++) {
				sum += rate[i];
				if (sum > num) return i;
			}
			return undefined;
		}
		////this.extractStr
		extractStr(rate, num) {
			let sum = 0;
			num = num * rate.reduce(function(a, b) {
				return a + b[0];
			}, 0);
			for (let i = 0; i < rate.length; i++) {
				sum += rate[i][0];
				if (sum > num) return rate[i][1];
			}
			return undefined;
		}
		////基本運算
		claculate(inputStr) {
			let returnStr = '基礎運算：';
			let claculate = inputStr.match(/^[\d\+\-\*\/%\(\)\.d]+/)[0].toString();
			let compare = null;
			if (inputStr.match(/(>=|<=|=|>|<)\d+/) != null) {
				compare = inputStr.match(/(>=|<=|=|>|<)\d+/)[0].toString();
			}
			while (claculate.match(/\d+d\d+/) != null) {
				let input = claculate.match(/\d+d\d+/)[0].toString();
				let output = 0;

				let num = input.match(/\d+/g);
				for (let i = 0; i < num[0]; i++) {
					let dice = Math.ceil(Math.random() * num[1]);
					output += dice;
				}
				claculate = claculate.replace(input, output);
			}
			returnStr += claculate + ' = ';
			let sum = eval(claculate);
			if (Math.abs(sum - Math.round(sum)) > 0.01)
				returnStr += sum.toFixed(2);
			else
				returnStr += sum.toFixed(0);
			if (compare != null) {
				returnStr += ' ' + compare;
				if (eval(sum + compare)) returnStr += ' → 成功';
				else returnStr += ' → 失敗';
			}
			return returnStr;
		}
		////基本骰組
		xDx(inputStr) {
			let returnStr = '基本擲骰：[';
			let answer = 0;
			let bool = false;

			//this.xDx
			if (inputStr.match(/\d+d\d+/) != null) {
				let tempMatch = inputStr.match(/\d+d\d+/).toString();
				let a = tempMatch.match(/\d+/g);
				for (let i = 0; i < a[0]; i++) {
					let dice = Math.ceil(Math.random() * a[1]);
					answer += dice;
					if (i > 0) returnStr += ',';
					returnStr += dice.toString();
				}
				returnStr += ']';
			}
			//xD
			else if (inputStr.match(/\d+d/) != null) {
				let tempMatch = inputStr.match(/\d+d/).toString();
				let a = tempMatch.match(/\d+/g);
				for (let i = 0; i < a[0]; i++) {
					let dice = Math.ceil(Math.random() * 6);
					answer += dice;
					if (i > 0) returnStr += ',';
					returnStr += dice.toString();
				}
				returnStr += ']';
			}
			//Dx
			else if (inputStr.match(/d\d+/) != null) {
				return undefined;
			}
			if (inputStr.match(/\+\d+/) != null) {
				let tempMatch = inputStr.match(/\+\d+/).toString();
				let a = tempMatch.match(/\d+/g);
				answer += Number(a[0]);
				returnStr += '+' + a[0].toString();
			}
			if (inputStr.match(/-\d+/) != null) {
				let tempMatch = inputStr.match(/-\d+/).toString();
				let a = tempMatch.match(/\d+/g);
				answer -= Number(a[0]);
				returnStr += '-' + a[0].toString();
			}
			returnStr += ' = ' + answer.toString();
			if (inputStr.match(/(>=|<=|=|>|<)\d+/)) {
				let tempMatch = inputStr.match(/(>=|<=|=|>|<)\d+/).toString();
				let a = tempMatch.match(/\d+/g);
				if (tempMatch.match(/>/) && Number(answer) > Number(a[0]))
					returnStr += '→成功';
				else if (tempMatch.match(/</) && Number(answer) < Number(a[0]))
					returnStr += '→成功';
				else if (tempMatch.match(/=/) && Number(answer) == Number(a[0]))
					returnStr += '→成功';
				else returnStr += '→失敗';
			}
			return returnStr;
		}

		xBx(inputStr) {
			let returnStr = '基本擲骰：[';
			let clacu = inputStr.match(/\d*b\d*/)[0].toString();
			let adding = null;
			if (inputStr.match(/(\+|-)\d+/) != null) {
				adding = inputStr.match(/(\+|-)\d+/)[0].toString();
			}
			let compare = null;
			if (inputStr.match(/(>=|<=|=|>|<)\d+/) != null) {
				compare = inputStr.match(/(>=|<=|=|>|<)\d+/)[0].toString();
			}
			let answer = 0;
			let successCount = 0;
			let bool = false;

			//xB
			if (clacu.match(/^\d+b$/) != null) {
				clacu = clacu + '6';
			}

			//Bx
			if (clacu.match(/^b\d+$/) != null) {
				clacu = '1' + clacu;
			}

			//this.xBx
			if (clacu.match(/\d+b\d+/) != null) {
				let num = clacu.match(/\d+/g);
				for (let i = 0; i < num[0]; i++) {
					let dice = Math.ceil(Math.random() * num[1]);
					if (i > 0) returnStr += ', ';
					returnStr += dice.toString();
					if (adding != null) dice += adding;
					if (compare != null) {
						successCount += eval(dice + compare);
					}
				}
				returnStr += ']';
			}
			if (adding != null) {
				returnStr += adding;
			}
			if (compare != null) {
				returnStr += compare;
				returnStr += ' → ';
				returnStr += successCount;
				returnStr += '成功';
			}
			return returnStr;
		}
		////this.d66骰
		d66() {
			let returnStr = '基本擲骰：' + Math.ceil(Math.random() * 6) + Math.ceil(Math.random() * 6);
			return returnStr;
		}
		////choiceN
		choiceN(inputStr) {
			let c = 1;
			let returnStr = '隨機選取：';
			c = inputStr.toLowerCase().match(/^choice\d+/).toString();
			c = c.match(/\d+/).toString();
			if (c < 1) {
				returnStr += '不能選取少於一個選項喔';
				return returnStr;
			}
			inputStr = inputStr.toLowerCase().replace(/choice\d+ /, '');
			let option = inputStr.split(' ');
			if (c > option.length) {
				c = option.length + 1;
			}
			for (; c > 0; c--) {
				returnStr += option.splice(Math.floor(Math.random() * option.length), 1) + ' ';
			}
			return returnStr;
		}
		////choice
		choice(inputStr) {
			inputStr = inputStr.toLowerCase().replace('choice ', '');
			let option = inputStr.split(' ');
			let returnStr = '隨機選取：' + option[Math.floor(Math.random() * option.length)];
			return returnStr;
		}
		////SW2.0 function 開始
		//////sw威力表
		Kx(inputStr) {
			let returnStr = 'SW2.0威力表擲骰：';
			let tempMatch = inputStr;
			//return tempMatch.match(/k\d+/).toString();
			let k = 0;
			let b = 0;
			let c = 10;
			let s = 0;
			let sFlag = false;
			let count = 0;
			let damage = 0;
			let dice = 0;
			let dice1 = 0;
			let dice2 = 0;
			if (tempMatch.match(/k\d+/) != null) {
				k = tempMatch.match(/k\d+/).toString();
				k = k.match(/\d+/).toString();
			}
			if (tempMatch.match(/(\+|-)\d+/) != null) {
				b = tempMatch.match(/(\+|-)\d+/)[0].toString();
				b = b.match(/-?\d+/).toString();
			}
			if (tempMatch.match(/@\d+/) != null) {
				c = tempMatch.match(/@\d+/).toString();
				c = c.match(/\d+/).toString();
			}
			if (tempMatch.match(/\$(\+|-)?\d+/) != null) {
				s = tempMatch.match(/\$(\+|-)?\d+/)[0].toString();
				if (s.match(/(\+|-)/) == null)
					sFlag = true;
				s = s.match(/-?\d+/).toString();
			}
			if (c < 3) {
				//returnStr+='c值不能小於2喔';
				//return returnStr;
				c = 3;
			}
			if (k < 0 || k > 100) {
				returnStr += 'k值只支援0~100喔';
				return returnStr;
			}
			dice1 = Math.ceil(Math.random() * 6);
			if (tempMatch.match(/gf$/) != null) dice2 = dice1;
			else dice2 = Math.ceil(Math.random() * 6);
			if (sFlag) {
				dice = Number(s);
				returnStr += '[' + dice + ']';
			} else {
				dice = dice1 + dice2 + Number(s);
				returnStr += '[' + dice1 + ',' + dice2 + ']';
				if (s > 0) returnStr += '+' + s;
				else if (s < 0) returnStr += +s;
			}
			if (dice > 12) {
				damage += powerSheet[k][9];
			} else if (dice > 2) {
				damage += powerSheet[k][dice - 3];
			} else {
				return returnStr + '→☆大失敗☆ 回家領50囉～';
			}
			while (dice >= c) {
				count++;
				dice1 = Math.ceil(Math.random() * 6);
				if (tempMatch.match(/gf$/) != null) dice2 = dice1;
				else dice2 = Math.ceil(Math.random() * 6);
				dice = dice1 + dice2;
				returnStr += ',[' + dice1 + ',' + dice2 + ']';
				if (dice > 2) {
					damage += powerSheet[k][dice - 3];
				}
			}
			damage = damage + Number(b);
			if (count) {
				returnStr = returnStr + '→' + count + '迴轉→' + damage;
			} else {
				returnStr = returnStr + '→' + damage;
			}
			return returnStr;
		}
		//////超越判定
		swFc(inputStr) {
			let returnStr = 'SW2.0超越判定：';
			let successFlag = false;
			let successFlag2 = false;
			let b = 0;
			let count = 0;
			let dice = 0;
			let dice1 = Math.ceil(Math.random() * 6);
			let dice2 = Math.ceil(Math.random() * 6);
			returnStr += '[' + dice1 + ',' + dice2 + ']';
			if (dice1 + dice2 == 2) {
				return returnStr + '→☆大失敗☆ 回家領50囉～';
			} else if (dice1 + dice2 == 12) {
				successFlag = true;
			}
			if (inputStr.match(/(\+|-)\d+/) != null) {
				b = inputStr.match(/(\+|-)\d+/)[0].toString();
				b = b.match(/-?\d+/).toString();
			}
			while (dice1 + dice2 >= 10) {
				dice += dice1 + dice2;
				dice1 = Math.ceil(Math.random() * 6);
				dice2 = Math.ceil(Math.random() * 6);
				returnStr += '[' + dice1 + ',' + dice2 + ']';
				count++;
			}
			dice += dice1 + dice2;
			if (dice >= 40) {
				successFlag2 = true;
			}
			dice += Number(b);
			if (count) {
				returnStr = returnStr + '→' + count + '迴轉';
			}
			returnStr += '→' + dice;
			if (successFlag) {
				returnStr += '→★大成功★';
			}
			if (successFlag2) {
				returnStr += '→★超成功★';
			}
			return returnStr;
		}
		//////成長骰
		swGr(inputStr) {
			let returnStr = 'SW2.0成長擲骰：';
			let sheet = ['靈巧', '敏捷', '力量', '生命', '智力', '精神'];
			let count = 0;
			if (inputStr.match(/\d+/) == null) {
				count = 1;
			} else {
				count = Number(inputStr.match(/\d+/)[0].toString());
			}
			for (let i = 0; i < count; i++) {
				returnStr += '[' + sheet[Math.floor(Math.random() * 6)] + ', ' + sheet[Math.floor(Math.random() * 6)] + ']';
			}
			return returnStr;
		}
		//////大失敗表
		swFt() {
			let returnStr = 'SW2.0大失敗表：';
			let sheet = ['[1]額外擲兩次大失敗表，兩方效果皆適用（不會累加），另外本次大失敗額外增加50點經驗', '[2]傷害增加攻擊者的「劍之碎片」點', '[3]傷害增加攻擊者的「等級」點', '[4]骰兩次傷害骰，選擇較高者', '[5]傷害增加為原本的兩倍', '[6]防護點無效化'];
			returnStr += sheet[Math.floor(Math.random() * 6)];
			return returnStr;
		}
		//////纏繞表
		swTt() {
			let returnStr = 'SW2.0纏繞表：';
			let sheet = ['[1]頭或臉：使用牙齒的命中判定-2，魔法行使判定-2', '[2]武器：武器無法使用，盾牌加值無效化', '[3]手腕：命中判定-2，盾牌加值無效化', '[4]腳：迴避判定-2', '[5]身體：所有行為判定-1', '[6]特殊：使用該部位的行為判定-1，失去該部位加值'];
			returnStr += sheet[Math.floor(Math.random() * 6)];
			return returnStr;
		}
		//////流言表
		swRm() {
			let returnStr = 'SW2.0流言：';
			returnStr += this.swRmSheet1[Math.floor(Math.random() * this.swRmSheet1.length)];
			returnStr += this.swRmSheet2[Math.floor(Math.random() * this.swRmSheet2.length)];
			returnStr += this.swRmSheet3[Math.floor(Math.random() * this.swRmSheet3.length)];
			return returnStr;
		}
		//////掉落表
		swDi() {
			let returnStr = 'SW2.0寶物表：';
			let dropSheet = [
				[1, '劍'],
				[1, '斧'],
				[1, '槍'],
				[1, '釘頭錘'],
				[1, '杖'],
				[1, '連枷'],
				[1, '戰錘'],
				[1, '纏繞'],
				[1, '格鬥'],
				[1, '投擲'],
				[1, '弓'],
				[1, '十字弓'],
				[1, '銃'],
				[1, '箭、子彈'],
				[7, '非金屬甲'],
				[7, '金屬甲'],
				[1, '盾'],
				[1, '職業專用道具'],
				[14, '裝飾品'],
				[7, '消耗品'],
				[7, '其他道具']
			];
			let rankSheet = [
				[27, 'B'],
				[9, 'A'],
				[3, 'S'],
				[1, 'SS']
			];
			let magicSheet = [
				[27, ''],
				[9, '+'],
				[3, '++'],
				[1, '+++']
			];
			returnStr += this.extractStr(dropSheet, Math.random());
			returnStr += this.extractStr(rankSheet, Math.random());
			returnStr += this.extractStr(magicSheet, Math.random());
			return returnStr;
		}
		//////城鎮生成
		swTw(inputStr) {
			if (inputStr.match(/^swtw$/) != null) return undefined;
			inputStr = inputStr.replace(/^swtw/, '');
			let seedO = this.strToSeed(inputStr);
			let seed = seedO;
			let townLvSheet = ['小型村', '中型村', '小型鎮', '中型鎮', '大型鎮', '小型城市', '中型城市', '大型城市（經濟樞紐級）', '巨型城都（王城級）', '超巨型城都(世界都市級)'];
			let popuSheet = [25, 80, 200, 500, 1000, 2000, 5000, 10000, 20000, 60000];
			//信仰組成機率:村莊多為單一、城鎮較為多樣
			let comRate = [
				[9, 4, 1],
				[3, 2, 1],
				[1, 1, 1]
			];
			//信仰組成:單一、雙重、多重
			let populationComSheet = [
				[90],
				[50, 40],
				[30, 20, 20, 10]
			];
			let riligionComSheet = [
				[90],
				[50, 40],
				[30, 20, 20, 10]
			];
			let populationSheet = [
				[200, '人類'],
				[160, '精靈'],
				[160, '矮人'],
				[100, '塔比特'],
				[20, '符民'],
				[5, '夢魘'],
				[80, '暗影'],
				[100, '龍人'],
				[20, '草原妖精'],
				[20, '慧人'],
				[5, '瓦爾基里'],
				[0.1, '仙靈'],
				[0.1, '螢石人'],
				[5, '古貓人'],
				[20, '旭日'],
				[20, '狗頭人'],
				[1, '人族側蠻族']
			]
			let riligionSheet = [
				[25, '始祖神'],
				[20, '太陽神'],
				[15, '賢神'],
				[10, '妖精神'],
				[15, '炎武帝'],
				[11, '騎士神'],
				[8, '月神'],
				[8, '酒幸神'],
				[6, '慈雨神'],
				[8, '隱密神'],
				[5, '水神'],
				[1, '融合神'],
				[1, '纏衣神'],
				[1, '劍神'],
				[1, '韋馱天'],
				[1, '器械神'],
				[1, '刃神'],
				[1, '鐵鎚神'],
				[1, '龍帝神'],
				[1, '無特定信仰']
			];
			let industrySheet = ['農業', '畜牧業', '漁業', '礦業', '林業', '貿易', '皮革加工', '金屬加工', '煉金', '宗教', '紡織業',
				'魔法道具加工', '學院'
			];

			//人口
			let level = 0;
			if (inputStr.match(/村$/) != null) level = Math.floor(this.srand(seed) * 2);
			else if (inputStr.match(/鎮$/) != null) level = 2 + Math.floor(this.srand(seed) * 3);
			else if (inputStr.match(/城$/) != null) level = 5 + Math.floor(this.srand(seed) * 4.2);
			else level = Math.floor(this.srand(seed) * 9.2);
			let population = Math.floor(popuSheet[level] * (2 + this.srand(++seed) + this.srand((seed++) + 1)) / 3);

			let type = 0;
			if (level < 2) type = 0;
			else if (level < 5) type = 1;
			else if (level < 10) type = 2;
			//種族
			//populationComType處理
			let pCType = this.extract(comRate[type], this.srand(++seed));
			pCType = populationComSheet[pCType];
			for (let i = 0; i < pCType.length; i++) {
				pCType[i] = pCType[i] + Math.floor(this.srand(++seed) * 6) - Math.floor(this.srand((seed++) + 1) * 6);
			}
			pCType = pCType.sort(function(a, b) {
				return b - a
			}); //排序種族
			pCType.push(100 - pCType.reduce(function(a, b) {
				return a + b;
			}, 0)); //加入其他種族
			//populationCom處理
			let populationCom = [];
			for (let i = 0; i < pCType.length - 1; i++) {
				let r = this.extractStr(populationSheet, this.srand(++seed));
				while (populationCom.some(function(a) {
						return a == r;
					})) {
					r = this.extractStr(populationSheet, this.srand(++seed));
				}
				populationCom.push(r);
			}
			populationCom.push('其他');

			//信仰
			//信仰調整
			if (type == 0) { //提高慈雨神、妖精神於村出現率
				riligionSheet[8][0] += 12;
				riligionSheet[3][0] += 10;
			}
			if (type == 1) riligionSheet[8][0] += 4; //提高慈雨神於鎮出現率
			if (populationCom[0] == '矮人') riligionSheet[4][0] += 15; //提高矮人對於炎武帝出現率
			if (populationCom[0] == '精靈') riligionSheet[3][0] += 10; //提高精靈對於妖精神出現率
			if (populationCom[0] == '塔比特') riligionSheet[2][0] += 14; //提高塔比特對於賢神出現率
			if (populationCom[0] == '旭日') riligionSheet[1][0] += 14; //提高旭日對於太陽神出現率
			//riligionComType處理
			let rCType = this.extract(comRate[type], this.srand(++seed));
			rCType = riligionComSheet[rCType];
			for (let i = 0; i < rCType.length; i++) {
				rCType[i] = rCType[i] + Math.floor(this.srand(++seed) * 6) - Math.floor(this.srand((seed++) + 1) * 6);
			}
			rCType = rCType.sort(function(a, b) {
				return b - a
			}); //排序信仰
			rCType.push(100 - rCType.reduce(function(a, b) {
				return a + b;
			}, 0)); //加入其他信仰
			//riligionCom處理
			let riligionCom = [];
			for (let i = 0; i < rCType.length - 1; i++) {
				let r = this.extractStr(riligionSheet, this.srand(++seed));
				while (riligionCom.some(function(a) {
						return a == r;
					})) {
					r = this.extractStr(riligionSheet, this.srand(++seed));
				}
				riligionCom.push(r);
			}
			riligionCom.push('其他');

			//輸出
			let returnStr = 'SW2.0城鎮：' + inputStr + '\n';
			returnStr += '規模：' + townLvSheet[level] + ' 約' + population + '人\n';
			returnStr += '人口組成：';
			for (let i = 0; i < pCType.length; i++) {
				returnStr += populationCom[i] + pCType[i] + '%  ';
			}
			returnStr += '\n信仰組成：';
			for (let i = 0; i < rCType.length; i++) {
				returnStr += riligionCom[i] + rCType[i] + '%  ';
			}
			returnStr += '\n興盛產業：';
			for (let i = 0; i < industrySheet.length; i++) {
				if (this.srand(++seed) * 10 < level) returnStr += industrySheet[i] + '  ';
			}
			return returnStr;
		}
		////SW2.0 function 結束
		////忍神 function 開始
		//////sg基本判定
		sg(inputStr) {
			let returnStr = '忍神骰組：[';
			let tempMatch = inputStr.match(/^sg(\+\d+|-\d+)?>=\d+(#\d+)?(@\d+)?$/)[0].toString();
			let dice = 0;
			let ans = 0;
			let ans2 = 0;
			let t = 0;
			let b = 0;
			let f = 2;
			let s = 12;
			if (tempMatch.match(/>=\d+/) != null) {
				t = tempMatch.match(/>=\d+/).toString();
				t = t.match(/\d+/).toString();
			}
			if (tempMatch.match(/(\+|-)\d+/) != null) {
				b = tempMatch.match(/(\+|-)\d+/)[0].toString();
			}
			if (tempMatch.match(/#\d+/) != null) {
				f = tempMatch.match(/#\d+/).toString();
				f = f.match(/\d+/).toString();
			}
			if (tempMatch.match(/@\d+/) != null) {
				s = tempMatch.match(/@\d+/).toString();
				s = s.match(/\d+/).toString();
			}
			if (Number(s) <= Number(f)) {
				s = Number(f) + 1;
				s = s.toString();
			}
			dice = Math.ceil(Math.random() * 6);
			ans += dice;
			returnStr += dice + ',';
			dice = Math.ceil(Math.random() * 6);
			ans += dice;
			returnStr += dice + ']';
			ans2 = ans + Number(b);
			if (Number(b) != 0) {
				returnStr += b;
			}
			returnStr += '=' + ans2;
			if (ans >= s) {
				returnStr += '→☆大成功☆';
				return returnStr;
			} else if (ans <= f) {
				returnStr += '→★大失敗★ 下次見～';
			} else if (ans2 >= t) {
				returnStr += '→成功';
			} else {
				returnStr += '→失敗';
			}
			return returnStr;
		}

		sgFt() {
			let returnStr = '忍神大失敗表：';
			let sheet = ['[1]不太對勁！該輪所有行為判定受到-1修正。', '[2]大事不妙！損失一個任意忍具。', '[3]情報洩漏！你以外的角色可以知曉你的【祕密】或【居所】任意一個。', '[4]太大意了！術式操作失敗，任選【生命力】流失一點。', '[5]敵人的陰謀？落入陷阱中，隨機受到一個變調。', '[6]呼，真是危險，還好沒有發生什麼事。'];
			returnStr += sheet[Math.floor(Math.random() * 6)];
			return returnStr;
		}

		sgEt() {
			let returnStr = '忍神感情表：';
			let sheet = ['[1]共感＼不信', '[2]友情＼憤怒', '[3]愛情＼忌妒', '[4]忠誠＼侮辱', '[5]憧憬＼自卑', '[6]狂信＼殺意'];
			returnStr += sheet[Math.floor(Math.random() * 6)];
			return returnStr;
		}

		sgWt() {
			let returnStr = '忍神變調表：';
			let sheet = ['[1]故障：所有的忍具變為無法使用，每輪結束時可以進行【絡繰術】判定嘗試解除此狀態。', '[2]麻痺：從已學得的特技中隨機選擇1個，受到此變調影響時該特技視為未習得狀態，每輪結束時可以進行【身體操術】判定嘗試解除此狀態。', '[3]重傷：進行命中、情報、感情判定時受到1點接近戰傷害，每輪結束時可以進行【生存術】判定嘗試解除此狀態。本效果不可累積。', '[4]行蹤不明：主要階段時、不是自己主場的場景變為無法出場，每輪結束時可以進行【經濟力】判定嘗試解除此狀態。', '[5]忘卻：從已獲得感情中隨機選擇1個，受到此變調影響時該感情視為未獲得狀態，每輪結束時可以進行【記憶術】判定嘗試解除此狀態。', '[6]詛咒：從已習得的忍法中隨機選擇1個，受到此變調影響時該忍法視為未習得狀態，每輪結束時可以進行【咒術】判定嘗試解除此狀態。'];
			returnStr += sheet[Math.floor(Math.random() * 6)];
			return returnStr;
		}

		sgGWt() {
			let returnStr = '忍神戰國變調表：';
			let sheet = ['[1]催眠：戰鬥開始時擁有此變調或得到此變調的當下，若不減少1點【生命力】則立刻從戰鬥中脫落，每輪結束時可以進行【意氣】判定嘗試解除此狀態。本效果不可累積。', '[2]火達摩：受到本變調影響者大失敗值+1、且大失敗時受到1點【接近戰傷害】，場景結束時自動解除。疊加後大失敗值與傷害值都會增加。', '[3]猛毒：若受到了本變調，回合結束丟1D6(猛毒和飢餓共用此判定)，奇數則減少1點【生命力】，每輪結束可進行【毒術】判定嘗試解除此狀態。疊加後傷害值會增加。', '[4]飢餓：若受到了本變調，回合結束時1D6(猛毒和飢餓共用此判定)，偶數則減少1點【生命力】，每輪結束可進行【兵糧術】判定嘗試解除此狀態。疊加後傷害值會增加。', '[5]殘刃：若受到了本變調影響，回復判定、忍法、忍具與背景的回復生命效果無效化，每輪結束時可以進行【拷問術】判定嘗試解除此狀態。本效果不可累積。', '[6]野望：命中判定+1，除此之外的所有判定-1，每輪結束時可以進行【憑依術】判定嘗試解除此狀態。本效果不可累積。'];
			returnStr += sheet[Math.floor(Math.random() * 6)];
			return returnStr;
		}

		sgSt() {
			let returnStr = '忍神場景表：';
			let sheet = ['[2]周圍充滿了血的氣息，似乎有進行過戰鬥的氣息。不對，戰鬥還在繼續嗎？', '[3]這是…夢嗎？那是本應結束了的過去，但確無法忘懷。', '[4]眺望著眼前展開的城市。在這裡的話就可以將一街一物盡收眼底…', '[5]像是世界末日般的黑暗。黑暗之中你們在低低私語。', '[6]度過了悠閒的時光，幾乎要忘卻影之世界的一切。', '[7]空氣清新的森林裡，鳥兒婉轉歌唱，清風拂過樹葉嘩嘩地作響。', '[8]人群如山海湧動而喧囂，毫不知曉影之世界的單純人們高談闊論，喋喋不休。', '[9]大雨傾盆。人們慌張的奔向避雨之所。', '[10]大風呼嘯。頭髮跟衣服被吹的搖曳。似乎有什麼事要發生了…', '[11]醉漢大吼著，攬客聲呼喚著，女人們嬌聲著，這是繁華街道常見的畫面。', '[12]太陽的微笑包裹著你，那對於影之世界的住民來說太過於耀眼。'];
			returnStr += sheet[Math.floor(Math.random() * 6) + Math.floor(Math.random() * 6)];
			return returnStr;
		}

		sgRtt() {
			let returnStr = '忍神分野表：';
			let sheet = ['器術', '體術', '忍術', '謀術', '戰術', '妖術'];
			returnStr += sheet[Math.floor(Math.random() * 6)];
			return returnStr;
		}

		sgBt() {
			let returnStr = '忍神戰場表：';
			let sheet = ['平地—無效果', '水中—所有角色迴避判定-2', '高所—大失敗時額外受到1點接近戰傷害', '惡天候—攻擊忍法間隔+1', '雜踏—大失敗值變更為謀位值+1', '極地—回合結束時擲骰1d6，若小於等於經過回合數，則所有角色受到1點近接戰傷害。此外脫離戰鬥者額外得到一個變調'];
			returnStr += sheet[Math.floor(Math.random() * 6)];
			return returnStr;
		}
		////忍神 function 結束
		////CoC7 function 開始
		//////CoC基本判定
		cc(inputStr) {
			let returnStr = 'CoC7th擲骰：';
			let tempMatch = inputStr.match(/<=\d+/).toString();
			let target = Number(tempMatch.match(/\d+/));
			let credit = 0;
			if (inputStr.match(/\(-?\d+\)/) != null) {
				let tempMatch = inputStr.match(/\(-?\d+\)/).toString();
				credit = Number(tempMatch.match(/-?\d+/));
			}
			let dice1 = [Math.floor(Math.random() * 10)];
			for (let i = 0; i < Math.abs(credit); i++) dice1.push(Math.floor(Math.random() * 10));
			let dice2 = Math.floor(Math.random() * 10);
			for (let i = 0; i < dice1.length; i++) {
				dice1[i] = dice1[i] * 10 + dice2;
				if (dice1[i] == 0) dice1[i] = 100;
				if (i > 0) returnStr += ',';
				returnStr += dice1[i].toString();
			}
			if (credit > 0) dice1 = dice1.sort(function(a, b) {
				return a - b
			});
			if (credit < 0) dice1 = dice1.sort(function(a, b) {
				return b - a
			});
			if (dice1[0] == 1) returnStr += '→☆大成功☆';
			else if (dice1[0] == 100) returnStr += '→★大失敗★';
			else if (target < 50 && dice1[0] > 95) returnStr += '→★大失敗★';
			else if (dice1[0] <= Math.floor(target / 5)) returnStr += '→極限成功';
			else if (dice1[0] <= Math.floor(target / 2)) returnStr += '→困難成功';
			else if (dice1[0] <= target) returnStr += '→一般成功';
			else returnStr += '→失敗';

			if (dice1[0] >= 96) {
				if (Math.floor(target / 2) < 50) returnStr += '（困難大失敗）';
				else if (Math.floor(target / 5) < 50) returnStr += '（極限大失敗）';
			}
			return returnStr;
		}
		////CoC7 function 結束
		////死亡flag function 開始
		df() {
			let sheet = ['噗噫噫噫噫－好萌萌啊！！！', '總不會掉進水溝裡面吧。', '你好像很照顧我的夥伴啊。', '這香菇鮮豔的顏色看起來真好吃。', '這一點不會死啦。', '看來差不多該使出真本事了。', '不要、不行、NO、我還不想死阿！！', '我要往這邊走！', '這邊交給我，你們先走吧！', '這機器我調整的，跑得超順吧。', '拿到最後一個啦啦啦啦！！！', '我啊，回老家就要結婚了。', '千分之一的死亡率還好吧。', '幫我跟我老媽說，謝謝他生下我！', '我只有惡運絕佳啊。', '不過就河豚、處理起來很簡單的。', '我要回房間了！', '再一步就是終點了！', '這個藥跟這個藥混在一起的話…', '這個火柴…好溫暖', '我要跟你同歸於盡！', '這個速度應該能跟上吧。', '我可不會死在這裡！！', '我舔、這個是氰化鉀！', '真希望死前還能來這裡一趟。', '我可是能空手打倒熊的男人啊。', '等那片葉子落下，我也該走了。', '這裡居然有香蕉皮！', '在這個範圍內我是最強的，我贏啦！', '等、等一下！我家生病的女兒還在等我！', '啊、隕石從天上掉下來了！', '只有我知道這房間怎麼進去。', '已經什麼都不怕了。', '我沒有弱點！', '哥哥，我能活著、真的太好了。', '無(自由決定)'];
			return '死亡flag：' + sheet[Math.floor(Math.random() * sheet.length)];
		}

		dfs() {
			let sheet = ['第一次的跑腿in超市', '學校午餐時間的戰鬥中', '在迴轉壽司不吃壽司而是轉椅子', '來到大眾浴池大廳的我…', '培根蛋義大利麵專家出現在義大利肉醬麵專門店', '攝影專家& Coser in 活動會場', '比賽前十分鐘的足球場', '婆婆正在吃麻糬、沒問題吧。', '世界講話最快準決賽開始！', '來到了植物園(有種大麻)', '花子(牛)生產中', '巨大隕石落下的新聞在客廳放送中', '會抽出靈魂的相機攝影會', '那個超有名偶像好像在那個拉麵店欸！', '很受各種人觀迎的高中屋頂', '剛要曬衣服就開始下雨了', '不小心就爬到夢中富士山的半山腰了', '不小心打爆美術館名畫的我…', '喜歡A的B、喜歡B的C、喜歡C的A，三人巧遇', '剛買回來的泰迪熊棉花跑出來了', '在會議室肚子超痛NOW！', '沉睡著聖劍的山頂上…', '要擊敗惡龍的王子和公主在湖邊…', '戰爭中，駕駛駛向戰地…', '在愛麗絲的仙境裡迷路了…', '喇叭vs耳機 ～identity的戰爭～', '走在路上時長脖女捲了過來…', '爸爸在路邊撿了恐龍回來…', '自家地板下有某種巢穴，是什麼的巢穴啊…？', '跟超級美女交往的我…', '兩隻腳走路的黑貓送包裹上門了', '我們這邊每天有三分鐘，會出現巨大的絲襪男。啊、出現了', '封印在傳說水晶中的女神大人就在我眼前…', '異形vs終極戰士vs臭酸宅(我)', '生魚片拼盤的魚頭跟我搭話了…', '格鬥家在我眼前「喔喔喔喔喔」的喊著…', '來到住著妖精的森林啦！', '拿著菜刀的傢伙從電腦螢幕裡跑了出來NOW', '西瓜藤從嘴裡伸出來了！', '已經不吃不喝一天了，這就是最後的釣餌了啊。', '眼前的傢伙說我們是虛擬世界的居民', '糖果從天下掉下來了！'];
			return '死亡flag場景表：' + sheet[Math.floor(Math.random() * sheet.length)];
		}

		dfr() {
			let sheet = ['社團夥伴', '粉絲與偶像', '競爭對手', '師兄弟', '上司與部下', '心之友', '親子', '戰友', '夥伴', '夫婦', '孽緣', '青梅竹馬', '援軍', '商業夥伴', '裝傻和吐槽', '依賴', '同卵雙胞胎', '指腹為婚', '三角關係的兩個人', '主治醫生和患者', '信徒與教主', '被害者與加害者', '必要的互相傷害', '戀人', '濱口跟有野', '奇奇與蒂蒂', '魔法少女與吉祥物', '光美跟少女', '船長與船員', '我是你你是我', '前世與轉世', '被抓住弱點的奴隸', '合體', '二次元和三次元', '富豪跟保鑣', '魔王與勇者'];
			return '死亡flag關係表：' + sheet[Math.floor(Math.random() * sheet.length)];
		}
		////死亡flag function 結束
		////請勿入睡 function 開始
		//////請勿入睡PC骰
		dontRestYourHeadPC(inputStr) {
			let returnStr = '請勿入睡擲骰：';
			let d = 0;
			let dArray = [];
			let dLead = 1;
			let e = 0;
			let eArray = [];
			let eLead = 1;
			let m = 0;
			let mArray = [];
			let mLead = 1;
			let success = 0;

			if (inputStr.match(/\d+d/) != null) {
				d = inputStr.match(/\d+d/)[0].toString();
				d = d.match(/\d+/).toString();
			}
			if (inputStr.match(/\d+e/) != null) {
				e = inputStr.match(/\d+e/)[0].toString();
				e = e.match(/\d+/).toString();
			}
			if (inputStr.match(/\d+m/) != null) {
				m = inputStr.match(/\d+m/)[0].toString();
				m = m.match(/\d+/).toString();
			}

			for (let i = 0; i < d; i++) {
				dArray[i] = Math.ceil(Math.random() * 6);
				if (dArray[i] < 4) success++;
			}
			for (let i = 0; i < e; i++) {
				eArray[i] = Math.ceil(Math.random() * 6);
				if (eArray[i] < 4) success++;
			}
			for (let i = 0; i < m; i++) {
				mArray[i] = Math.ceil(Math.random() * 6);
				if (mArray[i] < 4) success++;
			}

			dArray.sort();
			eArray.sort();
			mArray.sort();
			dArray.reverse();
			eArray.reverse();
			mArray.reverse();

			returnStr += '成功';
			returnStr += success;

			if (d == 0) dLead = 0;
			if (e == 0) eLead = 0;
			if (m == 0) mLead = 0;

			let dTemp = 0;
			let eTemp = 0;
			let mTemp = 0;
			for (let i = 0; i < Math.max(d, e, m) && (dLead + eLead + mLead) > 1; i++) {
				if (!dLead || i >= d) dTemp = 0;
				else dTemp = dArray[i];
				if (!eLead || i >= e) eTemp = 0;
				else eTemp = eArray[i];
				if (!mLead || i >= m) mTemp = 0;
				else mTemp = mArray[i];

				if (dTemp < eTemp || dTemp < mTemp) dLead = 0;
				if (eTemp < dTemp || eTemp < mTemp) eLead = 0;
				if (mTemp < eTemp || mTemp < dTemp) mLead = 0;
			}

			if (dLead) {
				returnStr += '→紀律主導';
			} else if (eLead) {
				returnStr += '→疲憊主導';
			} else if (mLead) {
				returnStr += '→瘋狂主導';
			}

			dArray.reverse();
			eArray.reverse();
			mArray.reverse();

			if (d > 0) {
				returnStr += '\n';
				returnStr += '紀律骰：[';
				for (let i = 0; i < d; i++) {
					returnStr += dArray[i];
					if (i != d - 1) returnStr += ', ';
				}
				returnStr += ']';
			}

			if (e > 0) {
				returnStr += '\n';
				returnStr += '疲憊骰：[';
				for (let i = 0; i < e; i++) {
					returnStr += eArray[i];
					if (i != e - 1) returnStr += ', ';
				}
				returnStr += ']';
			}

			if (m > 0) {
				returnStr += '\n';
				returnStr += '瘋狂骰：[';
				for (let i = 0; i < m; i++) {
					returnStr += mArray[i];
					if (i != m - 1) returnStr += ', ';
				}
				returnStr += ']';
			}

			return returnStr;
		}

		//////請勿入睡GM骰
		dontRestYourHeadGM(inputStr) {
			let returnStr = '請勿入睡擲骰：';
			let p = 0;
			let pArray = [];
			let success = 0;

			if (inputStr.match(/\d+p/) != null) {
				p = inputStr.match(/\d+p/)[0].toString();
				p = p.match(/\d+/).toString();
			}

			for (let i = 0; i < p; i++) {
				pArray[i] = Math.ceil(Math.random() * 6);
				if (pArray[i] < 4) success++;
			}

			pArray.sort();

			returnStr += '成功';
			returnStr += success;
			returnStr += '→災難主導';

			returnStr += '\n';
			returnStr += '災難骰：[';
			for (let i = 0; i < p; i++) {
				returnStr += pArray[i];
				if (i != p - 1) returnStr += ', ';
			}
			returnStr += ']';

			return returnStr;
		}
		////請勿入睡 function 結束
		////Fudge骰開始
		fudge(inputStr) {
			let returnStr = 'Fudge擲骰：';
			let num = 0;
			inputStr = inputStr.replace(/fg/, '');
			let bonus = 0;
			if (inputStr !== '')
				bonus = eval(inputStr);
			returnStr += '[';
			for (let i = 0; i < 4; i++) {
				let dice = Math.floor(Math.random() * 3) - 1;
				switch (dice) {
					case -1:
						returnStr += '-';
						break;
					case 0:
						returnStr += '0';
						break;
					case 1:
						returnStr += '+';
						break;
				}
				num += dice;
			}
			returnStr += ']';
			if (bonus != 0) {
				if (bonus.toString().match(/-/) === null)
					returnStr += '+';
				returnStr += bonus;
			}
			returnStr += " = " + (num + bonus);
			return returnStr;
		}
		////Fudge骰結束
		////cook骰開始
		cook(inputStr){
			let returnStr = '料理擲骰：';
			let num = Number(inputStr.match(/\d+/)[0]);
			let dice = Math.ceil(Math.random() * 12);
			returnStr += '[' + dice + '] → ';
			if(dice <= num/4){
				returnStr += '☆至福☆！極限成功！';
			}
			else if(dice <= num/2){
				returnStr += '美味！困難成功！';
			}
			else if(dice <= num){
				returnStr += '好！一般成功！';
			}
			else{
				switch(Math.floor(Math.random() * 5)){
					case 0:
						returnStr += '沒完成的料理沒有試吃的必要！';
						break;
					case 1:
						returnStr += '平淡的創意，卻企圖以華麗的表演來掩飾，你應該感到慚愧！';
						break;
					case 2:
						returnStr += '我還是坦白說吧，你的問題不是廚藝，而是你的人格有問題！';
						break;
					case 3:
						returnStr += '你每天只顧著玩，根本就沒有好好用心學做菜！';
						break;
					case 4:
						returnStr += '你現在所有的，就只有這個丟臉的難吃印了！';
						break;		
				}
				
			}
			return returnStr;
		}
		
		cookJudge(inputStr){
			let returnStr = '料理擲骰：\n';
			inputStr = inputStr.replace(/ck /i, '');
			let chef = inputStr.split(' ');
			let score = new Array();
			for(let i = 0; i < chef.length; i++){
				score[i] = Number(chef[i].match(/\d+/)[0]);
				chef[i] = chef[i].replace(score[i].toString(), '');
				if(score[i] > 11)	score[i] = 11;
			}
			let rank = new Array();
			let rank_fail_num = new Array();
			let fail_num = new Array();
			let fail_flag = new Array();
			for(let i = 0; i < chef.length; i++){
				fail_num[i] = 0;
				fail_flag[i] = false;
			}
			while(rank.length < chef.length){
				for(let i = 0; i < chef.length; i++){
					if(!fail_flag[i]){
						let dice = Math.ceil(Math.random() * 12);
						if(dice <= score[i]){
							fail_num[i]++;
						}
						else{
							fail_flag[i] = true;
							rank_fail_num[rank.length] = fail_num[i];
							rank[rank.length] = chef[i];
						}
					}
				}
			}
			returnStr += '贏家：' + rank[rank.length - 1] + '\n-------------------\n';
			for(let i = rank.length - 2; i >= 0; i--){
				returnStr += rank[i] + ' → 重大失誤：' + rank_fail_num[i] + '\n';
			}
			return returnStr;
		}
		////cook骰結束
		////雜項
		//////峻巍骰
		GinWay() {
			let GWSheet = ['哼', '口亨', '閉嘴', '閉嘴閉嘴閉嘴閉嘴', '機掰', '機掰機掰機掰機掰', 'G8', '過份', '嗯哼哼:(', '你們真的很機掰', '霍普難過 霍普哀傷 霍普心痛痛', '你們都欺負可憐的霍普', '你們這樣欺負霍普心都不會痛嗎？'];
			return GWSheet[Math.floor(Math.random() * GWSheet.length)];
		}
		//////投人機
		terbuchet(inputStr) {
			let returnStr = '咻～！';
			if (inputStr.match(/(活性|界面|^投人機$)/) != null) return undefined;
			returnStr += inputStr.replace(/投人機$/, '飛了');
			returnStr += Math.pow(10, Math.random() * 8 - 2).toFixed(2) + '公尺！';
			return returnStr;
		}
		//////峻巍流言表
		GinWayRm() {
			let returnStr = 'SW2.0流言：';
			returnStr += '霍普';
			returnStr += this.swRmSheet2[Math.floor(Math.random() * this.swRmSheet2.length)];
			returnStr += this.swRmSheet3[Math.floor(Math.random() * this.swRmSheet3.length)];
			return returnStr;
		}
		//////峻巍怪物表
		GinWayMonster() {
			let returnStr = '隨機怪物：';
			let rareSheet = ['N', 'R', 'SR', 'SSR', 'UR', 'LR', 'XLR'];
			let porSheet = ['曲速',
				'量子',
				'機械',
				'靈魂',
				'青銅',
				'聖光',
				'貴族',
				'巨大',
				'古代',
				'火焰',
				'冰凍',
				'閃電',
				'破魔',
				'戰爭',
				'巨石',
				'迷你',
				'共產',
				'複製',
				'雙生',
				'狂暴',
				'死亡',
				'末日',
				'純種',
				'科技',
				'音樂',
				'音速',
				'光速',
				'毀滅',
				'偉大',
				'飛天',
				'幽暗',
				'深淵',
				'不死',
				'天界',
				'天頂',
				'雪原',
				'荒野',
				'深海',
				'智慧',
				'腐敗',
				'迴旋',
				'生命',
				'野蠻',
				'狼化',
				'原子',
				'混血',
				'核子',
				'自動化',
				'劣質',
				'傳說',
				'漂浮',
				'黑臉',
				'大地',
				'背德',
				'絕望',
				'瘟疫',
				'損壞',
				'信仰',
				'律法',
				'光明',
				'九重天',
				'嗜血',
				'爬行',
				'正義',
				'九十九兆',
				'腹黑',
				'希望',
				'愛情',
				'夢想',
				'法式',
				'劇毒',
				'非核',
				'夢幻',
				'孤獨',
				'六道',
				'堅定',
				'瘦弱',
				'親切',
				'色情',
				'狂喜',
				'墮落',
				'憤怒',
				'悲觀',
				'王國',
				'隱形',
				'透明',
				'悲傷',
				'傲慢',
				'未知',
				'忌妒',
				'怠惰',
				'暴食',
				'貪婪',
				'香煎',
				'菁英',
				'魔法',
				'五花毒斑',
				'黃金',
				'兄貴',
				'星塵',
				'星爆',
				'戰損',
				'綑綁',
				'美味',
				'驕傲',
				'美麗',
				'帶皮',
				'無痕',
				'魚鱗',
				'偷窺',
				'無懼',
				'大義',
				'納粹',
				'猥瑣',
				'無敵',
				'不敗',
				'隔壁',
				'狂妄',
				'醜陋',
				'北海',
				'南海',
				'東海',
				'太平洋',
				'天上天下',
				'天地無雙',
				'真三國無雙',
				'神準',
				'吸收',
				'吐出',
				'夜襲',
				'雙翼',
				'強襲',
				'月光',
				'九尾',
				'閃光',
				'接頭',
				'天罰',
				'迷幻',
				'閉嘴',
				'嗯哼哼',
				'黑暗',
				'線程破滅',
				'華麗',
				'五彩斑斕',
				'琉明輝夜',
				'巨石斧',
				'舞動',
				'無生自律',
				'年老',
				'無延遲',
				'長毛',
				'終結者',
				'高挑',
				'高聲長嘯',
				'銀冰',
				'編譯錯誤',
				'勇敢',
				'聰明',
				'隨遇而安',
				'勤奮',
				'寂寞',
				'富裕',
				'貧困',
				'緊張',
				'利牙',
				'邪惡',
				'無以名狀',
				'獨眼',
				'博學多聞',
				'忠心耿耿',
				'長尾',
				'木訥寡言',
				'口吃',
				'殘破不堪',
				'愉悅',
				'雙頭',
				'無償退費',
				'吃到飽',
				'眩光',
				'青海',
				'極黑',
				'轉生',
				'急速',
				'異世界',
				'狂化',
				'狂犬病',
				'奶油',
				'五奈米'
			];
			let monSheet = ['蝙蝠',
				'犀牛',
				'龍',
				'幽靈',
				'鳥',
				'暴徒',
				'士兵',
				'蘑菇',
				'微生物',
				'巨蛛',
				'哥布林',
				'唯一神',
				'狂戰士',
				'蜥蜴',
				'克拉肯',
				'海怪',
				'獵豹',
				'奇美拉',
				'史萊姆',
				'賢者',
				'妖精',
				'恐龍',
				'牛頓',
				'獵鷹',
				'魔像',
				'人',
				'魔書',
				'蛆蟲',
				'雕像',
				'觸手',
				'食肉馬',
				'馴鹿',
				'惡魔',
				'天使',
				'殭屍',
				'無人飛行器',
				'狼人',
				'鬼',
				'毒蛇',
				'毒蠍',
				'梅杜沙',
				'巨熊',
				'巨人',
				'亞伯拉罕',
				'林肯',
				'獅子',
				'尼哥',
				'法國人',
				'水怪',
				'魚人',
				'樹妖',
				'巫妖',
				'蜥蜴人',
				'媚魔',
				'獸人',
				'骷髏',
				'戰象',
				'刺蝟',
				'木乃伊',
				'牛頭人',
				'鬥牛',
				'報喪女妖',
				'食人魔',
				'天馬',
				'飛龍',
				'河馬',
				'無頭騎士',
				'獨角獸',
				'九頭蛇',
				'蚰蜒',
				'矮人',
				'榴槤',
				'蕃茄汁',
				'藍綠藻',
				'石頭',
				'跳蚤',
				'塵蟎',
				'劍靈',
				'魔鬼',
				'泰迪熊',
				'魔王',
				'勇者',
				'巫師',
				'怪物',
				'航空母艦',
				'孟加拉虎',
				'戰鬥機',
				'轟炸機',
				'寄居蟹',
				'大花咸豐草',
				'三角頭',
				'聖鬥士',
				'魔鬼氈',
				'月人',
				'壁虎',
				'鯊魚',
				'大麻',
				'通訊衛星',
				'太空梭',
				'精靈',
				'女高中生',
				'替身',
				'劣等生',
				'五花豬',
				'中子星',
				'BMW',
				'茨木童子',
				'狸貓戰將',
				'KY羅琳',
				'章魚',
				'水螅觸絲',
				'魷魚',
				'藤壺',
				'美人魚',
				'奇異鳥',
				'海馬',
				'刀',
				'企鵝',
				'奇異果',
				'蘇卡達象龜',
				'戰象',
				'夜魔',
				'骷髏王',
				'螢火蟲',
				'金龜子',
				'阿斯特拉',
				'幻覺',
				'幻影',
				'巧克力',
				'巨神兵',
				'五胞胎',
				'十八銅人',
				'美少女',
				'藝人',
				'雙胞胎',
				'老人',
				'藍芽耳機',
				'和尚',
				'牧師',
				'地精',
				'男人',
				'金魚',
				'怪盜',
				'光導劍',
				'海怪',
				'孢子群',
				'狼蛛',
				'軍人',
				'人蔘粉',
				'嬰兒',
				'邪神',
				'鼠',
				'公主',
				'棘皮星',
				'教父',
				'帝雉',
				'北極熊',
				'艾莉絲',
				'路易斯',
				'小豬佩琪',
				'奇術師',
				'鳳凰',
				'奶奶',
				'巨峰葡萄',
				'黏菌',
				'編年史',
				'轉生者',
				'狐狸',
				'吟遊詩人',
				'匕首',
				'血滴子',
				'音樂盒',
				'終結者',
				'納粹',
				'法西斯',
				'墨索里尼',
				'礦工',
				'牛郎',
				'親子丼'
			];
			let itemSheet = ['肉',
				'皮革',
				'毛皮',
				'鬃毛',
				'觸手',
				'終結者',
				'吸盤',
				'木材',
				'藤蔓',
				'葉片',
				'花瓣',
				'花',
				'花蕊',
				'花粉',
				'染料',
				'蘑菇',
				'光球',
				'孢子',
				'魔眼',
				'浸出物',
				'氣體',
				'瘴氣',
				'毒液',
				'外殼',
				'零件',
				'核心',
				'鱗片',
				'粉末',
				'碎片',
				'金屬',
				'種子',
				'電路',
				'果實',
				'中樞',
				'裝甲',
				'牙',
				'爪',
				'蛋',
				'卵',
				'血液',
				'油',
				'噴火囊',
				'犄角',
				'勳章',
				'徽章',
				'旗幟',
				'面具',
				'聲帶',
				'吊飾',
				'眼球',
				'鑰匙',
				'大腦',
				'寶石',
				'毛髮',
				'羽毛',
				'羽衣',
				'毒針',
				'王冠',
				'膽囊',
				'魂魄',
				'精華',
				'黏液',
				'結石',
				'晶石',
				'枝芽',
				'翅膀',
				'氣息',
				'能量',
				'之刃',
				'之杖',
				'之盾',
				'之槍',
				'之弓',
				'之鎚',
				'之靴',
				'腰帶',
				'戒指',
				'項鍊',
				'頭盔',
				'盔甲',
				'法袍',
				'耳環',
				'鏡片',
				'透鏡',
				'炸彈',
				'火藥',
				'物質',
				'超聚合體',
				'尾巴',
				'十二指腸',
				'天線',
				'腎臟',
				'沙',
				'水',
				'捲軸',
				'技能書',
				'時裝',
				'產生器',
				'頭骨',
				'骨頭',
				'心臟'
			];
			let itemStr = '無';
			let mon = monSheet[Math.floor(Math.random() * monSheet.length)];
			let rare = 1;
			for (let i = Math.random() * Math.pow(1.5, rareSheet.length - 1); i > 1; i = i / 1.5) {
				rare++;
			}
			rare = rareSheet.length - rare;
			for (let i = 0; i <= rare; i++) {
				let por = porSheet[Math.floor(Math.random() * porSheet.length)];
				returnStr += por;
				for (let j = Math.floor(Math.random() * 3); j > 0; j--) {
					if (itemStr !== '無')
						itemStr += ', ';
					else
						itemStr = '';
					itemStr += rareSheet[Math.floor(Math.random() * rare)] + ' ' + por + mon + itemSheet[Math.floor(Math.random() * itemSheet.length)];
				}
			}
			returnStr += mon;
			returnStr += '\n';
			returnStr += '稀有度：';
			returnStr += rareSheet[rare];
			returnStr += '\n';
			returnStr += '掉落物：';
			returnStr += itemStr;
			returnStr += '\n';
			returnStr += 'HP：';
			returnStr += Math.floor(Math.pow(10, Math.random() * (rare + 1) + rare / 2));
			returnStr += '\n';
			returnStr += 'MP：';
			returnStr += Math.floor(Math.pow(10, Math.random() * (rare + 1) + rare / 2));
			returnStr += '\n';
			returnStr += 'ATK：';
			returnStr += Math.floor(Math.pow(10, Math.random() * (rare + 1) + rare / 4));
			returnStr += '\n';
			returnStr += 'DEF：';
			returnStr += Math.floor(Math.pow(10, Math.random() * (rare + 1) + rare / 4));
			returnStr += '\n';

			return returnStr;
		}
		//////峻巍角色表
		GinWayCharacter() {
			let returnStr = '隨機霍普角色：';
			let colourSheet = ['紅', '黃', '藍', '綠', '金', '黑', '紫', '橘', '白', '銀', '青'];
			let describeSheet = ['沉著', '陽光', '長髮', '俐落', '爽朗', '溫和', '冷酷'];
			let motionSheet = ['手中拿著書', '手中拿著魯特琴', '背著大劍', '粘著正太', '帶著眼鏡', '瞪著你們', '笑著看你們'];
			let mode = Math.floor(Math.random() * 7);

			returnStr += '一名';
			if (mode == 0) {
				returnStr += '女性。';
			} else {
				returnStr += colourSheet[Math.floor(Math.random() * colourSheet.length)];
				returnStr += '色頭髮';
				returnStr += colourSheet[Math.floor(Math.random() * colourSheet.length)];
				returnStr += '色眼睛';
				returnStr += '的';
				if (mode == 1) {
					returnStr += '可愛正太，天才聰穎弱氣崇高偉大無上，相比之下你們都自慚形穢，手上拿著一本書。';
				} else {
					returnStr += describeSheet[Math.floor(Math.random() * describeSheet.length)];
					returnStr += '男性，';
					if (Math.random() > 0.5) {
						returnStr += motionSheet[Math.floor(Math.random() * motionSheet.length)];
						returnStr += '，';
					}
					returnStr += '長得很帥。';

				}
			}
			return returnStr;
		}

		//////鑑定
		appraisal(inputStr) {
			if (inputStr.match(/^(鑑定武器|apsw)/) != null) return this.appraisalWp(inputStr);
			else if (inputStr.match(/^(鑑定防具|apsa)/) != null) return this.appraisalAm(inputStr);
			else if (inputStr.match(/^(鑑定道具|apsi)/) != null) return this.appraisalIt(inputStr);
			else {
				inputStr = inputStr.replace(/^(鑑定|aps)\s*/, '');
				if (inputStr.match(/(弓|弩|炮|鏢|箭|鎗|劍|刀|槍|矛|棍|匕首|杖|戟|鎬|鞭|刃|斧|連枷)$/) != null) return this.appraisalWp(inputStr);
				if (inputStr.match(/(盾|甲)$/) != null) return appraisalAm(inputStr);
				if (inputStr === '') return undefined;
				let seed = this.strToSeed(inputStr);
				if (this.srand(seed++) < 1 / 3) return this.appraisalWp(inputStr);
				else if (this.srand(seed++) < 2 / 3) return this.appraisalAm(inputStr);
				else return this.appraisalIt(inputStr);
			}
		}

		appraisalWp(inputStr) {
			inputStr = inputStr.replace(/^(鑑定武器|apsw)\s*/, '');
			if (inputStr === '') return undefined;
			let seed = this.strToSeed(inputStr);
			let diceSheet = [
				[5, 'd2'],
				[80, 'd4'],
				[60, 'd6'],
				[40, 'd8'],
				[30, 'd10'],
				[20, 'd12'],
				[10, 'd20'],
				[1, 'd100']
			];
			let typeSheet = [
				[50, '鈍擊'],
				[50, '穿刺'],
				[50, '劈砍'],
				[2, '酸蝕'],
				[2, '寒冰'],
				[2, '火焰'],
				[2, '閃電'],
				[2, '雷鳴'],
				[2, '毒素'],
				[1, '死靈'],
				[1, '光耀'],
				[1, '精神'],
				[2, '力場']
			];

			let range_tag = inputStr.match(/(弓|弩|炮|鏢|箭|鎗)$/) != null;
			let GinWay_tag = inputStr.match(/(峻巍|霍普|哼|機掰|G8|閉嘴|口亨)/) != null;

			let returnStr = '鑑定結果：' + inputStr + '\n';
			var n = 1;
			while (0.2 > this.srand(seed++)) n++;
			if (!GinWay_tag)
				returnStr += '傷害：' + n + this.extractStr(diceSheet, this.srand(seed++));
			else
				returnStr += '傷害：1d1';

			let mag_n = 0;
			if (!GinWay_tag)
				while (0.2 > this.srand(seed++)) mag_n++;
			else
				while (0.9 > this.srand(seed++)) mag_n++;
			if (mag_n != 0) {
				if (!GinWay_tag)
					returnStr += '+';
				else
					returnStr += '-';
				returnStr += mag_n;
			}
			if (!GinWay_tag)
				returnStr += this.extractStr(typeSheet, this.srand(seed++)) + '\n';
			else
				returnStr += this.extractStr([
					[1, '哼'],
					[1, '閉嘴'],
					[1, '機掰']
				], this.srand(seed++)) + '\n';

			returnStr += '魔法物品：';
			if (mag_n > 0) {
				if (!GinWay_tag)
					returnStr += '+';
				else
					returnStr += '-';
				returnStr += mag_n + '\n';
			} else if (0.2 > this.srand(seed++)) {
				mag_n = 1;
				while (0.2 > this.srand(seed++)) mag_n++;
				if (!GinWay_tag)
					returnStr += mag_n + '種額外魔法效果' + '\n';
				else
					returnStr += mag_n + '種額外霍普效果' + '\n';;
			} else returnStr += '否' + '\n';

			returnStr += '價格：';
			if (GinWay_tag)
				returnStr += '負債';
			let price = 0;
			if (mag_n == 0) {
				if (0.5 > this.srand(seed++)) price++;
				price += price + this.srand(seed++);
			}
			//增加魔法道具價值
			else {
				price = mag_n + 5 - this.srand(seed++);
			}
			price = Math.floor(Math.pow(10, price));
			returnStr += this.priceToCoin(price) + '\n';

			returnStr += '重量：' + (this.srand(seed++) * 20).toFixed(1) + '磅' + '\n';

			returnStr += '屬性：';
			let proStr = '';
			if (!range_tag && 0.8 > this.srand(seed++)) {
				//近戰
				let weight = this.extractStr([
					[1, ''],
					[1, '輕型'],
					[1, '重型']
				], this.srand(seed++));
				proStr += weight;
				if (0.25 > this.srand(seed++) && weight !== '重型') {
					if (proStr !== '') proStr += '、';
					proStr += '靈巧';
				}
				if (0.25 > this.srand(seed++)) {
					if (proStr !== '') proStr += '、';
					proStr += '觸及';
				}
				if (0.15 > this.srand(seed++) && weight !== '重型') {
					if (proStr !== '') proStr += '、';
					let range = Math.ceil((this.srand(seed++) * 14) + 1) * 10;
					proStr += '投擲' + '（' + range + '/' + range * (Math.floor(this.srand(seed++) * 2) + 3) + '呎）';
				}
				let doubleHand = false;
				if (0.25 > this.srand(seed++) && weight !== '輕型') {
					if (proStr !== '') proStr += '、';
					proStr += '雙手';
					doubleHand = true;
				}
				if (0.25 > this.srand(seed++) && !doubleHand) {
					if (proStr !== '') proStr += '、';
					proStr += '可雙手';
				}
			} else {
				//遠戰
				let range = Math.ceil((this.srand(seed++) * 13) + 2) * 10;
				proStr += '彈藥' + '（' + range + '/' + range * (Math.floor(this.srand(seed++) * 2) + 3) + '呎）';

				let weight = this.extractStr([
					[1, ''],
					[1, '輕型'],
					[1, '重型']
				], this.srand(seed++));
				if (weight !== '') proStr += '、';
				proStr += weight;

				if (0.1 > this.srand(seed++) && weight !== '重型') {
					if (proStr !== '') proStr += '、';
					proStr += '靈巧';
				}
				if (0.25 > this.srand(seed++) && weight !== '輕型') {
					if (proStr !== '') proStr += '、';
					proStr += '雙手';
				}
				if (0.25 > this.srand(seed++)) {
					if (proStr !== '') proStr += '、';
					proStr += '裝填';
				}
			}
			if (proStr === '') proStr = '-';
			returnStr += proStr + '\n';

			return returnStr;
		}

		appraisalAm(inputStr) {
			inputStr = inputStr.replace(/^(鑑定防具|apsa)\s*/, '');
			if (inputStr === '') return undefined;
			let seed = this.strToSeed(inputStr);
			let GinWay_tag = inputStr.match(/(峻巍|霍普|哼|機掰|G8|閉嘴|口亨)/) != null;
			let sheld_tag = inputStr.match(/盾$/) != null;
			let armor_tag = inputStr.match(/甲$/) != null;

			let returnStr = '鑑定結果：' + inputStr + '\n';
			let weight = this.extractStr([
				[5, '輕甲'],
				[5, '中甲'],
				[5, '重甲'],
				[1, '盾']
			], this.srand(seed++));
			if (armor_tag) weight = this.extractStr([
				[5, '輕甲'],
				[5, '中甲'],
				[5, '重甲']
			], this.srand(seed++));
			if (sheld_tag) weight = '盾';
			returnStr += '類型：' + weight + '\n';

			returnStr += 'AC：';
			let ac = 10;
			switch (weight) {
				case '輕甲':
					ac = 11;
					while (0.2 > this.srand(seed++)) ac++;
					break;
				case '中甲':
					ac = 12;
					while (0.4 > this.srand(seed++)) ac++;
					break;
				case '重甲':
					ac = 14;
					while (0.5 > this.srand(seed++)) ac++;
					break;
				case '盾':
					ac = 2;
					if (!GinWay_tag)
						returnStr += '+';
					else
						returnStr += '-';
					break;
			}
			if (GinWay_tag && weight !== '盾')
				ac -= 10;
			returnStr += ac;
			switch (weight) {
				case '輕甲':
					returnStr += '+敏捷調整值';
					break;
				case '中甲':
					ac = 12;
					returnStr += '+敏捷調整值（最多為2）';
					break;
			}
			let mag_n = 0;
			if (!GinWay_tag)
				while (0.2 > this.srand(seed++)) mag_n++;
			else
				while (0.9 > this.srand(seed++)) mag_n++;
			if (mag_n != 0) {
				if (!GinWay_tag)
					returnStr += '+';
				else
					returnStr += '-';
				returnStr += mag_n;
			}
			returnStr += '\n';

			returnStr += '魔法物品：';
			if (mag_n > 0) {
				if (!GinWay_tag)
					returnStr += '+';
				else
					returnStr += '-';
				returnStr += mag_n + '\n';
			} else if (0.2 > this.srand(seed++)) {
				mag_n = 1;
				while (0.2 > this.srand(seed++)) mag_n++;
				if (!GinWay_tag)
					returnStr += mag_n + '種額外魔法效果' + '\n';
				else
					returnStr += mag_n + '種額外霍普效果' + '\n';;
			} else returnStr += '否' + '\n';

			returnStr += '價格：';
			if (GinWay_tag)
				returnStr += '負債';
			let price = 0;
			if (mag_n == 0) {
				if (0.5 > this.srand(seed++)) price++;
				price += price + this.srand(seed++);
			}
			//增加魔法道具價值
			else {
				price = mag_n + 5 - this.srand(seed++);
			}
			price = Math.floor(Math.pow(10, price));
			returnStr += this.priceToCoin(price) + '\n';

			returnStr += '重量：' + Math.ceil(this.srand(seed++) * 60 + 10) + '磅' + '\n';

			if (weight === '重甲') {
				returnStr += '力量需求：' + (ac - 3) + '\n';
			}

			switch (weight) {
				case '輕甲':
					if (0.2 > this.srand(seed++)) returnStr += '隱匿：劣勢\n';
					break;
				case '中甲':
					if (0.4 > this.srand(seed++)) returnStr += '隱匿：劣勢\n';
					break;
				case '重甲':
					returnStr += '隱匿：劣勢\n';
					break;
			}

			return returnStr;
		}

		appraisalIt(inputStr) {
			inputStr = inputStr.replace(/^(鑑定道具|apsi)\s*/, '');
			if (inputStr === '') return undefined;
			let seed = this.strToSeed(inputStr);
			let GinWay_tag = inputStr.match(/(峻巍|霍普|哼|機掰|G8|閉嘴|口亨)/) != null;
			let typeSheet = [
				[2, '奇物'],
				[1, '藥水'],
				[5, '戒指'],
				[1, '捲軸'],
				[1, '魔杖'],
				[1, '權杖'],
				[1, '法杖'],
				[20, '素材'],
				[20, '其他'],
				[5, '廢棄品']
			];

			let returnStr = '鑑定結果：' + inputStr + '\n';

			let type = this.extractStr(typeSheet, this.srand(seed++));
			if (GinWay_tag) type = '廢棄品';
			returnStr += '類型：' + type + '\n';

			returnStr += '魔法物品：';
			let mag_n = 0;
			if (type.match(/(藥水|奇物|捲軸|魔杖|權杖|法杖)/) != null) mag_n = 1;
			if (!GinWay_tag)
				while (0.2 > this.srand(seed++)) mag_n++;
			else
				while (0.9 > this.srand(seed++)) mag_n++;
			if (mag_n > 0) {
				if (!GinWay_tag)
					returnStr += mag_n + '種額外魔法效果' + '\n';
				else
					returnStr += mag_n + '種額外霍普效果' + '\n';;
			} else returnStr += '否' + '\n';

			returnStr += '價格：';
			if (GinWay_tag)
				returnStr += '負債';
			let price = 0;
			if (mag_n == 0) {
				if (0.5 > this.srand(seed++)) price++;
				price += price + this.srand(seed++);
			}
			//增加魔法道具價值
			else {
				price = mag_n + 5 - this.srand(seed++);
			}
			price = Math.floor(Math.pow(10, price));
			returnStr += this.priceToCoin(price) + '\n';

			returnStr += '重量：' + (this.srand(seed++) * 100).toFixed(1) + '磅' + '\n';
			return returnStr;
		}

		priceToCoin(price) {
			if (price <= 0) return '-';
			let returnStr = '';
			let coinSheet = ['銅幣', '銀幣', '金幣', '鉑金幣'];
			for (let i = 0; i < 3; i++)
				if (price > 0) {
					returnStr = price % 10 + coinSheet[i] + returnStr;
					price = Math.floor(price / 10);
				}
			if (price > 0) {
				returnStr = price + coinSheet[3] + returnStr;
			}
			return returnStr;
		}
		//////鑑定結束
		////雜項結束
		////幫助
		help(inputStr) {
			let returnStr = '';
			if (inputStr.match(/sw/) != null) {
				returnStr += '======================\n';
				returnStr += 'SW2.0骰組\n';
				returnStr += '======================\n';
				returnStr += '威力骰 Kn+n@n$nGF\n';
				returnStr += '- Kn為威力 威力10即為K10\n';
				returnStr += '- @n為c值 @8即為c值8\n';
				returnStr += '- $為骰目更改 $±n為增加/減少骰目 $n為指定骰目\n';
				returnStr += '- GF為極限命運\n';
				returnStr += '- Ex：K10+3@7$+1\n';
				returnStr += '\n';
				returnStr += '超越判定 SWFC+n\n';
				returnStr += '成長骰 GR\n';
				returnStr += '大失敗表 SWFT\n';
				returnStr += '纏繞表 SWTT\n';
				returnStr += '自製寶物表 SWDI\n';
				returnStr += '自製流言表 SWRM\n';
				returnStr += '- 在PC使用探聽判定或GM沒梗時使用\n';
				returnStr += '- 內容「非常」有特色 請小心服用\n';
				returnStr += '\n';
				returnStr += '自製城鎮生成 SWTW城鎮名\n';
				returnStr += '- 結尾可加「村」、「鎮」、「城」 若沒加則為隨機\n';
				returnStr += '\n';
			} else if (inputStr.match(/sg/) != null) {
				returnStr += '======================\n';
				returnStr += '忍神骰組\n';
				returnStr += '======================\n';
				returnStr += '判定骰 SG+n>=n#n@n\n';
				returnStr += '- >=n為成功值 #n為大失敗值 @n為大成功值\n';
				returnStr += '- Ex：SG>=6,SG+2>=7#4@10\n';
				returnStr += '\n';
				returnStr += '情感表 SGET\n';
				returnStr += '大失敗表 SGFT\n';
				returnStr += '分野表 SGRTT\n';
				returnStr += '變調表 SGWT\n';
				returnStr += '戰國變調表 SGGWT\n';
				returnStr += '場景表 SGST\n';
				returnStr += '戰場表 SGBT\n';
			} else if (inputStr.match(/dryh/) != null) {
				returnStr += '======================\n';
				returnStr += '請勿入睡骰組\n';
				returnStr += '======================\n';
				returnStr += 'PC骰 DRYHnDnEnM\n';
				returnStr += '- nD為紀律骰 nE為疲憊骰 nM為瘋狂骰\n';
				returnStr += '- Ex：DRYH3D2E4M\n';
				returnStr += '\n';
				returnStr += 'GM骰 DRYHnP\n';
				returnStr += '- nP為災難骰\n';
				returnStr += '- Ex：DRYH4P\n';
			} else if (inputStr.match(/toy/) != null) {
				returnStr += '======================\n';
				returnStr += '玩具骰組\n';
				returnStr += '======================\n';
				returnStr += '鑑定骰 「鑑定 物品名」 或 「aps 物品名」\n';
				returnStr += '鑑定武器骰 「鑑定 物品名」 或 「apsw 物品名」\n';
				returnStr += '鑑定防具骰 「鑑定防具 物品名」 或 「apsa 物品名」\n';
				returnStr += '鑑定道具骰 「鑑定道具 物品名」 或 「apsi 物品名」\n';
			} else {
				for (let h of this.helpList) {
					if (inputStr.match(new RegExp(`${h.reg.toLowerCase()}`, "g")) != null) {
						returnStr += '======================\n';
						returnStr += `${h.title}\n`;
						returnStr += '======================\n';
						returnStr += h.description;
						break;
					}
				}

				if (returnStr != "") return returnStr;

				returnStr += '泡泡！泡泡！更多泡泡！\n';
				returnStr += '泡沫排序 ver' + this.version + ' 現正運作中☆\n';
				returnStr += '\n';
				returnStr += '======================\n';
				returnStr += '基本骰組\n';
				returnStr += '======================\n';
				returnStr += '基本骰|nDn+n>n\n';
				returnStr += '- 直接輸入nD則為nD6\n';
				returnStr += '- 大小判斷支援[ > , < , >= , <= , = ]五種\n';
				returnStr += '- Ex：2D, 2D6, 3D4-1>=3\n';
				returnStr += '\n';
				returnStr += '基本骰|nBn+n>n\n';
				returnStr += '- 同nDn骰法\n';
				returnStr += '\n';
				returnStr += 'd66骰|d66\n';
				returnStr += '- 隨機選取|choice a b c d\n';
				returnStr += '\n';
				returnStr += '多數隨機選取|choiceN a b c d\n';
				returnStr += '- 選取其中n個選項\n';
				returnStr += '- Ex:choice2 力量 敏捷 智力 生命\n';
				returnStr += '\n';
				returnStr += '======================\n';
				returnStr += 'CoC7th骰組\n';
				returnStr += '======================\n';
				returnStr += 'CC<=n(n)\n';
				returnStr += '- (n)為獎勵骰 負數為懲罰骰\n';
				returnStr += '\n';
				returnStr += '======================\n';
				returnStr += 'SW2.0骰組|詳見 swHelp\n';
				returnStr += '======================\n';
				returnStr += '======================\n';
				returnStr += '忍神骰組|詳見 sgHelp\n';
				returnStr += '======================\n';
				returnStr += '======================\n';
				returnStr += '請勿入睡骰組|詳見 dryhHelp\n';
				returnStr += '======================\n';
				returnStr += '======================\n';
				returnStr += '其他玩具|詳見 toyHelp\n';
				returnStr += '======================\n';

				returnStr += `${this.helpList.map(h => `======================\n${h.title}|詳見 ${h.reg}Help\n======================\n`).join("")}`;
				
				returnStr += '-----------------------\n';
				returnStr += '泡沫排序 dice bot\n';
				returnStr += '以 LarryLo 的 line bot 為基底增加骰組而成\n';
				returnStr += '\n';
				returnStr += '製作者為界面活性\n';
				returnStr += '如果有問題或建議歡迎來聯絡我喔\n';
				returnStr += 'email: surfactciii@gmail.com';
			}
			return returnStr;
		}
}

module.exports = Bot;

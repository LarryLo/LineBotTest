/* jshint esversion:9 */

const Bot = require('./Bot');

class myBot extends Bot {
	constructor() {
		super();

		// you can change bot version here
		this.version = '0.0.1 myBot';
		this.botName = 'myBot';
		const botParser = (inputStr) => {
			// write your bot parser here.
			// maybe you need to preprocess your inputStr.
			let msgSplitter = (/\S+/ig);
			let mainMsg = inputStr.match(msgSplitter);
			let trigger = mainMsg[0];
			//
			if (trigger.match(/^iWant2Parse$/g) != null) {
				return this.runSomeThing();
			}
			if (trigger.match(/^getGlobal$/g) != null) {
				return myBot.someGlobalFunction();
			}
			// You also can call function from original Bot.
			if (trigger.match(/^SWRMER$/) != null) {
				return this.swRm();
			}
			/* ......and so no. */

			// default is return "undefined"
			return;
		};

		const botHelper = [
			// write your bot help here.
			{
				title: "iWant2Parse",
				description:`Description`,
				reg: "iw2p"
			},
			{
				title: "getGlobal",
				description: `Description2`,
				reg: "gGL"
			}
		];
		
		/* ......Other things */


		// Don't change this return.
		return this.parserExtant(this.diceName, botParser).helpExtant(this.diceName, botHelper);
	}

	// The function you need to call from instance by this.functionName().
	runSomeThing() {
		return 'You Got It!';
	}

	//
	static someGlobalFunction() {
		return `I come from Global.`;
	}
}

module.exports = myBot;
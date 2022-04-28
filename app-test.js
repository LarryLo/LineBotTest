/* jshint esversion: 9 */

const myBot = require('./myBot');

let bot = new myBot();

console.log(bot.parseInput('iWant2Parse'));
console.log(bot.parseInput('getGlobal'));
console.log(bot.parseInput('SWRMER'));
console.log(bot.parseInput('Help'));
console.log(bot.parseInput('iw2pHelp'));
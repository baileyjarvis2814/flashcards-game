const { createRound } = require('./round');
const util = require('./util');
const { getDeck } = require('./deck');

function countCards(deck) {
  return deck.length;
}

function printMessage(deck) {
  console.log(`Welcome to FlashCards! You are playing with ${countCards(deck)} cards.
-----------------------------------------------------------------------`);
}

function start() {
  const deck = getDeck();
  const round = createRound(deck);
  printMessage(deck);
  util.main(round);
}

module.exports = { start };

const { getDeck } = require('./deck');
const { evaluateGuess } = require('./card');

function createRound() {
    const deck = getDeck();
    if (!deck.length) {
        console.error('Deck is empty or not initialized properly');
        return null;
    }
    return {
        deck: deck,
        currentCardIndex: 0,
        currentCard: deck[0],
        turns: 0,
        incorrectGuesses: []
    };
}

function takeTurn(guess, round) {
    if (!round.currentCard) {
        return "Round ended";
    }

    const currentCard = round.currentCard;
    const feedback = evaluateGuess(guess, currentCard.correctAnswer);

    round.turns++;

    if (feedback === 'incorrect!') {
        round.incorrectGuesses.push(currentCard.id);
    }

    if (round.currentCardIndex >= round.deck.length - 1) {
        round.currentCard = null;
    } else {
        round.currentCardIndex++;
        round.currentCard = round.deck[round.currentCardIndex];
    }

    return feedback;
}


function calculatePercentCorrect(round) {
    const correctCount = round.turns - round.incorrectGuesses.length;
    const percentCorrect = (correctCount / round.turns) * 100;
    return percentCorrect;
}

function endRound(round) {
    const percentCorrect = calculatePercentCorrect(round);
    const message = `** Round over! ** You answered ${percentCorrect.toFixed(2)}% of the questions correctly!`;
    return message;
}

module.exports = { createRound, takeTurn, calculatePercentCorrect, endRound };

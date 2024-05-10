const { createCard } = require('./card');
const data = require('./data');

const prototypeData = data.prototypeData;

function getDeck() {
    const deck = [];
    for (let i = 0; i < 10; i++) {
        const cardData = prototypeData[i];
        if (cardData) {
            const card = createCard(cardData.id, cardData.question, cardData.answers, cardData.correctAnswer);
            deck.push(card);
        }
    }
    return deck;
}

module.exports = { getDeck };

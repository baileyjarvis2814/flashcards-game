const { createCard } = require('./card');
const data = require('./data');

const prototypeData = data.prototypeData;

function getDeck() {
    const deck = [];  // Local scope ensures a new deck each time

    // Create a 10 card deck with prototype data
    for (let i = 0; i < 10; i++) {
        const cardData = prototypeData[i];
        if (cardData) {  // Ensure that cardData exists to avoid errors
            const card = createCard(cardData.id, cardData.question, cardData.answers, cardData.correctAnswer);
            deck.push(card);
        }
    }

    return deck;
}

module.exports = { getDeck };

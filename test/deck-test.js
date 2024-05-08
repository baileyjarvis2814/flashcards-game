const { expect } = require('chai');
const { getDeck } = require('../src/deck');

describe('Deck', function() {
    let deck;

    beforeEach(function() {
        deck = getDeck();
    });

    it('should contain exactly 10 cards', function() {
        expect(deck).to.have.lengthOf(10);
    });

    it('each card should have required properties with correct types', function() {
        deck.forEach(card => {
            expect(card).to.include.keys('id', 'question', 'answers', 'correctAnswer');
            expect(card.id).to.be.a('number');
            expect(card.question).to.be.a('string');
            expect(card.answers).to.be.an('array').that.is.not.empty;
            expect(card.correctAnswer).to.be.a('string');
        });
    });

    it('should not have duplicate card ids', function() {
        const ids = deck.map(card => card.id);
        const uniqueIds = new Set(ids);
        expect(uniqueIds.size).to.equal(deck.length);
    });

    it('correctAnswer must be one of the answers provided', function() {
        deck.forEach(card => {
            expect(card.answers).to.include(card.correctAnswer);
        });
    });
});


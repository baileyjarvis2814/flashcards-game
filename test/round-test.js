const { expect } = require('chai');
const { createRound, takeTurn, calculatePercentCorrect, endRound } = require('../src/round');

describe('Final Game Tests', function() {
    describe('Round Tests', function() {
        let roundInstance;

        beforeEach(() => {
            roundInstance = createRound();
            console.log('Initialized round with deck:', roundInstance.deck.map(card => card.id));
        });

        it('should initialize a round with correct default values', function() {
            expect(roundInstance.deck).to.be.an('array').with.lengthOf(10);
            expect(roundInstance.currentCard).to.equal(roundInstance.deck[0]);
            expect(roundInstance.turns).to.equal(0);
            expect(roundInstance.incorrectGuesses).to.be.an('array').that.is.empty;
        });
    
        it('should handle a correct guess appropriately', function() {
            const correctGuess = roundInstance.currentCard.correctAnswer;
            let result = takeTurn(correctGuess, roundInstance);
            expect(result).to.equal('correct!');
            expect(roundInstance.turns).to.equal(1);
            expect(roundInstance.incorrectGuesses).to.be.empty;
        });

        it('should calculate percentage correctly after one correct and one incorrect guess', function() {
            takeTurn(roundInstance.currentCard.correctAnswer, roundInstance);
            takeTurn('wrong answer', roundInstance);
    
            const percent = calculatePercentCorrect(roundInstance);
            expect(percent).to.equal(50.00);
        });
    
        it('should provide a correct end round percentage of questions answered correctly', function() {
            takeTurn(roundInstance.currentCard.correctAnswer, roundInstance);
            takeTurn('wrong answer', roundInstance);
    
            const message = endRound(roundInstance);
            expect(message).to.equal(`** Round over! ** You answered 50.00% of the questions correctly!`);
        });

        it('should handle the end of the round gracefully', function() {
            // Taking turns until no more cards are left
            while (roundInstance.currentCard) {
                takeTurn('any guess', roundInstance);
            }
            // Attempt to take a turn after the round has technically ended
            const result = takeTurn('any guess', roundInstance);
            expect(result).to.equal('Round ended');
        });        
    });
});

const { expect } = require('chai');
const { createCard, evaluateGuess } = require('../src/card');

describe('Card Functionality Tests', function() {
    describe('createCard Function Tests', function() {
        it('should correctly create a card with all valid parameters', function() {
            const card = createCard(1, "What is JavaScript?", ["Language", "Framework", "Tool"], "Language");
            expect(card).to.deep.include({
                id: 1,
                question: "What is JavaScript?",
                answers: ["Language", "Framework", "Tool"],
                correctAnswer: "Language"
            });
        });

        it('should return null when any required parameter is missing', function() {
            const cardWithoutQuestion = createCard(2, "", ["Yes", "No"], "Yes");
            const cardWithoutAnswers = createCard(3, "Does it run?", [], "Yes");
            expect(cardWithoutQuestion).to.be.null;
            expect(cardWithoutAnswers).to.be.null;
        });

        it('should evaluate a correct guess correctly', function() {
            const correctAnswer = "Language";
            const result = evaluateGuess("Language", correctAnswer);
            expect(result).to.equal('correct!');
        });

        it('should evaluate an incorrect guess correctly', function() {
            const correctAnswer = "Language";
            const result = evaluateGuess("Framework", correctAnswer);
            expect(result).to.equal('incorrect!');
        });
    });
});

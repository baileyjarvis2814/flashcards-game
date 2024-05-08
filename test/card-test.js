const chai = require('chai');
const expect = chai.expect;

const { createCard, evaluateGuess } = require('../src/card');

describe('createCard', function() {
  it('should handle invalid inputs gracefully', function() {
    const card = createCard(undefined, null, [], null);
    expect(card.id).to.be.undefined;
    expect(card.question).to.be.null;
    expect(card.answers).to.deep.equal([]);
    expect(card.correctAnswer).to.be.null;
  });

  it('should handle questions with special characters', function() {
    const question = "What's the value of &pi; (pi)?";
    const card = createCard(1, question, ['3.14', '3.1415'], '3.1415');
    expect(card.question).to.equal(question);
  });

  it('should process a card with no answers', function() {
    const card = createCard(2, 'What is the meaning of life?', [], '');
    expect(card.answers).to.be.an('array').that.is.empty;
  });
});

describe('evaluateGuess', function() {
  it('should be case insensitive', function() {
    expect(evaluateGuess('Object', 'object')).to.equal('correct!');
  });

  it('should handle null inputs', function() {
    expect(evaluateGuess(null, 'object')).to.equal('incorrect!');
    expect(evaluateGuess('object', null)).to.equal('incorrect!');
  });

  it('should treat similar but not identical strings as incorrect', function() {
    expect(evaluateGuess('object ', 'object')).to.equal('incorrect!');
  });
});

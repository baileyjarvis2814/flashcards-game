function createCard(id, question, answers, correctAnswer) {
    return {
      id: id,
      question: question,
      answers: answers,
      correctAnswer: correctAnswer
    };
  };

  function evaluateGuess(guess, correctAnswer) {
    // Convert both guess and correctAnswer to lower case before comparison
    if (typeof guess === 'string' && typeof correctAnswer === 'string') {
      return guess.toLowerCase() === correctAnswer.toLowerCase() ? 'correct!' : 'incorrect!';
    }
    return 'incorrect!';
  };
  
  module.exports = {createCard, evaluateGuess};
function createCard(id, question, answers, correctAnswer) {
    if (!id || !question || !answers || answers.length === 0 || !correctAnswer) {
        console.error("Invalid card parameters", { id, question, answers, correctAnswer });
        return null;
    }
    return {
        id,
        question,
        answers,
        correctAnswer
    };
}

function evaluateGuess(guess, correctAnswer) {
    if (guess === correctAnswer) {
        return 'correct!';
    } else {
        return 'incorrect!';
    }
}

module.exports = {createCard, evaluateGuess};
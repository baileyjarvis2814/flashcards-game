# Abstract:
- The project built is a Flashcards game playable through the command line, the implementations included range from card creation, deck management, game rounds, and correctness evaluation.

## Installation:
- The game logic can be found here https://github.com/baileyjarvis2814/flashcards-game
- Copy the SSH repository URL git@github.com:baileyjarvis2814/flashcards-game.git
- Open terminal and 'cd' into the directory you wish to clone the code into
- Clone the repository by submitting git clone git@github.com:baileyjarvis2814/flashcards-game.git
- Once cloned, the game is played via the command line. While in terminal and in the game directory, run 'node index.js' and play the game by way of the up and down arrow buttons, and the return(enter) key.
- The game will play to 10 cards and then cease with a visible score of how many questions the player answered correctly.

### Preview of App:
https://i.ibb.co/Ycpy1Nf/Screenshot-2024-05-09-at-7-40-17-PM.png

### Context:
This project was assigned on Tuesday 7 and completed on Thursday May 9th as per the 2403 Front-End engineering cohort at Turing School of Software and Design.
 
### Contributors:
Jarvis Bailey: https://github.com/baileyjarvis2814

### Learning Goals:
The learning goals of this project were to 
- Develop a deeper understanding of iterator methods
- Reduce the risk of being too attached to one iterator method OR avoiding an iterator method
- Compare and contrast iterator methods by using different iterators to achieve the same output
### Wins + Challenges:
Win 1. I learned how to better modulate my tests to focus on testing one thing at a time and not several things at once. Leading to better error handling and debugging.

Win 2. I've refactored my functions to test for more specific outcomes rather than only the starting parameters(i.e. testing for an object to have properties instead of testing the specific properties of the returned object.

Win 3. I managed to timebox myself better on this project in ways such as devoting more time to testing instead of jumping straight to functionality.

Loss 1. I had a bit of trouble getting the round object actually being created. This led to some issues concerning the testing as nothing was being generated to console log.

Loss 2. I also had an issue with the functionality of the game when it came to evaluating the player guess. This required some backtracking, albeit minor this time. This is definitely not something I want to repeat.

Loss 3. I was not at all atomic with my commits or project boarding. Yet another product of poor timeboxing. A bad habit I'm still working on improving.

# FlashCards Starter Kit

## Fork This Repo

On the top right corner of this page, click the **Fork** button.

## Setup

Clone down the forked repo (from your GitHub). Since you don't want to name your project "flashcards-starter", you can use an optional argument when you run `git clone` (you replace the `[...]` with the terminal command arguments):

```bash
git clone [remote-address] [what you want to name the repo]
```

Once you have cloned the repo, change into the directory and install the library dependencies using the command:

```bash
npm install
```

To verify that it is setup correctly, run `npm test` in your terminal. You should have skipped tests in your `card` test file show up.

Running `node index.js` from the root of your project should result in the following message being displayed in your terminal: 

```bash
Your project is running...
```

*Note that you will not need to you run this file until you are running your `game` file in Iteration 3. Prior to that, you should strive to use TDD to drive your code. You should check the functionality of your application by running your tests via `npm test`.*


## Where to Add Your Code

**Create all of your feature code files in the `src` directory.** Use the `module.exports` and `require` syntax to share code across files.

## How to View Your Code in Action

Once you are working through Iteration 3, you will want to run the `node index.js` command in your terminal to run the game.

When the game is functioning appropriately, you will be prompted for each question, have the opportunity to select an answer, and will be given feedback. You will be able to play through the entire deck of cards:

![flash cards example gif](https://media.giphy.com/media/1zkb1q58eTiTH6D7wc/giphy.gif)

---

## Test Files Organization

Similar to feature code, your test code needs to be put in a specific place for it to run successfully.

**Put all of your test files in the `test` directory.** As a convention, all test filenames should end with `-test.js`. For instance: `card-test.js`.

## Running Your Tests

Run your test suite using the command:

```bash
npm test
```

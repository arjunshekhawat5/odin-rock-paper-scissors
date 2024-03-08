# Rock, Paper, Scissors Game

This simple JavaScript program allows you to play the classic Rock, Paper, Scissors game against the computer.

## Functions

### 1. `getComputerChoice()`
- **Description:** This function randomly selects one of the three choices (rock, paper, or scissors) for the computer.
- **Return:** The randomly selected choice for the computer.

### 2. `playRound(playerSelection, computerSelection)`
- **Description:** Determines the winner of a round based on the player's and computer's choices.
- **Parameters:**
  - `playerSelection`: The choice made by the player.
  - `computerSelection`: The choice made by the computer.
- **Return:**
  - `1`: Player wins the round.
  - `0`: It's a draw.
  - `-1`: Computer wins the round.

### 3. `game()`
- **Description:** Orchestrates the game, allowing the player to play five rounds against the computer.
- **Return:**
  - `"You Won!"`: If the player wins more than two rounds.
  - `"You Lost"`: If the computer wins more than two rounds.
  - `"Draw!"`: If there is no clear winner after five rounds.

## How to Play
1. Open the console in your browser.
2. Call the `game()` function.
3. Enter your choice (rock, paper, or scissors) when prompted.
4. The game will output the result of each round and the final result after five rounds.

Feel free to modify or expand upon the code to enhance the game further!
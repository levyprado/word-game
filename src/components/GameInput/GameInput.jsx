import React from 'react';

import { WORD_LENGTH } from '../../constants';

function GameInput({ addGuesses, checkStatus, userStatus }) {
    const [guess, setGuess] = React.useState('');

    function handleSubmit(e) {
        // Preventing default behavior of form
        e.preventDefault();

        // Guard clause (if answer is less than 5 characters return)
        if (guess.length !== WORD_LENGTH) return;

        // Add submited guess to 'guesses' state
        addGuesses(guess);

        // Check if the user has won or loss
        checkStatus(guess);

        // Empty input by setting guess state to empty string ''
        setGuess('');
    }

    return (
        <form className="game-form" id="game-form" onSubmit={handleSubmit}>
            <label htmlFor="game" className="game-label" form="game-form">
                Your answer
            </label>
            <input
                type="text"
                className="game-input"
                id="game"
                value={guess}
                disabled={userStatus !== 'playing'}
                onChange={e => setGuess(e.target.value.toUpperCase())}
                required
                minLength={WORD_LENGTH}
                maxLength={WORD_LENGTH}
            />
        </form>
    );
}

export default GameInput;

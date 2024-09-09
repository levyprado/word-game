import React from 'react';

import { WORD_LENGTH } from '../../constants';
import { checkGuess, range } from '../../utils';

function Cell({ letter, status }) {
    const className = status ? `game-letter ${status}` : 'game-letter';
    return <span className={className}>{letter}</span>;
}

function Guess({ guess, answer }) {
    const checkedWord = checkGuess(guess, answer);
    return (
        <p className="game-row">
            {range(WORD_LENGTH).map(num => (
                <Cell
                    key={num}
                    letter={
                        checkedWord ? checkedWord.at(num).letter : undefined
                    }
                    status={
                        checkedWord ? checkedWord.at(num).status : undefined
                    }
                />
            ))}
        </p>
    );
}

export default Guess;

import React from 'react';

import { GUESS_CHANCES } from '../../constants';
import { range } from '../../utils';
import Guess from '../Guess';

function GameGuesses({ guessList, answer }) {
    return (
        <div className="game-grid" style={{ '--ROWS': GUESS_CHANCES }}>
            {range(GUESS_CHANCES).map(num => (
                <Guess key={num} guess={guessList.at(num)} answer={answer} />
            ))}
        </div>
    );
}

export default GameGuesses;

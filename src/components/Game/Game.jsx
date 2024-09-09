import React from 'react';

import GameInput from '../GameInput';
import GameGuesses from '../GameGuesses';
import { sample } from 'new-component/src/utils';
import { WORDS } from '../../data';
import { GUESS_CHANCES } from '../../constants';
import BannerWin from '../BannerWin/BannerWin';
import BannerLoss from '../BannerLoss/BannerLoss';

let answer = sample(WORDS);

function Game() {
    const [guessList, setGuessList] = React.useState([]);
    const [guessCount, setGuessCount] = React.useState(0);
    const [userStatus, setUserStatus] = React.useState('playing');

    function addGuesses(guess) {
        const nextGuessList = [...guessList, guess];
        setGuessList(nextGuessList);
        setGuessCount(guessCount + 1);
    }

    function checkStatus(guess) {
        if (guess.toUpperCase() === answer.toUpperCase()) {
            setUserStatus('win');
        } else if (guessCount >= GUESS_CHANCES - 1) {
            setUserStatus('loss');
        }
    }

    function handleRestartGame() {
        setGuessList([]);
        setGuessCount(0);
        answer = sample(WORDS);
        setUserStatus('playing');
    }

    return (
        <>
            <GameGuesses guessList={guessList} answer={answer} />
            <GameInput
                addGuesses={addGuesses}
                checkStatus={checkStatus}
                userStatus={userStatus}
            />
            {userStatus === 'win' ? (
                <BannerWin
                    guessCount={guessCount}
                    handleRestartGame={handleRestartGame}
                />
            ) : userStatus === 'loss' ? (
                <BannerLoss
                    answer={answer}
                    handleRestartGame={handleRestartGame}
                />
            ) : undefined}
        </>
    );
}

export default Game;

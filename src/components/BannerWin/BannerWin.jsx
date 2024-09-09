import React from 'react';

import Banner from '../Banner/Banner';

function BannerWin({ guessCount, handleRestartGame }) {
    return (
        <Banner status={'correct'}>
            <span className="banner__text">
                CONGRATULATIONS!<br></br>You got it in {guessCount}{' '}
                {guessCount === 1 ? 'guess' : 'guesses'}
            </span>
            <br />
            <button
                style={{ textDecoration: 'underline' }}
                onClick={handleRestartGame}
            >
                Restart Game
            </button>
        </Banner>
    );
}

export default BannerWin;

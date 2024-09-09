import React from 'react';

import Banner from '../Banner/Banner';

function BannerLoss({ answer, handleRestartGame }) {
    return (
        <Banner status={'failure'}>
            <span className="banner__text">
                OOPS! Not this time.<br></br>The correct answer was {answer}
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

export default BannerLoss;

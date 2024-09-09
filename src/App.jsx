import Header from './components/Header';
import Game from './components/Game';
import Footer from './components/Footer';

function App() {
    return (
        <>
            <Header />
            <section className="game-wrapper">
                <Game />
            </section>
            <Footer></Footer>
        </>
    );
}

export default App;

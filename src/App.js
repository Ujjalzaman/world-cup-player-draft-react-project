import './App.css';
import Player from './components/player/Player';

function App() {
  
  return (
    <div className="main-container">
      <header>
        <div className="heading">
          <h1> World Cup Player Auction 2020 </h1>
        </div>
        <nav>
          <a href="/Home">Home</a>
          <a href="/Contact">Contact</a>
          <a href="/Player">Player</a>
          <a href="/termps">Terms&Policy</a>
        </nav>
      </header>
      <body>
        <Player></Player>
      </body>
      <footer>
        <p> Design and Develop by  &copy; <a href="mailto:muzzwal97@gmail.com">UjjalZaman</a></p>
      </footer>
    </div>
  );
 
}

export default App;

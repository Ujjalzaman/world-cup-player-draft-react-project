import './App.css';
import Player from './components/player/Player';


function App() {
  return (
    <div className="main-container">
        <header className="navigation">
            <div className="heading">
              <a class="heading-title" href="/home"> World Cup Player Auction 2020 </a>
            </div>
            <nav className="nav">
              
                <li><a href="/Home">Home</a></li>
                <li><a href="/Contact">Contact</a></li>
                <li><a href="/Player">Player</a></li>
                <li><a href="/termps">Terms&Policy</a></li>
          
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

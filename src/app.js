import './css/style.css';
import '@fortawesome/fontawesome-free/js/all';
import PlayerList from './components/PlayerList';

class App {
  constructor() {
    this._list = new PlayerList();
    this.addEventListeners();
  }

  addEventListeners() {
    document
      .getElementById('player-form')
      .addEventListener('submit', this.playerSubmit.bind(this));
  }

  playerSubmit(e) {
    e.preventDefault();
    console.log('Player submitted');
  }
}

const app = new App();
// app._list.addPlayerToList('Eve', '<Female></Female>');
// app._list.removePlayerFromList('c5ee73e44ae58');

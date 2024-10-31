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
    const name = document.getElementById('player-name').value;
    const sex = document.querySelector('input[name="sex"]:checked').value;
    if (!name) {
      alert('Please enter a player name');
      return;
    }
    app._list.addPlayerToList(name, sex);
  }
}

const app = new App();
// app._list.addPlayerToList('Xavier', 'Male');
// app._list.removePlayerFromList('c5ee73e44ae58');

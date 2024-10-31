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
      .addEventListener('submit', this._playerSubmit.bind(this));
    document
      .getElementById('player-list')
      .addEventListener('click', this._removePlayer.bind(this));
    document
      .getElementById('options-form')
      .addEventListener('submit', this._shuffleSubmit.bind(this));
  }

  _playerSubmit(e) {
    e.preventDefault();
    const name = document.getElementById('player-name');
    const sex = document.querySelector('input[name="sex"]:checked').value;
    if (!name) {
      alert('Please enter a player name');
      return;
    }
    app._list.addPlayerToList(name.value.trim(), sex);
    document.getElementById('player-form').reset();
  }

  _removePlayer(e) {
    if (
      e.target.classList.contains('delete-button') ||
      e.target.classList.contains('fa-xmark')
    ) {
      if (confirm('Are you sure?')) {
        e.target.closest('.player').remove();
        app._list.removePlayerFromList(
          e.target.closest('.player').getAttribute('data-id')
        );
      }
    }
  }

  _shuffleSubmit(e) {
    e.preventDefault();
    const shuffleType = document.querySelector(
      'input[name="shuffle"]:checked'
    ).value;
    const numberOfTeams = document.getElementById('numberOfTeams').value;

    if (shuffleType === 'random') {
      this._list.splitIntoTeams(
        this._list.shuffleListAll(this._list.list),
        numberOfTeams
      );
    } else {
      this._list.splitIntoTeams(
        this._list.shuffeListBySex(this._list.list),
        numberOfTeams
      );
    }
    console.log(shuffleType, numberOfTeams);
  }
}

const app = new App();

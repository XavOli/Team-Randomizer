import './css/style.css';
import '@fortawesome/fontawesome-free/js/all';
import PlayerList from './components/PlayerList';
import html2canvas from 'html2canvas';

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
    document
      .getElementById('shuffle-results')
      .addEventListener('click', this._exportResults.bind(this));
  }

  _playerSubmit(e) {
    e.preventDefault();
    const name = document.getElementById('player-name');
    const sex = document.querySelector('input[name="sex"]:checked').value;
    if (!name.value) {
      alert('Please enter a player name');
      return;
    }
    app._list.addPlayerToList(name.value.trim(), sex);
    name.value = '';
  }

  _removePlayer(e) {
    console.log(e.target);
    if (
      e.target.classList.contains('delete-button') ||
      e.target.classList.contains('fa-xmark') ||
      e.target.parentElement.classList.contains('fa-xmark')
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
    if (this._list.length < numberOfTeams) {
      alert('You will need more players to make that many teams!');
      return;
    }

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
  }

  _exportResults(e) {
    console.log(e.target);
    if (e.target.classList.contains('myBtn')) {
      html2canvas(document.getElementById('shuffle-results'), {
        backgroundColor: '#070F2B',
      }).then((canvas) => {
        const dataURL = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.download = 'results.png';
        link.href = dataURL;
        link.click();
      });
    }
  }
}

const app = new App();

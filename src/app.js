import './css/style.css';
import '@fortawesome/fontawesome-free/js/all';
import PlayerList from './components/PlayerList';
import Teams from './components/Teams';
import html2canvas from 'html2canvas';

class App {
  constructor() {
    this._list = new PlayerList();
    this._teams = new Teams();
    this.init();
  }

  init() {
    this.addEventListeners();
    console.log(this._teams.recentTeams.length);
    if (this._teams.recentTeams.length !== 0) {
      document.getElementById('rewind-time').classList.remove('hidden');
    }
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
    document
      .getElementById('rewind-time')
      .addEventListener('click', this._rewindTime.bind(this));
  }
  _rewindTime() {
    this._teams.showLastResults();
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
    const teams = new Teams();
    const shuffleType = document.querySelector(
      'input[name="shuffle"]:checked'
    ).value;
    const numberOfTeams = document.getElementById('numberOfTeams').value;
    if (this._list.length < numberOfTeams) {
      alert('You will need more players to make that many teams!');
      return;
    }

    if (shuffleType === 'random') {
      teams.splitIntoTeams(teams.shuffleListAll(), numberOfTeams);
    } else {
      teams.splitIntoTeams(teams.shuffeListBySex(), numberOfTeams);
    }
  }

  _exportResults(e) {
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

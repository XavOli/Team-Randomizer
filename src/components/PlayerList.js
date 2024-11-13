import Player from './Player';
import Storage from './Storage';

class PlayerList {
  constructor() {
    this.list = Storage.getPlayers();
    this.length = this.list.length;
    this._displayPlayerList();
  }

  addPlayerToList(name, sex) {
    const newPlayer = new Player(name, sex);
    this.list.push(newPlayer);
    Storage.savePlayer(newPlayer);
    this.length = this.list.length;
    this._displayPlayerList();
  }

  removePlayerFromList(id) {
    const index = this.list.findIndex((player) => player.id === id);
    if (index !== -1) {
      this.list.splice(index, 1);
      Storage.removePlayer(id);
      this.length = this.list.length;
      this._displayPlayerList();
    }
  }

  _displayPlayerList() {
    const PlayerListEl = document.getElementById('player-list');
    // Clear element
    PlayerListEl.innerHTML = '';
    // Iterate through local storage players and create an element for each
    this.list.forEach((player) => {
      const PlayerEl = document.createElement('div');
      PlayerEl.setAttribute('data-id', `${player.id}`);
      PlayerEl.classList.add('player');
      // Rotary to change icon based on sex chosen for player, then name is added and the delete button
      PlayerEl.innerHTML = `
      <i class="fa-solid ${
        player.sex === 'male' ? 'fa-mars' : 'fa-venus'
      }"></i> 
      ${player.name}
      <button class="delete-button p-1"><i class="fa-solid fa-xmark fa-lg text-red-600"></i></button>`;
      PlayerListEl.appendChild(PlayerEl);
    });
    // Update player count in DOM
    document.getElementById(
      'player-count'
    ).innerHTML = `Player count: ${this.list.length}`;
  }
}

export default PlayerList;

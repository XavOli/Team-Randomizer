import Player from './Player';
import Storage from './Storage';

class PlayerList {
  constructor() {
    this.list = Storage.getPlayers();
    this._displayPlayerList();
  }

  addPlayerToList(name, sex) {
    const newPlayer = new Player(name, sex);
    this.list.push(newPlayer);
    Storage.savePlayer(newPlayer);
    this._displayPlayerList();
  }

  removePlayerFromList(id) {
    const index = this.list.findIndex((player) => player.id === id);
    if (index !== -1) {
      this.list.splice(index, 1);
      Storage.removePlayer(id);
      this._displayPlayerList();
      console.log('Player removed');
    }
  }

  _displayPlayerList() {
    const PlayerListEl = document.getElementById('player-list');
    PlayerListEl.innerHTML = '';
    this.list.forEach((player) => {
      const PlayerEl = document.createElement('div');
      PlayerEl.setAttribute('data-id', `${player.id}`);
      PlayerEl.classList.add(
        'player',
        'border',
        'flex',
        'justify-around',
        'items-center',
        'bg-white',
        'p-1'
      );
      PlayerEl.innerHTML = `<span>${player.name}</span> <button class="delete-button px-3 py-1"><i class="fa-solid fa-xmark fa-lg text-red-600"></i></button>`;
      PlayerListEl.appendChild(PlayerEl);
    });
    console.log('Players loaded...');
  }

  //   @todo shuffleListAll()
  //   @todo shuffleListBySex()
}

export default PlayerList;

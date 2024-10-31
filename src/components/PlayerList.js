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
    Storage.removePlayer(id);
    this._displayPlayerList();
  }

  _displayPlayerList() {
    const PlayerListEl = document.getElementById('player-list');
    PlayerListEl.innerHTML = '';
    this.list.forEach((player) => {
      const PlayerEl = document.createElement('div');
      PlayerEl.setAttribute('data-id', `${player.id}`);
      PlayerEl.classList.add(
        'border',
        'flex',
        'justify-around',
        'items-center',
        'bg-white'
      );
      PlayerEl.innerHTML = `${player.name} <i class="fa-solid fa-user-xmark  text-red-600"></i>`;
      PlayerListEl.appendChild(PlayerEl);
    });
  }

  //   @todo removePlayerFromList(id)
  //   @todo shuffleListAll()
  //   @todo shuffleListBySex()
}

export default PlayerList;

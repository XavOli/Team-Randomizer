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
        'justify-between',
        'items-center',
        'bg-white',
        'p-1'
      );
      PlayerEl.innerHTML = `<span>${player.name}</span> <button class="delete-button px-3 py-1"><i class="fa-solid fa-xmark fa-lg text-red-600"></i></button>`;
      PlayerListEl.appendChild(PlayerEl);
    });
  }

  splitIntoTeams(list, numberOfTeams) {
    const teams = Array.from({ length: numberOfTeams }, () => []);
    list.forEach((player, index) => {
      teams[index % numberOfTeams].push(player.name);
    });
    console.log(teams);
    this.displayTeams(teams);
    return teams;
  }

  shuffleListAll(list) {
    for (let i = list.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [list[i], list[j]] = [list[j], list[i]];
    }
    console.log(list);
    return list;
  }

  displayTeams(teams) {
    const ResultsEl = document.getElementById('shuffle-results');
    ResultsEl.innerHTML = '';
    let teamCount = 1;

    // Create team element for each team in list
    teams.forEach((team) => {
      const TeamEl = document.createElement('div');
      TeamEl.classList.add(
        'flex',
        'flex-col',
        'border',
        'border-red-400',
        'bg-red-300',
        'rounded',
        'items-center',
        'justify-center',
        'p-1'
      );
      const TeamNameEl = document.createElement('h1');
      TeamNameEl.classList.add('text-xl', 'font-bold', 'p-1');
      TeamNameEl.innerText = `Team ${teamCount}`;
      teamCount++;
      TeamEl.appendChild(TeamNameEl);

      // Add players to team element
      team.forEach((player) => {
        const playerName = document.createElement('p');
        playerName.innerText = player;
        TeamEl.appendChild(playerName);
      });

      ResultsEl.appendChild(TeamEl);
    });
  }
}

export default PlayerList;

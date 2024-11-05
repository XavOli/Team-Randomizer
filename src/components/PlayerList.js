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

  splitIntoTeams(list, numberOfTeams) {
    // Create an array, add empty array for each team
    const teams = Array.from({ length: numberOfTeams }, () => []);
    // Take each player and iterate them into the teams in order
    list.forEach((player, index) => {
      teams[index % numberOfTeams].push(player.name);
    });
    this.displayTeams(teams);
    return teams;
  }

  shuffleListAll(list) {
    for (let i = list.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [list[i], list[j]] = [list[j], list[i]];
    }
    return list;
  }

  shuffeListBySex(list) {
    // Create two separate arrays of male and female
    let maleList = list.filter((player) => player.sex === 'male');
    let femaleList = list.filter((player) => player.sex === 'female');
    // Shuffle both arrays and concat them, that way it will split them equally between sex when iterating through the splitIntoTeams()
    list = this.shuffleListAll(maleList).concat(
      this.shuffleListAll(femaleList)
    );
    return list;
  }

  displayTeams(teams) {
    const ResultsEl = document.getElementById('shuffle-results');
    ResultsEl.innerHTML = '';
    let teamCount = 1;
    if (teams.length === 1) {
      ResultsEl.classList.replace('grid-cols-2', 'grid-cols-1');
    } else {
      ResultsEl.classList.replace('grid-cols-1', 'grid-cols-2');
    }
    // Iterator for creating teams in DOM
    teams.forEach((team) => {
      let borderColorClass;
      let bgColorClass;
      // Switch for team colors
      switch (teamCount) {
        case 1:
          borderColorClass = 'border-red-400';
          bgColorClass = 'bg-red-300';
          break;
        case 2:
          borderColorClass = 'border-blue-400';
          bgColorClass = 'bg-blue-300';
          break;
        case 3:
          borderColorClass = 'border-yellow-400';
          bgColorClass = 'bg-yellow-300';
          break;
        case 4:
          borderColorClass = 'border-green-400';
          bgColorClass = 'bg-green-300';
          break;
      }
      // Create team container
      const TeamEl = document.createElement('div');
      TeamEl.classList.add('team-el', borderColorClass, bgColorClass);

      // Create and add team name
      const TeamNameEl = document.createElement('h1');
      TeamNameEl.classList.add('team-name');
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

class Storage {
  static getPlayers() {
    let playerList;
    if (localStorage.getItem('playerList') === null) {
      playerList = [];
    } else {
      playerList = JSON.parse(localStorage.getItem('playerList'));
    }
    return playerList;
  }

  static savePlayer(player) {
    const playerList = Storage.getPlayers();
    playerList.push(player);
    localStorage.setItem('playerList', JSON.stringify(playerList));
  }

  static removePlayer(id) {
    const playerList = Storage.getPlayers();
    playerList.forEach((player, index) => {
      if (player.id === id) {
        playerList.splice(index, 1);
      }
    });
    localStorage.setItem('playerList', JSON.stringify(playerList));
  }

  static getRecentTeams() {
    let teamsList;
    if (localStorage.getItem('teamsList') === null) {
      teamsList = [];
    } else {
      teamsList = JSON.parse(localStorage.getItem('teamsList'));
    }
    return teamsList;
  }

  static saveTeams(teams) {
    const teamsHistory = this.getRecentTeams();
    teamsHistory.push(teams[0]);
    localStorage.setItem('teamsList', JSON.stringify(teamsHistory));
  }
}

export default Storage;

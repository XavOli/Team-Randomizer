class Storage {
  static getPlayers() {
    let playerList;
    if (localStorage.getItem('playerList') === null) {
      playerList = [];
    } else {
      playerList = JSON.parse(localStorage.getItem('playerList'));
    }
    console.log(playerList);
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
}

export default Storage;

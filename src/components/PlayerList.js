import Player from './Player';
class PlayerList {
  constructor() {
    this.list = [];
  }

  addPlayerToList(name, sex) {
    const newPlayer = new Player(name, sex);
    this.list.push(newPlayer);
  }

  //   @todo removePlayerFromList(id)
  //   @todo shuffleListAll()
  //   @todo shuffleListBySex()
}

export default PlayerList;

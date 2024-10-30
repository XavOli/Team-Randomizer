class Player {
  constructor(name, sex) {
    this.id = Math.random().toString(16).slice(2);
    this.name = name;
    this.sex = sex;
  }
}

export default Player;

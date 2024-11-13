import Storage from './Storage';

class Teams {
  constructor() {
    this.list = Storage.getPlayers();
    this.recentTeams = Storage.getRecentTeams();
    console.log(this.recentTeams);
  }

  shuffleListAll(list = this.list) {
    for (let i = list.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [list[i], list[j]] = [list[j], list[i]];
    }

    return list;
  }

  shuffeListBySex(list = this.list) {
    // Create two separate arrays of male and female
    let maleList = list.filter((player) => player.sex === 'male');
    let femaleList = list.filter((player) => player.sex === 'female');
    // Shuffle both arrays and concat them, that way it will split them equally between sex when iterating through the splitIntoTeams()
    list = this.shuffleListAll(maleList).concat(
      this.shuffleListAll(femaleList)
    );
    return list;
  }

  splitIntoTeams(list, numberOfTeams) {
    // Create an array, add empty array for each team
    const teams = Array.from({ length: numberOfTeams }, () => []);
    // Take each player and iterate them into the teams in order
    list.forEach((player, index) => {
      teams[index % numberOfTeams].push(player.name);
    });
    this.teams = teams;
    Storage.saveTeams([teams]);
    this.displayTeams(teams);
    return teams;
  }

  showLastResults() {
    this.displayTeams(this.recentTeams[this.recentTeams.length - 1]);
  }

  displayTeams(teams) {
    if (!teams) return;

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
    const downloadBtn = document.createElement('button');
    downloadBtn.classList.add('myBtn', 'col-span-2', 'text-xl', 'text-black');
    downloadBtn.innerText = 'Save my results!';
    downloadBtn.setAttribute('data-html2canvas-ignore', 'true');
    ResultsEl.appendChild(downloadBtn);
  }
}

export default Teams;

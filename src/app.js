import './css/style.css';
import '@fortawesome/fontawesome-free/js/all';
import PlayerList from './components/PlayerList';

class App {
  constructor() {
    this._list = new PlayerList();
  }
}

const app = new App();
app._list.addPlayerToList('Xavier', 'Male');
app._list.addPlayerToList('Eve', 'Female');

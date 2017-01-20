import { clear_children } from './utils';

/**
 * Handles connecting to the profile page socket and sending updates to Elm.
 */
class ProfilePageUpdater {
  constructor(socket) {
    this.socket = socket;
    this.channel = null;

    this.username = null;

    // Elm app containers
    this.tu_div = document.getElementById('profile-elm-total-container');
    this.mu_div = document.getElementById('profile-elm-main-container');

    // Elm apps
    this.tu_app = null;
    this.mu_app = null;

    this.username = document.getElementById('profile-username').dataset.name;

    this.initSocket();
    this.installElm();
  }

  initSocket() {
    this.socket.connect();

    this.channel = this.socket.channel(`users:${this.username}`, {});

    console.log(`Joining channel users:${this.username}…`);
    this.channel.join()
      .receive('ok', (init_data) => {
        console.log('Connection successful.');
        this.initializeElm(init_data);
      })
      .receive('error', (resp) => { console.log('Connection failed:', resp) });

    this.channel.on('new_pulse', (msg) => { this.newPulse(msg); });
  }

  clearDOM() {
    clear_children(this.tu_div);
    clear_children(this.mu_div);
  }

  installElm() {
    this.clearDOM();
  }

  initializeElm(init_data) {
  }

  newPulse(msg) {
  }
}

export default ProfilePageUpdater;

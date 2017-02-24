import {observable, action} from 'mobx';

export class AppState{
  @observable isSideMenuOpen = false;

  @action toggleSideMenu = () => {
      this.isSideMenuOpen = !this.isSideMenuOpen;
  };
}

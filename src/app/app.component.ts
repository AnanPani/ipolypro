import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'iPolyPro';
  isIn = true;
  left = true;
  _Isshow = false;
  _IsState = 0;

  get right() {
    return !this.left;
  }

  get isOut() {
    return !this.isIn;
  }

  togglesidenav(item : boolean) {
    if (item === false){
      this._Isshow = true;
    }
    else {
      this._Isshow = false;
    }
  }
  
  GoToWebsite (item : number) {
    switch (item){
      case 0 :
        location.reload();
        this._IsState = 0;
        break;
      case 1 :
        window.location.href ='https://www.facebook.com/YaJokProgrammer';
        break;
      case 2 :
        window.location.href = 'https://www.youtube.com/channel/UCYi3xArJr6Hn6GiiUfFbNtg';
        break;
      default:
        this._IsState = 3;
        break;
    }
  }
}

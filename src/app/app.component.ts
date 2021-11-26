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
}

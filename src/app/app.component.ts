import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dynamic-button-event-binding';
  isDisabled: boolean = true;
  changeStatus(){
    if (this.isDisabled == true){
      this.isDisabled = false;
    }else{
      this.isDisabled = true;
    }
  }
}

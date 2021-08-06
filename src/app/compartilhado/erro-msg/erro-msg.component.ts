import { Component } from '@angular/core';

@Component({
  selector: 'app-erro-msg',
  templateUrl: './erro-msg.component.html',
  styleUrls: ['./erro-msg.component.css']
})
export class ErrorMsgComponent {
  public error: any;

  setError(error: string) {
    this.error = error;
    
    
  }


}

import { Component, OnInit } from '@angular/core';
import { ErrorMsgComponent } from './compartilhado/erro-msg/erro-msg.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  titulo = 'CRUD de lembretes com o Angular';

  constructor(private errorMsgComponent: ErrorMsgComponent) {
    
  }
  ngOnInit(): void {
    this.errorMsgComponent.setError("Esta é uma mensagem de Erro")
  }
  
}

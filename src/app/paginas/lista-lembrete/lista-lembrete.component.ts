import { Component, OnInit, ViewChild } from '@angular/core';

import { Lembrete } from 'src/app/interfaces/lembrete';
import { LembreteService } from 'src/app/services/lembrete.service';
import { ErrorMsgComponent } from 'src/app/compartilhado/erro-msg/erro-msg.component';

@Component({
  selector: 'app-lista-lembrete',
  templateUrl: './lista-lembrete.component.html',
  styleUrls: ['./lista-lembrete.component.css']
})
export class ListaLembreteComponent implements OnInit {
  public lembretes: Lembrete[] = [];
  @ViewChild(ErrorMsgComponent)
  errorMsgComponent!: ErrorMsgComponent;
  constructor(private lembreteService: LembreteService) { }

  ngOnInit(): void {
    this.getListaLembretes()
  }

  getListaLembretes(){
    this.lembreteService.getListaLembrete()
    .subscribe((lembretes: Lembrete[]) => {
      this.lembretes = lembretes;
    }, () => { this.errorMsgComponent.setError("Falha ao Buscar Lembretes."); });

  }

  deletaLembrete(id: number){
    this.lembreteService.deletaLembrete(id)
    .subscribe(() => {
      this.getListaLembretes();
    }, () => { this.errorMsgComponent.setError("Falha ao Deletar Lembrete."); });

  }

  existemLembretes(): boolean {
    return this.lembretes && this.lembretes.length > 0;
  }

}

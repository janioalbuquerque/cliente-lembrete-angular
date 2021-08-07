import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ErrorMsgComponent } from 'src/app/compartilhado/erro-msg/erro-msg.component';
import { LembreteService } from 'src/app/services/lembrete.service';
import { Lembrete } from 'src/app/interfaces/lembrete';

@Component({
  selector: 'app-editar-lembrete',
  templateUrl: './editar-lembrete.component.html',
  styleUrls: ['./editar-lembrete.component.css']
})
export class EditarLembreteComponent  {
  public lembrete: any;
  @ViewChild(ErrorMsgComponent)
  errorMsgComponent!: ErrorMsgComponent;

  constructor(private lembreteService: LembreteService,
              private activateRouter: ActivatedRoute,
              private router: Router ) {
                this.getLembrete(this.activateRouter.snapshot.params.id);
               }

  
  getLembrete(id: number) {
    this.lembreteService.getLembrete(id)
      .subscribe((lembrete: any) => {
        this.lembrete = lembrete;
      }, () => {this.errorMsgComponent.setError("Falha ao buscar lembrete.")})
  }

  atualizaLembrete(lembrete: Lembrete) {
    this.lembreteService.addLembrete(lembrete)
      .subscribe(
        () => { this.router.navigateByUrl('/'); },
        () => { this.errorMsgComponent.setError('Falha ao adicionar lembrete.')}
        
      )
      console.log('teste' + lembrete.prioridade);
  }

  

}

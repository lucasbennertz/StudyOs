import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MateriasService } from '../../../views/materias/materias.service';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create',
  imports: [
    MatCardModule,
    MatIconModule,
    CommonModule
  ],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  addMode: boolean = false;
  @Input() matterId!: string;
  @Output() atualizar = new EventEmitter()

  constructor(private service: MateriasService){}

  changeAddMode(){
    this.addMode = !this.addMode
  }
  createAnnotation(annotationName: string, annotationDesc: string){
    console.log(this.matterId)
    this.service.createAnnotation(this.matterId, annotationName, annotationDesc).subscribe(
      {
        next: (res) => {
          console.log(res)
          this.atualizar.emit();
          this.changeAddMode();
        },
        error: (err) => {
          console.log("tem erro em algm lugar mn" + err);
        }
      }
    )

  }
}

import { Component, OnInit, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MateriaCardsComponent } from '../materia-cards/materia-cards.component';
import { AnnotationModel } from '../../views/materias/annotation.model';
import { MateriasService } from '../../views/materias/materias.service';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-annotations-cards',
  imports: [
    MatCardModule,
    CommonModule,
    MatIconModule
  ],
  standalone:true,
  templateUrl: './annotations-cards.component.html',
  styleUrl: './annotations-cards.component.css'
})
export class AnnotationsCardsComponent implements OnInit{
  annotations!: AnnotationModel[]
  @Input() matterId!: number;
  modoEdicao : boolean = false;

  constructor(private service: MateriasService){}
  ngOnInit(): void {
    this.service.getAnnotations(this.matterId).subscribe({
      next: (receivedAnnotations) => {
        this.annotations = receivedAnnotations;
        console.log(receivedAnnotations)
      },
      error: (err) => {
        console.log("Deu pau no seguinte elemento: " + err);
      }
    })
  }
  mudarNome(annotationId:number, newAnnotationName: string){
    annotationId = annotationId + 1;
    this.service.changeAnnotationName(annotationId, newAnnotationName).subscribe({
      next: (res) => {
        console.log(res)
        this.modoEdicao = false
        this.annotations[annotationId - 1].title = res.title
      },
      error: (err) =>{
        console.log("Deu erro aqui irmão " + err)
      }
    })
  }
  mudarValor() {
    this.modoEdicao = !this.modoEdicao
  }
}

import { AnnotationModel } from './../../views/materias/annotation.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MateriaCardsComponent } from '../materia-cards/materia-cards.component';
import { MateriasService } from '../../views/materias/materias.service';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { CreateComponent } from './create/create.component';
@Component({
  selector: 'app-annotations-cards',
  imports: [MatCardModule, CommonModule, MatIconModule, CreateComponent],
  standalone: true,
  templateUrl: './annotations-cards.component.html',
  styleUrl: './annotations-cards.component.css',
})
export class AnnotationsCardsComponent implements OnInit {
  annotations!: AnnotationModel[];
  @Input() matterId!: string;
  @Output() atualizou = new EventEmitter()
  modoEdicao: boolean = false;

  constructor(private service: MateriasService) {}
  ngOnInit(): void {
    this.carregarAnnotations();
  }
  carregarAnnotations() {
    this.service.getAnnotations(this.matterId).subscribe({
      next: (receivedAnnotations) => {
        this.annotations = receivedAnnotations;
        console.log(receivedAnnotations);
      },
      error: (err) => {
        console.log('Deu pau no seguinte elemento: ' + err);
      },
    });
  }
  mudarNome(annotationId: string, newAnnotationName: string) {
    this.service
      .changeAnnotationName(annotationId, newAnnotationName)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.modoEdicao = false;
          this.annotations.forEach((x) => {
            if (x.id === annotationId) {
              x.title = newAnnotationName;
            }
          });
        },
        error: (err) => {
          console.log('Deu erro aqui irmão ' + err);
        },
      });
  }
  mudarValor() {
    this.modoEdicao = !this.modoEdicao;
  }
  deletarAnotacao(annotationId: string){
    this.service.deleteAnnotation(annotationId).subscribe({
      next: (value) => {
        console.log(value)
        this.annotations = value
        this.carregarAnnotations
      },
      error: (err) => {
        console.log(err)
      }
    })
  }
}

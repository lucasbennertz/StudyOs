import { Component, OnInit, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MateriaCardsComponent } from '../materia-cards/materia-cards.component';
import { AnnotationModel } from '../../views/materias/annotation.model';
import { MateriasService } from '../../views/materias/materias.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-annotations-cards',
  imports: [
    MatCardModule,
    CommonModule
  ],
  standalone:true,
  templateUrl: './annotations-cards.component.html',
  styleUrl: './annotations-cards.component.css'
})
export class AnnotationsCardsComponent implements OnInit{
  annotations!: AnnotationModel[]
  @Input() matterId!: number;
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
}

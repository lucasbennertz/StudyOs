import { Component, OnInit } from '@angular/core';
import { MatterModel } from './materia.model';
import { MateriasService } from './materias.service';
import { MateriaCardsComponent } from '../../components/materia-cards/materia-cards.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-materias',
  imports: [
    MateriaCardsComponent,
    CommonModule
  ],
  templateUrl: './materias.component.html',
  styleUrl: './materias.component.css'
})
export class MateriasComponent implements OnInit{
  matters!: MatterModel[];

  constructor(private materiasService: MateriasService){}
  ngOnInit(): void {
    this.materiasService.readMatter().subscribe(materias => {
      this.matters = materias
      console.log(materias)
    })
  }
}
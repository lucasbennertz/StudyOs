import { Component, OnInit } from '@angular/core';
import { MatterModel } from './materia.model';
import { MateriasService } from './materias.service';
import { MateriaCardsComponent } from '../../components/materia-cards/materia-cards.component';
import { CommonModule } from '@angular/common';
import { CreateComponent } from "../../components/materia-cards/create/create.component";
@Component({
  selector: 'app-materias',
  imports: [
    MateriaCardsComponent,
    CommonModule,
    CreateComponent,
],
  templateUrl: './materias.component.html',
  styleUrl: './materias.component.css'
})
export class MateriasComponent implements OnInit{
  matters!: MatterModel[];

  constructor(private materiasService: MateriasService){}
  ngOnInit(): void {
    this.carregarMaterias()
  }
  carregarMaterias(){
    this.materiasService.readMatter().subscribe({
      next: (materias) => {
        console.log(materias)
        this.matters = materias
      },
      error: (err) => {
        console.error("erro" + err)
      }
    })
  }  
}
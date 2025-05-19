import { MateriasService } from './../../views/materias/materias.service';
import { Component, Input, OnInit, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { EventEmitter } from '@angular/core';
import { AnnotationsCardsComponent } from '../annotations-cards/annotations-cards.component';
import { CreateComponent } from '../annotations-cards/create/create.component';
@Component({
  selector: 'app-materia-cards',
  imports: [
    MatCardModule,
    MatIconModule,
    CommonModule,
    FormsModule,
    AnnotationsCardsComponent,
  ],
  templateUrl: './materia-cards.component.html',
  styleUrl: './materia-cards.component.css'
})
export class MateriaCardsComponent implements OnInit{
  @Input() matterName!: string;
  @Input() matterId! : string;
  newName: string = '';
  @Output() atualizou = new EventEmitter();
  @Input({required: false}) editMode: boolean = false;
  showAnnotations: boolean = false;
  constructor(private service: MateriasService){}

  ngOnInit(): void {
    console.log(this.matterName)
  }
  alterarNome(): void{
    this.editMode = !this.editMode
  }
  updateName(newName: string, matterId: string){
    this.service.changeMatterName(matterId,newName).subscribe({
      next: (res) => {
        console.log('resposta da API', res);
        this.matterName = res.nome;
        this.editMode = false;
        this.atualizou.emit()
      },
      error: (err) => {
        console.error('Erro ao atualizar:', err)
      }

      })
    }
  deleteMatter(idMateria: string){
    this.service.deleteMatter(idMateria).subscribe({
      next: (res) => {
          console.log("resposta da api" + res)
          this.atualizou.emit()
      },
      error: (err) => {
        console.log("correge que deu algo errado ai bro " + err)
      }
    })
  }
  changeValue(){
    this.showAnnotations = !this.showAnnotations
  }
}

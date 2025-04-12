import { Component, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MateriasService } from '../../../views/materias/materias.service';
import { CommonModule } from '@angular/common';
import { EventEmitter } from '@angular/core';
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
  @Output() atualizar = new EventEmitter()

  constructor(private service: MateriasService){}

  changeAddMode(){
    this.addMode = !this.addMode
  }
  createMatter(nameMatter: String){
    this.service.createMatter(nameMatter).subscribe({
      next: (matter) => {
        console.log(matter)
        this.atualizar.emit()
        this.changeAddMode()
      },
      error: (err) => {
        console.log(err)
      }
    })
    
  }
}

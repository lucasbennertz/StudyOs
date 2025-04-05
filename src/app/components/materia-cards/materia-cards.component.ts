import { Component, Input, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
@Component({
  selector: 'app-materia-cards',
  imports: [
    MatCardModule
  ],
  templateUrl: './materia-cards.component.html',
  styleUrl: './materia-cards.component.css'
})
export class MateriaCardsComponent implements OnInit{
  @Input() matterName!: String;
  ngOnInit(): void {
    console.log(this.matterName)
  }
}

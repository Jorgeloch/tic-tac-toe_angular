import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SquareComponent } from "../square/square.component"

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, SquareComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})

export class TableComponent implements OnInit {
  size = 9;
  games: string[][][] = Array(9).fill(Array(3).fill(Array(3).fill('X')));
  xIsNext: boolean = true;
  winner: string = '';

  constructor() {}

  ngOnInit() {
    this.newGame();
  }

  newGame():void {
    this.games = Array(9).fill(Array(3).fill(Array(3).fill('X')));
    this.xIsNext = true;
    this.winner = '';
    console.log(this.games);
  }

  get player(): string {
    return this.xIsNext ? 'X' : 'O';
  }
}

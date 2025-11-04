import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

interface Note {
  id: number;
  title: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class HomePage {
  selectedSegment = 'todo';
  todoNotes: Note[] = [
    { id: 1, title: 'Levar o carro à inspeção' },
    { id: 2, title: 'Pagar o moche' },
    { id: 3, title: 'Estudar para a UC de Mobile' }
  ];
  doneNotes: Note[] = [
    { id: 4, title: 'Exemplo de tarefa concluída' }
  ];

  constructor(private router: Router) { }

  segmentChanged(event: any) {
    const todoList = document.getElementById('todo');
    const doneList = document.getElementById('done');

    if (event.detail.value === 'todo') {
      todoList!.style.display = 'block';
      doneList!.style.display = 'none';
    } else {
      todoList!.style.display = 'none';
      doneList!.style.display = 'block';
    }
  }

  editNote(note: Note) {
    this.router.navigate(['/edit-note', note.id]);
  }

  addNewNote() {
    this.router.navigate(['/edit-note', 'new']);
  }
}

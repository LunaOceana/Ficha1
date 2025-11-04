import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-edit-note',
    templateUrl: './edit-note.page.html',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, IonicModule]
})
export class EditNotePage implements OnInit {
    noteId: string | null = null;
    isNew = false;

    constructor(private route: ActivatedRoute, private router: Router) { }

    ngOnInit(): void {
        const id = this.route.snapshot.paramMap.get('id');
        this.noteId = id;
        this.isNew = (id === 'new');
    }

    cancel() {
        this.router.navigate(['/home']);
    }
}
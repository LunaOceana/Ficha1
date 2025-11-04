import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-add-note-modal',
  templateUrl: './add-note-modal.component.html',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, IonicModule]
})
export class AddNoteModalComponent {
  noteForm: FormGroup;
  isEditing = false;

  constructor(
    private formBuilder: FormBuilder,
    private modalCtrl: ModalController
  ) {
    this.noteForm = this.formBuilder.group({
      id: [null],
      title: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  ngOnInit() {
    const note = (this.modalCtrl as any).componentProps?.note;
    if (note) {
      this.isEditing = true;
      this.noteForm.patchValue(note);
    }
  }

  cancel() {
    this.modalCtrl.dismiss(null, 'cancel');
  }

  save() {
    if (this.noteForm.valid) {
      const title = this.noteForm.get('title')?.value;
      this.modalCtrl.dismiss({ title }, 'save');
    }
  }
}

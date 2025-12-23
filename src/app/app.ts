import { CommonModule } from '@angular/common';
import { Component, signal, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCheckbox, MatCheckboxChange, MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-root',
  imports: [MatCheckboxModule, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  items = [
    { name: 'Item 1', selected: false },
    { name: 'Item 2', selected: false },
    { name: 'Item 3', selected: false }
  ];

  get allSelected() {
    return this.items.every(item => item.selected);
  }

  get someSelected() {
    return this.items.some(item => item.selected) && !this.allSelected;
  }

  toggleAll(checked: boolean) {
    this.items.forEach(item => (item.selected = checked));
  }

  // onCheckboxChange(event: MatCheckboxChange) {
  //   console.log('Checked:', event.checked);
  // }

  // @ViewChild(MatCheckbox) checkbox!: MatCheckbox;

  // toggle() {
  //   this.checkbox.toggle();
  // }
  // protected readonly title = signal('angular-material-checkbox');
  // notificationsEnabled = true;
  // acceptTerms = false;
  // form: any;

  // constructor(private fb: FormBuilder) {
  // this.form = this.fb.group({
  //   acceptTerms: [false, Validators.requiredTrue]
  // });

  //   this.form = this.fb.group({
  //     features: this.fb.array([
  //       this.fb.control(false),
  //       this.fb.control(false),
  //       this.fb.control(false)
  //     ])
  //   });
  // }

  // onChange(event: MatCheckboxChange) {
  //   console.log('Checked:', event.checked);
  // }

  // get features() {
  //   return this.form.get('features') as FormArray;
  // }
}

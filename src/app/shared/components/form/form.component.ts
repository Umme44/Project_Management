import { from } from 'rxjs';
import {
  Component,
  EventEmitter,
  inject,
  Input,
  Output,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  form!: FormGroup;
  @Input() fields: any = [];
  @Output() formSubmit = new EventEmitter<any>();
  @Input() status: any = [];
  @Input() projectOptions: any = [];
  @Input() teams: any = [];
  @Input() dropdownOptions: any = [];
  @Input() name: any = '';

  @Input() isShow: boolean = true;

  @Output() formReady: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

  private fb = inject(FormBuilder);
  group: any = {};

  ngOnInit() {
    console.log(' this.dropdownOptions ::', this.dropdownOptions);
    // console.log(' this.projectOptions ::', this.projectOptions);

    console.log('FIELDS ::@@@@@', this.fields);
    // console.log('GROUP ::', this.group);
    this.fields.forEach((field: any) => {
      this.group[field.key] = new FormControl('');
    });
    console.log(' after GROUP ::', this.group);
    this.form = this.fb.group(this.group);

    console.log('Final FormGroup:', this.form.value);
  }
  onSubmit() {
    // console.log('📤 Child sending form value:', this.form.value);
    this.formSubmit.emit(this.form.value); // ✅ only values, not { data: ... }
  }

  // dropDownOpen1(event: Event) {
  //   this.dropDownOpen.emit(event);
  // }
}

import { Component, OnInit, Output, Input } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
  ValidatorFn,
} from '@angular/forms';
import { EventEmitter } from '@angular/core';

const youngerThanValidator = (maxAge: number): ValidatorFn => (control) =>
  new Date().getFullYear() - new Date(control.value).getFullYear() <= maxAge
    ? { younger: { maxAge } }
    : null;

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent implements OnInit {
  @Output() addNewUser = new EventEmitter();
  @Output() editUser = new EventEmitter();
  @Input() editData: boolean;
  @Input() user: any;

  addUserForm: FormGroup;
  filesToUpload = [];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.addUserForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
      dob: new FormControl(null, youngerThanValidator(18)),
      gender: new FormControl([Validators.required]),
      pin: new FormControl('', [Validators.max(999999)]),
      city: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
    });
    if (this.editData === true && this.user) {
      console.log(this.user);
      this.addUserForm.patchValue({
        name: this.user.name,
        dob: this.user.dob,
        gender: this.user.gender,
        pin: this.user.pin,
        city: this.user.city,
        state: this.user.state,
      });
      this.filesToUpload.push(this.user.file);
    }
  }
  // ngOnChanges() {}
  validateUserInputs() {
    console.log(this.addUserForm);
    if (!this.addUserForm.valid) {
      Object.keys(this.addUserForm.controls).forEach((key) => {
        const control = this.addUserForm.get(key) as FormControl;
        control.markAsDirty();
        control.markAsTouched();
      });
    } else if (this.editData) {
      const fields = {
        ...this.addUserForm.value,
        file: this.filesToUpload[0],
        id: this.user.id,
      };
      this.editUser.emit(fields);
    } else {
      const fields = {
        ...this.addUserForm.value,
        file: this.filesToUpload[0],
      };
      this.addNewUser.emit(fields);
    }
  }

  handleFileInput(files) {
    this.filesToUpload.push(files[0]);
    console.log(files[0]);
  }
}

import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, ReactiveFormsModule, Validators} from "@angular/forms"

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  langs: string[] = [
    'English',
    'Spanish',
    'French',
    'Serbian'
  ];
  myForm: FormGroup;
  firstName: FormControl;
  lastName: FormControl;
  email: FormControl;
  password: FormControl;
  language: FormControl;

  constructor() {
  }

  ngOnInit() {
    this.createControls();
    this.createForm();
  }

  // this.myForm = new FormGroup({
  //   name: new FormGroup(({
  //     firstName: new FormControl('', Validators.required),
  //     lastName: new FormControl('', Validators.required)
  //   })),
  //   email: new FormControl('', [
  //     Validators.required,
  //     Validators.pattern('[^@]*[^@]*')
  //   ]),
  //   password: new FormControl('', [
  //     Validators.required,
  //     Validators.minLength(4)
  //   ]),
  //   language: new FormControl('', Validators.required)
  // })
  // console.log(this.langs);
  createControls(): any {
    this.firstName = new FormControl('', Validators.required);
    this.lastName = new FormControl('', Validators.required);
    this.email = new FormControl('', [
      Validators.pattern('[^@]*[^@]*'),
      Validators.required
    ]);
    this.password = new FormControl('', [
      Validators.minLength(8),
      Validators.required
    ]);
    this.language = new FormControl('', Validators.required);
    //     lastName: new FormControl('', Validators.required)
  }

  createForm(): any {
    this.myForm = new FormGroup({
      name: new FormGroup({
        firstName: this.firstName,
        lastName: this.lastName
      }),
      email: this.email,
      password: this.password,
      language: this.language
    });
  }
}

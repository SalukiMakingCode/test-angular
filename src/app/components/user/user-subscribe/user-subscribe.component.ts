import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {DateValidators} from "../../../shared/guard/date-validators.guard";

@Component({
  selector: 'app-user-subscribe',
  templateUrl: './user-subscribe.component.html',
  styleUrls: ['./user-subscribe.component.scss']
})
export class UserSubscribeComponent implements OnInit {
  myForm! : FormGroup;

  constructor(
    private builder : FormBuilder
  ) { }

  ngOnInit(): void {
    this.myForm = this.builder.group({
      name: ['', Validators.required],
      password: ['', Validators.required],
      birthDate: [null, DateValidators],
      listSerie: this.builder.array([])
    })

    let monArray = this.myForm.controls['listSerie'] as FormArray;
    monArray.push(new FormControl(null, Validators.required))

  }

  submitform() {
    console.log(this.myForm.value);
  }

  getListSerieArray() : FormArray {
    return this.myForm.controls['listSerie'] as FormArray;
  }

  addSerie() {
    this.getListSerieArray().push(new FormControl(null, Validators.required));
  }

}

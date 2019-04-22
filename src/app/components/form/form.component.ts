import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {FormControl, FormGroup} from '@angular/forms';
import * as reducer from '../../store/reducers';
import {EnterNumber} from '../../store/actions/math.actions';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  public title = 'Hello, this is my little test';
  public inputData;

  public yourNumber: FormGroup = new FormGroup({
    number: new FormControl(this.inputData),
  });

  constructor(private store: Store<reducer.State>) { }

  public getInputData(inputData) {
    this.store.dispatch(new EnterNumber(inputData));
  }

  ngOnInit() {
    this.inputData = this.store.select('currentNumber');
  }

}

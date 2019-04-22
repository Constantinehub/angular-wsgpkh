import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import * as reducer from '../../store/reducers';
import {DivideNumber} from '../../store/actions/math.actions';

@Component({
  selector: 'app-divide',
  templateUrl: './divide.component.html',
  styleUrls: ['./divide.component.css']
})
export class DivideComponent implements OnInit {

  constructor(private store: Store<reducer.State>) { }

  public toDivide() {
    if (this.store.select('currentNumber')) {
      this.store.dispatch(new DivideNumber());
    }
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import * as reducer from '../../store/reducers';
import {IncreaseNumber} from '../../store/actions/math.actions';

@Component({
  selector: 'app-double',
  templateUrl: './double.component.html',
  styleUrls: ['./double.component.css']
})
export class DoubleComponent implements OnInit {

  constructor(private store: Store<reducer.State>) { }

  public toDouble() {
    this.store.dispatch(new IncreaseNumber());
  }

  ngOnInit() {
  }

}

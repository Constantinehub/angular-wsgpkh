import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { DoubleComponent } from './components/double/double.component';
import { DivideComponent } from './components/divide/divide.component';
import { metaReducers, reducers } from './store/reducers';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    DoubleComponent,
    DivideComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

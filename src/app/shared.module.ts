import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  exports:[
    MatInputModule,
    MatFormFieldModule,
  ]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DbzMainComponent } from './pages/dbz-main/dbz-main.component';
import { ListComponent } from './components/list/list.component';
import { FormComponent } from './components/form/form.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DbzMainComponent,
    ListComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[DbzMainComponent]
})
export class DbzModule { }

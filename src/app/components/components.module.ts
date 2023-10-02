import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ResultComponent } from './result/result.component';
import { ResultsComponent } from './results/results.component';
import { LoaderComponent } from './loader/loader.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ResultComponent,
    ResultsComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  exports: [
    ResultsComponent,
    LoaderComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule { }

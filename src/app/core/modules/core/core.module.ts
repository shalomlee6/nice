import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonModule} from 'primeng/button';
import { MainComponent } from '../../components/main/main.component';
import { HttpClientModule } from '@angular/common/http';

import {CarouselModule} from 'primeng/carousel';
import { FormsModule } from '@angular/forms';
import {ToastModule} from 'primeng/toast';



@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    ButtonModule,
    HttpClientModule,
    CarouselModule,
    ButtonModule,
    ToastModule,
    HttpClientModule,
    FormsModule,
    
  ],
  exports: [
    ButtonModule,
    MainComponent
  ],

})
export class CoreModule { }

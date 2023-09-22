import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SectionsComponent } from './components/sections/sections.component';
import { MatTabsModule } from '@angular/material/tabs';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SectionsComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SectionsComponent
  ]
})
export class SharedModule { }

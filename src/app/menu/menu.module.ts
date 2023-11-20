import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MenuPage } from './menu.page';
import { AddNewPage } from './add-new/add-new.page';

@NgModule({
  imports: [IonicModule, CommonModule, FormsModule],
  declarations: [MenuPage, AddNewPage],
  exports: [MenuPage, AddNewPage],
})
export class MenuPageModule {}

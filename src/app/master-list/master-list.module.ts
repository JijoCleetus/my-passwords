import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MasterListPage } from './master-list.page';

@NgModule({
  imports: [IonicModule, CommonModule, FormsModule],
  declarations: [MasterListPage],
  exports: [MasterListPage],
})
export class MasterListPageModule {}

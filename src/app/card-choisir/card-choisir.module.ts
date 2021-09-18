import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardChoisirComponent } from './card-choisir.component';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';



@NgModule({
	declarations: [
		CardChoisirComponent
	],
	exports: [
		CardChoisirComponent
	],
	imports: [
		CommonModule,
    MatCardModule,
    MatDividerModule
	]
})
export class CardChoisirModule { }

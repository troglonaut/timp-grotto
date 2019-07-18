import { TGMaterialModule } from './material.module'
import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

@NgModule({
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    ReactiveFormsModule,
    TGMaterialModule
  ],
  exports: [
    BrowserAnimationsModule,
    CommonModule,
    ReactiveFormsModule,
    TGMaterialModule
  ]
})
export class TGCommonModule { }

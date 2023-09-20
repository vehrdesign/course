import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../components/components.module'
import { MButtercupPDPA } from './mbuttercup-pdpa.component'

const routes = [
  {
    path: '',
    component: MButtercupPDPA,
  },
]

@NgModule({
  declarations: [MButtercupPDPA],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [MButtercupPDPA],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MbuttercupPdpaModule {}

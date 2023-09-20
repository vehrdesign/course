import { Component } from '@angular/core'
import { Title } from '@angular/platform-browser'

@Component({
  selector: 'mbuttercup-pdpa',
  templateUrl: 'mbuttercup-pdpa.component.html',
  styleUrls: ['mbuttercup-pdpa.component.css'],
})
export class MButtercupPDPA {
  constructor(private title: Title) {
    this.title.setTitle('exported project')
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secundary-nav',
  templateUrl: './secundary-nav.component.html',
  styleUrls: ['./secundary-nav.component.css']
})
export class SecundaryNavComponent implements OnInit {
  public isSelected: string = 'convenios';
  constructor() { }

  ngOnInit() {
  }
  public showDetails(option): void {
    this.isSelected = option;
  }
}

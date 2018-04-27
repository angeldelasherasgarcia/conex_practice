import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-secundary-nav',
  templateUrl: './secundary-nav.component.html',
  styleUrls: ['./secundary-nav.component.css']
})
export class SecundaryNavComponent implements OnInit {
  @Input() titulos:string;
  @Output() optionSelected = new EventEmitter();
  @Input() isSelected: string;
  constructor() { }

  ngOnInit() {
    this.isSelected = this.titulos[0];
  }
  public showDetails(option): void {
    this.isSelected = option;
    this.optionSelected.emit(this.isSelected);
  }
}

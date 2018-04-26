import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-related',
  templateUrl: './list-related.component.html',
  styleUrls: ['./list-related.component.css']
})
export class ListRelatedComponent implements OnInit {
  @Input() listRelated: any;
  public pagination : any;
  constructor() { }

  ngOnInit() {
  }

}

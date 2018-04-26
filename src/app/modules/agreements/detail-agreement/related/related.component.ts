import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-related',
  templateUrl: './related.component.html',
  styleUrls: ['./related.component.css']
})
export class RelatedComponent implements OnInit {
  @Input() listRelated: any;
  public pagination : any;
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { ConveniosService } from './../../../../services/convenios/convenios.service';
@Component({
  selector: 'app-folders',
  templateUrl: './folders.component.html',
  styleUrls: ['./folders.component.css']
})
export class FoldersComponent implements OnInit {

  constructor(public conveniosService: ConveniosService) { }

  ngOnInit() {
  }
  public downloadFile(): any {
    this.conveniosService.getFile().subscribe(
      result => {
        this.downLoadCurrentFile(result);
      },
      error => {
        console.log(error);
      }
    )
  }
  public downLoadCurrentFile(blob): void {
    var a = document.createElement("a");
    document.body.appendChild(a);

    var url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = 'pdffile';
    //console.log(url)
    a.click();
  }
  public showCurrentFile(blob):void{
    var url = window.URL.createObjectURL(blob);
    window.location.assign(url);
  }
}

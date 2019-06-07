import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';

@Component({
  selector: 'multi-column-scroller',
  templateUrl : './multicolumnscroller.component.html'
})
export class MultiColumnScrollerComponent implements OnInit {

  localData2d: any;

  constructor(private http: HttpClient) {
  }
  ngOnInit(): void {
    this.http.get('assets/data/virtualscroller2d.json')
    .subscribe((response: any) => {
         this.localData2d = response;
    });
  }
}

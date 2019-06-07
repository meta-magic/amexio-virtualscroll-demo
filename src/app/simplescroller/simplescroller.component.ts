import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';

@Component({
  selector: 'simple-scroller',
  templateUrl : './simplescroller.component.html'
})
export class SimpleScrollerComponent implements OnInit {

  localData: any;

  constructor(private http: HttpClient) {
  }
  ngOnInit(): void {
    this.http.get('assets/data/virtualscroller.json')
    .subscribe((response: any) => {
         this.localData = response;
    });
  }
}

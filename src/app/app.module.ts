import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule } from "@angular/router";
import {AmexioWidgetModule, AmexioDataModule} from 'amexio-ng-extensions';
import { HttpClientModule } from '@angular/common/http';
import {SimpleScrollerComponent } from './simplescroller/simplescroller.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import {MultiColumnScrollerComponent} from './multicolumnscrolller/multicolumnscroller.component';
import { CarouselScrollerComponent } from 'src/app/scrollerwithcarousel/scrollerwithcarousel.component';
const appRoutes: Routes = [
  { path: 'svs', component: SimpleScrollerComponent },
  {path: 'mvs', component: MultiColumnScrollerComponent},
  {
    path: 'sc', component: CarouselScrollerComponent
  }
];

@NgModule({
  declarations: [
    AppComponent, SimpleScrollerComponent, MultiColumnScrollerComponent,CarouselScrollerComponent
  ],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    AmexioWidgetModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

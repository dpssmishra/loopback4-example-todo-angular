import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodolistComponent } from './todolist/todolist.component';
import { HttpClientModule } from '@angular/common/http';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import { ProductsComponent } from './products/products.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { OrderchartComponent } from './orderchart/orderchart.component';
@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    ProductsComponent,
    TransactionsComponent,
    OrderchartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatToolbarModule,
    MatListModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

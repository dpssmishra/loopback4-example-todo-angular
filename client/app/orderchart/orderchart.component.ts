import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
// import {Todo} from '../api/models/todo';
// import {TodoControllerService} from '../api/services/todo-controller.service';
import {HttpClient} from '@angular/common/http';
import * as CanvasJS from '../../assets/canvasjs.min';
@Component({
  selector: 'app-orderchart',
  templateUrl: './orderchart.component.html',
  styleUrls: ['./orderchart.component.css']
})
export class OrderchartComponent implements OnInit {

  transaction: any;
  transactions = [];
  elements: any[];
  items: any[];
  constructor(private http: HttpClient){
    this.elements = [];
  }

  ngOnInit(): void {
    this.http.get('http://localhost:3000/transactions')
      .subscribe(Response => {
        this.transaction = Response;
        this.elements = this.transaction;
        this.items = this.elements.map(x => ({y: x.totalPrice, name: x.name, z: x.createdDate}));
        console.log('ssssssssssss', this.items);
        console.log('dddddddddd', this.elements);
        const chart = new CanvasJS.Chart('chartContainer', {
      theme: 'light2',
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: 'Monthly Expense'
      },
      data: [{
        type: 'pie',
        // showInLegend: true,
        // toolTipContent: '<b>{this.elements.totalPrice}</b>: ${y} (#status)',
        indexLabel: '{name} - #percent%',
        dataPoints: this.items
      }]
    });
        chart.render();
      });
  }
}

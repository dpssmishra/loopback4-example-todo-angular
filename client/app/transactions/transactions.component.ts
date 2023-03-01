import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
// import {Todo} from '../api/models/todo';
// import {TodoControllerService} from '../api/services/todo-controller.service';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  transaction: any;
  transactions = [];
  constructor(private http: HttpClient){

  }

  ngOnInit(): void {
    this.http.get('http://localhost:3000/transactions')
      .subscribe(Response => {
        console.log(Response);
        this.transaction = Response;
        this.transactions = this.transaction;
      });
  }
}

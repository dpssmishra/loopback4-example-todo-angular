import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
// import {Todo} from '../api/models/todo';
// import {TodoControllerService} from '../api/services/todo-controller.service';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  product: any;
  products = [];
  constructor(private http: HttpClient){

  }

  ngOnInit(): void {
    this.http.get('http://localhost:3000/products')
      .subscribe(Response => {
        if (Response){
          hideloader();
        }
        console.log(Response);
        this.product = Response;
        this.products = this.product;
      });
    function hideloader(): void{
      document.getElementById('loading').style.display = 'none'; }
  }
}

import { Component, OnInit } from '@angular/core';
import {ServiceUtilService} from '../shared/service-util.service';
import {Product} from '../beans/entryUtils';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private products: Product[];
  private imageURL: string = '../../assets/image/2.png';

  constructor(private sus: ServiceUtilService) {
    this.products = sus.getAllProducts();
    this.sus.searchEvent.subscribe(
      (searchParams) => {
        this.products = this.sus.searchHandle(searchParams);
      }
      );
  }

  ngOnInit() {
  }



}

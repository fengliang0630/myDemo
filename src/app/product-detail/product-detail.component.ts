import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Product} from '../beans/entryUtils';
import {ServiceUtilService} from '../shared/service-util.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  private productId: number;
  private product: Product;
  private imageURL: string = '../../assets/image/2.png';

  constructor(private routeInfo: ActivatedRoute, private sus: ServiceUtilService) {
    this.productId = this.routeInfo.snapshot.params['productId'];
    this.product = this.sus.getProductById(this.productId);
  }

  ngOnInit() {
  }

}

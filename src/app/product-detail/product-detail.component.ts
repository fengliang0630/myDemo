import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Comment, Product} from '../beans/entryUtils';
import {ServiceUtilService} from '../shared/service-util.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {

  private productId: number;
  private product: Product;
  private imageURL: string;
  private commentLength: number;

  constructor(private routeInfo: ActivatedRoute, private sus: ServiceUtilService) {
    this.imageURL = '../../assets/image/2.png';
    this.productId = this.routeInfo.snapshot.params['productId'];
    this.product = this.sus.getProductById(this.productId);
    this.commentLength = this.sus.getCommentsLengthByProductId(this.productId);
  }

  productRatingChangeHandler(comments: Comment[]) {
    this.product.rating = this.sus.getAvgProductRating(comments);
    this.commentLength = comments.length;
  }


}

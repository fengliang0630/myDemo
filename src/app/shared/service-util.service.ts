import {EventEmitter, Injectable} from '@angular/core';
import {Product} from '../beans/entryUtils';

@Injectable()
export class ServiceUtilService {

  private products: Product[] = [
    new Product(1,'第一个商品',Math.random() * 100, Math.round(Math.random()*5),'这是第一个商品，是我在学习慕课网Angular入门实战时创建的',['JAVASCRIPT教学', 'TYPESCRIPT教学']),
    new Product(2,'第二个商品',Math.random() * 100, Math.round(Math.random()*5),'这是第二个商品，是我在学习慕课网Angular入门实战时创建的',['C语言教学']),
    new Product(3,'第三个商品',Math.random() * 100, Math.round(Math.random()*5),'这是第三个商品，是我在学习慕课网Angular入门实战时创建的',['C语言教学', 'TYPESCRIPT教学']),
    new Product(4,'第四个商品',Math.random() * 100, Math.round(Math.random()*5),'这是第四个商品，是我在学习慕课网Angular入门实战时创建的',['JAVASCRIPT教学']),
    new Product(5,'第五个商品',Math.random() * 100, Math.round(Math.random()*5),'这是第五个商品，是我在学习慕课网Angular入门实战时创建的',['JAVASCRIPT教学', 'TYPESCRIPT教学']),
    new Product(6,'第六个商品',Math.random() * 100, Math.round(Math.random()*5),'这是第六个商品，是我在学习慕课网Angular入门实战时创建的',['JAVASCRIPT教学'])
  ];
  /** 因为search组件和product组件不是一个父元素
   * 但是都依赖于这个service
   * 因此  用这个service作为中间人  从search组件传递参数给product组件
   * */
  public searchEvent: EventEmitter<string> = new EventEmitter();

  constructor() {}

  getAllProductCategorys(): string[] {
    return ['C语言教学', 'JAVA教学', 'JAVASCRIPT教学', 'TYPESCRIPT教学'];
  }

  getAllProducts(): Product[]{
    return this.products;
  }

  getProductById(id: number): Product {
    return this.products.find(
      (product) => id == product.id
    );
  }

  searchHandle(params: any): Product[] {
    return this.products.filter(
      (pro) => {
        let res: boolean = false;
        res = (pro.title.indexOf(params.productName) > -1);
        if (res) {
          res = pro.price >= params.productPrice;
        }
        if (res && params.productCategory && params.productCategory != '-1') {
          res = (pro.categories.indexOf(params.productCategory) > -1);
        }
        return res;
      }
    );
  }

}

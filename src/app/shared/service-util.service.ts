import { Injectable } from '@angular/core';
import {Product} from '../beans/entryUtils';

@Injectable()
export class ServiceUtilService {

  constructor() { }

  getAllProductCategorys(): string[] {
    return ['C语言教学', 'JAVA教学', 'JAVASCRIPT教学', 'TYPESCRIPT教学'];
  }

  getAllProducts(): Product[]{
    return [
      new Product(1,'第一个商品',Math.random() * 100, Math.round(Math.random()*5),'这是第一个商品，是我在学习慕课网Angular入门实战时创建的',['JAVASCRIPT教学', 'TYPESCRIPT教学']),
      new Product(2,'第二个商品',Math.random() * 100, Math.round(Math.random()*5),'这是第二个商品，是我在学习慕课网Angular入门实战时创建的',['C语言教学']),
      new Product(3,'第三个商品',Math.random() * 100, Math.round(Math.random()*5),'这是第三个商品，是我在学习慕课网Angular入门实战时创建的',['C语言教学', 'TYPESCRIPT教学']),
      new Product(4,'第四个商品',Math.random() * 100, Math.round(Math.random()*5),'这是第四个商品，是我在学习慕课网Angular入门实战时创建的',['JAVASCRIPT教学']),
      new Product(5,'第五个商品',Math.random() * 100, Math.round(Math.random()*5),'这是第五个商品，是我在学习慕课网Angular入门实战时创建的',['JAVASCRIPT教学', 'TYPESCRIPT教学']),
      new Product(6,'第六个商品',Math.random() * 100, Math.round(Math.random()*5),'这是第六个商品，是我在学习慕课网Angular入门实战时创建的',['JAVASCRIPT教学'])
    ];
  }

}

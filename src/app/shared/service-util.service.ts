import {EventEmitter, Injectable} from '@angular/core';
import {Comment, Product} from '../beans/entryUtils';

@Injectable()
export class ServiceUtilService {

  private products: Product[] = [
     new Product(1, '第一个商品', Math.random() * 100, Math.round(Math.random() * 5),
       '这是第一个商品，是我在学习慕课网Angular入门实战时创建的', ['JAVASCRIPT教学', 'TYPESCRIPT教学']) ,
     new Product(2, '第二个商品', Math.random() * 100, Math.round(Math.random() * 5),
       '这是第二个商品，是我在学习慕课网Angular入门实战时创建的', ['C语言教学']) ,
     new Product(3, '第三个商品', Math.random() * 100, Math.round(Math.random() * 5),
       '这是第三个商品，是我在学习慕课网Angular入门实战时创建的', ['C语言教学', 'TYPESCRIPT教学']) ,
     new Product(4, '第四个商品', Math.random() * 100, Math.round(Math.random() * 5),
       '这是第四个商品，是我在学习慕课网Angular入门实战时创建的', ['JAVASCRIPT教学']) ,
     new Product(5, '第五个商品', Math.random() * 100, Math.round(Math.random() * 5),
       '这是第五个商品，是我在学习慕课网Angular入门实战时创建的', ['JAVASCRIPT教学', 'TYPESCRIPT教学']) ,
     new Product(6, '第六个商品', Math.random() * 100, Math.round(Math.random() * 5),
       '这是第六个商品，是我在学习慕课网Angular入门实战时创建的', ['JAVASCRIPT教学'])
  ];

  private comments: Comment[] = [
    new Comment(0, 1, Math.round(Math.random() * 5),
      '张三', '2017-05-05', '这本教材不错1'),
    new Comment(1, 1, Math.round(Math.random() * 5),
      '李四', '2017-05-08', '这本教材不错2'),
    new Comment(2, 1, Math.round(Math.random() * 5),
      '王五', '2017-05-09', '这本教材不错3'),
    new Comment(3, 2, Math.round(Math.random() * 5),
      '麻六', '2017-05-15', '这本教材不错4'),
  ];

  /** 因为search组件和product组件不是一个父元素
   * 但是都依赖于这个service
   * 因此  用这个service作为中间人  从search组件传递参数给product组件
   * */
  public searchEvent: EventEmitter<string> = new EventEmitter();

  constructor() {}

  /**
   * 根据产品ID获取所有评论
   * @param {number} productId
   * @returns {Comment[]}
   */
  getCommentsByProductId(productId: number): Comment[] {
    return this.comments.filter((comment) => comment.productId == productId);
  }

  /**
   * 根据产品ID获取评论总条数
   * @param {number} productId
   * @returns {number}
   */
  getCommentsLengthByProductId(productId: number): number {
    const sum: number = this.comments.reduce(
      (sumTem , comment) => (productId == comment.productId) ? ++sumTem : sumTem
      , 0);
    return sum;
  }

  /**
   * 获取所有产品类型
   * @returns {string[]}
   */
  getAllProductCategorys(): string[] {
    return ['C语言教学', 'JAVA教学', 'JAVASCRIPT教学', 'TYPESCRIPT教学'];
  }

  /**
   * 获取所有产品
   * @returns {Product[]}
   */
  getAllProducts(): Product[] {
    return this.products;
  }

  /**
   * 根据产品id获取该产品
   * @param {number} id
   * @returns {Product}
   */
  getProductById(id: number): Product {
    return this.products.find(
      (product) => id == product.id
    );
  }

  /**
   * 根据查询条件获取产品列表
   * @param params
   * @returns {Product[]}
   */
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

  /**
   * 根据新的所有评论信息  获取该产品的评价星级
   * @param {Comment[]} comments
   * @returns {number}
   */
  getAvgProductRating(comments: Comment[]): number {
    const sum: number = this.comments.reduce((sumTem, comment) => sumTem += comment.rating, 0);
    return sum / this.comments.length;
  }

}

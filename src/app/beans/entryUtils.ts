import {Injectable} from '@angular/core';

@Injectable()
export class Product {
  constructor(
    public id:number,
    public title:string,
    public price:number,
    public rating:number,
    public desc:string,
    public categories: string[]
  ) {}
}

export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public desc: string,
    public categories: string[]
  ) {}
}

export class Comment {
  constructor(
   public id: number,
   public productId: number,
   public rating: number,
   public userName: string,
   public timestamp: string,
   public content: string
  ) {}
}



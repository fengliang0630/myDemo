import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {Product} from '../beans/entryUtils';
import {Observable} from 'rxjs/Observable';
import {ServiceUtilService} from '../shared/service-util.service';
import {Injectable} from '@angular/core';

@Injectable()
export class ResolveGuard implements Resolve<Product> {

  constructor(private sus: ServiceUtilService, private route: Router) {}

  resolve(route: ActivatedRouteSnapshot, snapshot: RouterStateSnapshot): Observable<Product> | Promise<Product> | Product {
    const productId: number = route.params['productId'];
    const p: Product = this.sus.getProductById(productId);
    if (p) {
      return p;
    } else {
      this.route.navigate(['']);
      return undefined;
    }

  }

}

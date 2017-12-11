import {CanActivate} from '@angular/router';

export class CanActivateGuard implements CanActivate {

  canActivate() {
    console.log('进入路由的时候调用的路由守卫ActiveGuard');
    return true;
  }

}

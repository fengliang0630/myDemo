import {ActivatedRouteSnapshot, CanDeactivate} from '@angular/router';
import {ShowContentComponent} from '../show-content/show-content.component';

export class CanDeactivateGuard implements CanDeactivate<ShowContentComponent> {

  canDeactivate(component: ShowContentComponent) {
    console.log('跳出路由的时候调用的路由守卫DeactiveGuard');
    return true;
  }

}

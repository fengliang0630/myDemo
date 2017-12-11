import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { ShowContentComponent } from './show-content/show-content.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ServiceUtilService} from './shared/service-util.service';
import {RouterModule, Routes} from '@angular/router';
import { CarouselComponent } from './carousel/carousel.component';
import { ProductComponent } from './product/product.component';
import { StarsComponent } from './stars/stars.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CommentsComponent } from './comments/comments.component';
import {CanActivateGuard} from './guard/canActivate_guard';
import {CanDeactivateGuard} from './guard/canDeactivate_guard';
import {ResolveGuard} from './guard/Resolve_guard';

const routeConfig: Routes = [
  {path: '', component: ShowContentComponent, pathMatch: 'full',
    canActivate: [CanActivateGuard] , canDeactivate: [CanDeactivateGuard]},
  {path: 'product/:productId', component: ProductDetailComponent, pathMatch: 'full',
    resolve: {
      productObj: ResolveGuard
    }},
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SearchFormComponent,
    ShowContentComponent,
    CarouselComponent,
    ProductComponent,
    StarsComponent,
    ProductDetailComponent,
    CommentsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routeConfig)
  ],
  providers: [ServiceUtilService, CanActivateGuard, CanDeactivateGuard, ResolveGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

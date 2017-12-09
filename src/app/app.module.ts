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

const routeConfig: Routes = [
  {path: '', component: ShowContentComponent, pathMatch: 'full'}
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
    StarsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routeConfig)
  ],
  providers: [ServiceUtilService],
  bootstrap: [AppComponent]
})
export class AppModule { }

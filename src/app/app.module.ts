import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {ProductListComponent} from './products/product-list-component';
import {ConvertToSpacesPipe} from './shared/convert-to-spaces.pipe';
import {StarComponent} from './shared/star.component';
import {HttpClientModule} from '@angular/common/http';
import {WelcomeComponent} from './home/welcome.component';
import {ProductDetailComponent} from './products/product-detail.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent,
    WelcomeComponent,
    ProductDetailComponent,
    //RouterModule
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'product', component: ProductListComponent},
      {path: 'products/id', component: ProductDetailComponent},
      {path: 'welcome', component: WelcomeComponent},
      {path: '', redirectTo: 'welcome', pathMatch: 'full'},
      {path: '**', redirectTo: 'welcome', pathMatch: 'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

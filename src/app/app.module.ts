import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import {FormsModule} from "@angular/forms"
​import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { CategoryComponent } from './components/category/category.component';
import { NavyComponent } from './components/navy/navy.component';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';
import { VatAddedPipe } from './pipes/vat-added.pipe';

import {ToastrModule} from "ngx-toastr";
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component'

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CategoryComponent,
    NavyComponent,
    FilterPipePipe,
    VatAddedPipe,
    CartSummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
       positionClass:"toast-bottom-right"
    }     
    )
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

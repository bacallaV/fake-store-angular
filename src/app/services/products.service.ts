import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private httClient: HttpClient,
  ) { }

  public getAllProducts() {
    return this.httClient.get<Product[]>( 'https://fakestoreapi.com/products' );
  }

  public getProduct( id: string ) {
    return this.httClient.get<Product>( 'https://fakestoreapi.com/products/' + id );
  }
}

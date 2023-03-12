import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  public getAllCategories() {
    return this.httpClient.get<string[]>( 'https://fakestoreapi.com/products/categories' );
  }
}

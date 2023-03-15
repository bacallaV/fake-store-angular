import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';

import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public products: Product[] = [];
  public loading: boolean = true;

  constructor(
    private productsService: ProductsService,
  ) {

  }

  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe( data => {
      this.loading = false;
      this.products = data;
    });
  }

}

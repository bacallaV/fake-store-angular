import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  public categories: string[];
  public loading: boolean = true;

  constructor(
    private categoriesService: CategoriesService,
  ) {
    this.categories = [];
  }

  ngOnInit() {
    this.categoriesService.getAllCategories().subscribe( data => {
      this.loading = false;
      this.categories = data;
    });
  }
}

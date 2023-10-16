import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/_models/category';
import { Pagination } from 'src/app/_models/pagination';
import { Product } from 'src/app/_models/product';
import { Result } from 'src/app/_models/result';
import { UserParams } from 'src/app/_models/userParam';
import { CategoryService } from 'src/app/_services/category.service';
import { ProductService } from 'src/app/_services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  result: Result<Product> | undefined;
  products: Product[] = [];
  pagination: Pagination = {} as Pagination;
  userParams: UserParams = new UserParams();
  categories: Category[] = [];
  constructor(private productService: ProductService,
    private cateService: CategoryService) { }

  ngOnInit(): void {
    this.loadProducts();
    this.loadCategories();
  }

  loadProducts() {
    this.productService.getProducts(this.userParams).subscribe({
      next: response => {
        if (response) {
          this.products = response.content;
          this.pagination = response.pageble;
        }
      }
    })
  }

  loadCategories() {
    this.cateService.getCategories().subscribe({
      next: response => {
        this.categories = response
        console.log(this.categories);
      }
    })
  }

  change(e: any) {
    if (this.userParams?.pageNumber != (e - 1) && this.userParams) {
      this.userParams.pageNumber = e - 1;
      // this.memberService.setUserParams(this.userParams);
      console.log(this.userParams.pageNumber);
      
      this.loadProducts();
    }
  }

  resetFilters(){
    this.userParams = new UserParams();
    this.loadProducts();
  }

}

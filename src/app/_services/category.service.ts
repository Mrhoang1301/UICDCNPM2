import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../_models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  baseUrl = 'http://localhost:8080/api/';
  // result: Result<Product>[] | undefined;

  constructor(private http: HttpClient) { }

  getCategories() {
    return this.http.get<Category[]>(this.baseUrl + 'categories')
  }

  
}

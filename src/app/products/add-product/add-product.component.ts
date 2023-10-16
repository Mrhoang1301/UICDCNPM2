import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/_models/product';
import { ProductService } from 'src/app/_services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnDestroy{
  model:Product
  private addProductSubscription?: Subscription

  constructor(private productService: ProductService) {
    this.model = {
      id:10,
      productName: '',
      price: 0,
      category:['Fashion'],
      photoUrl:'',
    };
  }
  onFormSubmit(){
    this.addProductSubscription = this.productService.addProduct(this.model)
    .subscribe({
      next:(response)=>{
        console.log(response);
      }
    });
  }

  ngOnDestroy(): void {
    this.addProductSubscription?.unsubscribe();
  }
}

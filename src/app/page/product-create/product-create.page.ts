import { Component, OnInit } from '@angular/core';
import { Products } from '../../interfaces/products';
import { ProductsService } from '../../services/products/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.page.html',
  styleUrls: ['./product-create.page.scss'],
})
export class ProductCreatePage implements OnInit {

  data: Products

  constructor(
    public productsService: ProductsService,
    public router: Router
  ) {
    this.data = new Products();
   }

  ngOnInit() {
  }

  submitForm() {
    this.productsService.createItem(this.data).subscribe((response) => {
      this.router.navigate(['list']);
    });
 
  }

}

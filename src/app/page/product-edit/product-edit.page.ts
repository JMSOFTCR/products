import { Component, OnInit } from '@angular/core';
import { Products } from '../../interfaces/products';
import { ProductsService } from '../../services/products/products.service' 
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.page.html',
  styleUrls: ['./product-edit.page.scss'],
})
export class ProductEditPage implements OnInit {

  id: number;
  data: Products;

  constructor(
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public productsService: ProductsService
  ) {
    this.data = new Products();
   }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params["id"];
    //get item details using id
    this.productsService.getItem(this.id).subscribe(response => {
      console.log(response);
      this.data = response;
    })
 }

 update(){
   //update item by taking id and updated data object 
   this.productsService.updateItem(this.id, this.data).subscribe(response =>{
     this.router.navigate(['list']);
   })
 }

}

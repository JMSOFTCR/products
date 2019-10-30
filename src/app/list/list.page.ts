import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products/products.service';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  productsData: any;

  constructor(
    public productsService: ProductsService
    ) {
      this.productsData = [];
      }

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts() {
    //Get saved list of students
    this.productsService.getList().subscribe(response => {
      console.log(response);
      this.productsData = response;
    })
  }

  delete(item) {
    //Delete item in Student data
    this.productsService.deleteItem(item.id).subscribe(Response => {
      //Update list after delete is successful
      this.getAllProducts();
    });
  }

}

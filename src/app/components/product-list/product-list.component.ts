import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private _PRODUCTSERVICE: ProductsService) { }

  productList: any[];
  searchtext: string = '';

  ngOnInit(): void {
    this._PRODUCTSERVICE.getProductList().subscribe(
      res => { this.productList = res; }
    );
  }

  filterProducts() {
    console.log(this.searchtext);
    this._PRODUCTSERVICE.filterProducts(this.searchtext).then(
      (res) => { this.productList = res; }
    )
  }


}

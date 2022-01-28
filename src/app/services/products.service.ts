import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  productlist = PRODUCTLIST;

  public getProductList() {
    return of(this.productlist)
  }

  public filterProducts(searchTerm: string): Promise<any> {
    return of(this.productlist.filter((x: any) => {
      return x.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
    })).toPromise();
  }

}

export const PRODUCTLIST = [
  {
    "title": "TV",
    "type": "flat"
  },
  {
    "title": "FRIDGE",
    "type": "Double door"
  },
  {
    "title": "Ac",
    "type": "2 ton"
  }
]
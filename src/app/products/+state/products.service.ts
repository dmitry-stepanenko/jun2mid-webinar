import { Injectable } from '@angular/core';
import { defer, Observable, of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';
import { InventoryTypeItem as Category, Product} from '../models/products.models';

@Injectable()
export class ProductsFacade {
  private productsRequestCount = 0;
  private categoriesRequestCount = 0;

  getProducts(): Observable<Product[]> {
    return defer(() =>  {
      console.log('getProducts http');
      // if (++this.productsRequestCount <= 2) {
      //   console.error('Products request failed');
      //   return throwError(new Error('Products request failed'));
      // }
      return of(PRODUCTS_DATA).pipe(delay(2000))
    });
  }
  
  getCategories(): Observable<Category[]> {
    return defer(() =>  {
      console.log('getCategories http');
      // if (++this.categoriesRequestCount <= 2) {
      //   console.error('Products request failed');
      //   return throwError(new Error('Categories request failed'));
      // }
      return of(CATEGORIES).pipe(delay(2000))
    });
  }
  
}

const CATEGORIES: Category[] = [
  {
    displayed_name: 'Автотовары',
    id: 1
  },
  {
    displayed_name: 'Товары для дома',
    id: 2
  },
  {
    displayed_name: 'Бытовая химия',
    id: 3
  },
  {
    displayed_name: 'Сувениры',
    id: 4
  },
  {
    displayed_name: 'Игрушки',
    id: 5
  }
];

const PRODUCTS_DATA: Product[] = new Array(5).fill(null).map((e, index) => {
  const name = 'Product ' + index + 1;
  return {
    name,
    id: index + 1,
    inventory_no: ((index + 1) * 30000).toString(16),
    description: 'Детальное описание товара '+ index + 1,
    price: index % 3 *10 + index % 2 *6 - index %2 * 4,
    category_id: CATEGORIES[index].id,
  };
});
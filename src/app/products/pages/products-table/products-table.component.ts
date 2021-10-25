import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsTableComponent {
  title = 'Список товаров';

  constructor(private productsService: ProductsService) {}

  productSelectionChanged(event: MatButtonToggleChange) {
    const productId = event.value;
    console.log('productId', productId);
  }
}

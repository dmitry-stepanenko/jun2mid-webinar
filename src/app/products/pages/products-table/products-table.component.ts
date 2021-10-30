import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { handleHttpError } from 'src/app/utils/handle-http-error';
import { ProductsService } from '../../services/products.service';
import { InventoryTypeItem, Product, ProductWithCategory } from '../../models/products.models';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsTableComponent {
  title = 'Список товаров';
  private readonly selectedProductId$ = new BehaviorSubject<Product['id'] | null>(null);

  readonly viewModel$ = this.getViewModel();

  constructor(private productsService: ProductsService) {}

  productSelectionChanged(event: MatButtonToggleChange) {
    const productId = event.value;
    this.selectedProductId$.next(productId);
  }

  private getViewModel(): Observable<ViewModel> {
    return combineLatest([
      this.productsService.getProducts().pipe( handleHttpError<Product[]>([]) ),
      this.productsService.getCategories().pipe( handleHttpError<InventoryTypeItem[]>([]) ),
      this.selectedProductId$,
    ]).pipe(
      map(([products, categories, selectedProductId]) => {
        let selectedProduct: ProductWithCategory | null = null;
        let subtitle: string | null = null;
        if (selectedProductId) {
          const foundSelectedProduct = products.find((p) => p.id === selectedProductId)!;
          const foundCategory = categories.find((c) => c.id === foundSelectedProduct.category_id)!;
          selectedProduct = {
            ...foundSelectedProduct,
            category: foundCategory.displayed_name,
          } as ProductWithCategory;
          subtitle = `${selectedProduct.name} (${selectedProduct.category})`;
        }
        return {
          products,
          selectedProduct: selectedProduct,
          subtitle,
        };
      })
    );
  }
}

interface ViewModel {
  products: Product[];
  subtitle: string | null;
  selectedProduct: ProductWithCategory | null;
}

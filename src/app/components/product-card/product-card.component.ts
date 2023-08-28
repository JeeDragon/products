import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Product } from '../../shared/types/product';

/**
 * Represents a product container
 * @date 8/28/2023 - 5:01:00 PM
 *
 * @export
 * @class ProductCardComponent
 * @typedef {ProductCardComponent}
 */
@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {

  // Two way binding to product can be done.
  @Input() product: Product | undefined;
  @Output() productChange = new EventEmitter<Product>();

  /**
   * Increase the product price and trigger event changes for two-binding to work.
   * @date 8/28/2023 - 5:01:43 PM
   */
  increasePrice() {
    this.product!.price = `${+this.product!.price + 1}`;
    this.productChange.emit(this.product);
  }
}
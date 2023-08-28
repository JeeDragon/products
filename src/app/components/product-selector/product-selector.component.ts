import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, ContentChild, EventEmitter, HostListener, Inject, Input, Output, TemplateRef } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import { autocomplete } from 'src/app/shared/autocomplete';
import { Product } from 'src/app/shared/types/product';

/**
 * Product selector input that can be configured to show products in different ways.
 * @date 8/28/2023 - 4:52:04 PM
 *
 * @export
 * @class ProductSelectorComponent
 * @typedef {ProductSelectorComponent}
 */
@Component({
  selector: 'app-product-selector',
  templateUrl: './product-selector.component.html',
  styleUrls: ['./product-selector.component.scss'],
  animations: [
    trigger('showHide', [
      state('show', style({ opacity: 1 })),
      state('hide', style({ opacity: 0 })),
      transition('hide => show', [animate('2s')]),
      transition('show => hide', [animate('0.5s')])
    ])
  ]
})
export class ProductSelectorComponent {
  @Input() limit: number = 20;
  @Output() limitChange = new EventEmitter<number>();
  @Input() label: string = 'Product Search';

  value: Product | undefined;
  term$: BehaviorSubject<string> = new BehaviorSubject('');
  results$: Observable<Product[]> = this.term$
    .pipe(autocomplete(250, ([term]: any) => this.fetchProducts(term)));

  // If option template is provided that will be used over the default template.
  @ContentChild('optionTemplate', { descendants: true }) optionTemplateRef!: TemplateRef<any>;

  // Animation state for clear button
  currentState: 'show' | 'hide' = 'hide';

  constructor(public readonly sProduct: ProductService) { }

  /**
   * Listens for when the hosts mouse enters this component and triggers animation changes.
   * @date 8/28/2023 - 4:58:12 PM
   */
  @HostListener('mouseenter')
  onMouseEnter() {
    this.currentState = 'show';
  }

  /**
   * Listens for when the hosts mouse leaves this component and triggers animation changes.
   * @date 8/28/2023 - 4:58:12 PM
   */
  @HostListener('mouseleave')
  onMouseLeave() {
    this.currentState = 'hide';
  }

  /**
   * Shows two-way binding with limit. Inreases limit and emits the change.
   * @date 8/28/2023 - 4:57:11 PM
   */
  increaseLimit() {
    this.limit = +this.limit + 1;
    this.limitChange.emit(this.limit);
  }

  /**
   * Display's the product in a nice format.
   * @date 8/28/2023 - 5:25:29 PM
   *
   * @param {Product} product
   * @returns {*}
   */
  productDisplayFn(product: Product) {
    return product?.name;
  }

  /**
   * Set's the currently selected product.
   * @date 8/28/2023 - 4:55:57 PM
   *
   * @param {MatAutocompleteSelectedEvent} event
   */
  onProductSelected(event: MatAutocompleteSelectedEvent) {
    this.value = this.sProduct.products.find(p => p.id === event.option.value.id);
  }

  /**
   * Listens for input changes and triggers searching of the product data.
   * @date 8/28/2023 - 4:56:23 PM
   *
   * @param {string} value
   */
  onInputChange(value: string) {
    this.term$.next(value)
  }

  /**
   * Allows searching of products.
   * @date 8/28/2023 - 4:52:56 PM
   *
   * @param {string} term
   * @returns {*}
   */
  fetchProducts(term: string) {
    return of(
      this.sProduct.products.filter((e: Product) => {
        return (
          e.name.toUpperCase().includes(term.toUpperCase()) ||
          e.category.toUpperCase().includes(term.toUpperCase()) ||
          e.subcategory.toUpperCase().includes(term.toUpperCase()) ||
          e.price.toUpperCase().includes(term.toUpperCase()) ||
          e.sale_price.toUpperCase().includes(term.toUpperCase())
        );
      }).slice(0, this.limit)
    );
  }
}

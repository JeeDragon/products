import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, ContentChild, HostListener, Inject, Input, TemplateRef } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import { autocomplete } from 'src/app/shared/autocomplete';
import { Product } from 'src/app/shared/types/product';

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
  @Input() label: string = 'Product Search';

  value: Product | undefined;
  term$: BehaviorSubject<string> = new BehaviorSubject('');
  results$: Observable<Product[]> = this.term$
    .pipe(autocomplete(250, ([term]: any) => this.fetchProducts(term)));

  @ContentChild('optionTemplate', { descendants: true }) optionTemplateRef!: TemplateRef<any>;
  currentState: 'show' | 'hide' = 'hide';

  constructor(public readonly sProduct: ProductService) { }
  @HostListener('mouseenter')
  onMouseEnter() {
    this.currentState = 'show';
  }
  @HostListener('mouseleave')
  onMouseLeave() {
    this.currentState = 'hide';
  }

  onProductSelected(event: MatAutocompleteSelectedEvent) {
    this.value = this.sProduct.products.find(p => p.id === event.option.value);
  }

  onInputChange(value: string) {
    this.term$.next(value)
  }

  fetchProducts(term: string) {
    return of(
      this.sProduct.products.filter((e: Product) => {
        return (
          e.name.includes(term.toUpperCase()) ||
          e.category.includes(term.toUpperCase()) ||
          e.subcategory.includes(term.toUpperCase()) ||
          e.price.includes(term.toUpperCase()) ||
          e.sale_price.includes(term.toUpperCase())
        );
      }).slice(0, this.limit)
    );
  }
}

import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './components/app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { FormsModule } from '@angular/forms';
import { CustomInputComponent } from './components/custom-input/custom-input.component';
import { AutoMarginDirective } from './shared/directives/auto-margin.directive';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule, MAT_FAB_DEFAULT_OPTIONS } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ProductSelectorComponent } from './components/product-selector/product-selector.component';
import { MoneyPipe } from './shared/pipes/money.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductCardComponent,
    CustomInputComponent,
    AutoMarginDirective,
    ProductSelectorComponent,
    MoneyPipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [{
    provide: MAT_FAB_DEFAULT_OPTIONS,
    useValue: {
      color: 'primary'
    }
  }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

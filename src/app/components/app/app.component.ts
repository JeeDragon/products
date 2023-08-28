import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable, combineLatest, fromEvent, map, of } from 'rxjs';
import { Product } from 'src/app/shared/types/product';
import { CustomInputComponent } from '../custom-input/custom-input.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  combined$: Observable<string> = of('');
  limit: number = 100;
  productSelectorPadding: number = 10;

  @ViewChild(CustomInputComponent, { read: ElementRef }) myInput1!: ElementRef;
  @ViewChild('myInput2', { read: ElementRef }) myInput2!: ElementRef;

  constructor() { }

  ngAfterViewInit(): void {
    const onChange1 = fromEvent<any>(this.myInput1.nativeElement, 'input');
    const onChange2 = fromEvent<any>(this.myInput2.nativeElement, 'input');
    this.combined$ = combineLatest({ first: onChange1, second: onChange2 })
      .pipe(map(({ first, second }): any => {
        return `${first.target['value']} - ${second.target['value']}`;
      }));
  }

  incrementPadding() {
    this.productSelectorPadding += 1;
  }
}

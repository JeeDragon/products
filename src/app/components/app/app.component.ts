import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Observable, combineLatest, fromEvent, map, of } from 'rxjs';
import { CustomInputComponent } from '../custom-input/custom-input.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  combined$: Observable<string> = of('');
  limit: number = 100;

  @ViewChild(CustomInputComponent, { read: ElementRef }) myInput1!: ElementRef;
  @ViewChild('myInput2', { read: ElementRef }) myInput2!: ElementRef;

  constructor() { }
  
  /**
   * After view initialized we setup some event handlers manually using only rxjs. 
   * Listening to input changes on the two inputs, we combine results using combineLatest operator.
   * @date 8/28/2023 - 5:03:31 PM
   */
  ngAfterViewInit(): void {
    const onChange1 = fromEvent<any>(this.myInput1.nativeElement, 'input');
    const onChange2 = fromEvent<any>(this.myInput2.nativeElement, 'input');
    this.combined$ = combineLatest({ first: onChange1, second: onChange2 })
      .pipe(map(({ first, second }): any => {
        return `${first.target['value']} - ${second.target['value']}`;
      }));
  }
}

import { AfterViewInit, Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAutoMargin]'
})
export class AutoMarginDirective implements AfterViewInit {

  @Input('appAutoMargin') arguments: string = '3px';

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2) { }

  ngAfterViewInit(): void {
    const children: HTMLCollection = this.elementRef.nativeElement.children;
    for (let i = 0; i < children.length - 1; i++) {
      this.renderer.setStyle(children.item(i), 'margin-bottom', this.arguments)
    }
  }

}

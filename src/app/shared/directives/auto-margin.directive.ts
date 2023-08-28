import { AfterViewInit, Directive, ElementRef, Input, Renderer2 } from '@angular/core';

/**
 * Applies margin-bottom to each child node.
 * @date 8/28/2023 - 4:47:42 PM
 *
 * @export
 * @class AutoMarginDirective
 * @typedef {AutoMarginDirective}
 * @implements {AfterViewInit}
 */
@Directive({
  selector: '[appAutoMargin]'
})
export class AutoMarginDirective implements AfterViewInit {

  // Configurable margin, default is 3px
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

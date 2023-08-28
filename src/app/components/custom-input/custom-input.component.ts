import { Component, Input } from '@angular/core';

/**
 * Custom Input created from scratch with various helpers and styles applied.
 * @date 8/28/2023 - 5:02:53 PM
 *
 * @export
 * @class CustomInputComponent
 * @typedef {CustomInputComponent}
 */
@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss']
})
export class CustomInputComponent {
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() myValue: string = '';
  @Input() disabled: boolean = false;
  @Input() type: string = 'text';
}

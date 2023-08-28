import { Component, Input } from '@angular/core';

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

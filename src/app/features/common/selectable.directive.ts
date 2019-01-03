import { Directive, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[neaSelectable]'
})
export class SelectableDirective {

  @Input()
  @HostBinding('class.active')
  selected: boolean;
}

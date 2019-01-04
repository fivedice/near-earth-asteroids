import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'nea-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoaderComponent {
  @Input()
  loading = false;

  @Input()
  height = 500;

  getStyle() {
    return {
      height: `${this.height}px`
    };
  }
}

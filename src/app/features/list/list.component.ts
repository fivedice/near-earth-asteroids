import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter,
         ChangeDetectorRef } from '@angular/core';
import { ListItem } from './list-item.interface';

@Component({
  selector: 'nea-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent {
  @Input()
  loading = false;

  @Input()
  listItems: Array<ListItem> = [];

  @Input()
  itemIdAccessor: (item: ListItem) => string | number;

  @Input()
  itemNameAccessor: (item: ListItem) => string;

  @Output()
  selectionChange = new EventEmitter<ListItem>();

  private debouncer;

  constructor(private changeDetector: ChangeDetectorRef) { }

  getItemDisplay(item: ListItem): string {
    return this.itemNameAccessor(item);
  }

  toggleSelection(item: ListItem) {
    const itemId = this.itemIdAccessor(item);
    this.listItems.forEach((i: ListItem) => {
      if (this.itemIdAccessor(i) === itemId) {
        i.selected = !i.selected;
      } else {
        i.selected = false;
      }
    });
    this.onItemClick();
  }

  private onItemClick() {
    this.debouncer = setTimeout(() => {
      this.onSingleClick();
    }, 200);
  }

  private onSingleClick() {
    const selected = this.listItems.filter(i => i.selected);
    this.selectionChange.emit(selected.length > 0 ? selected[0] : undefined);
    this.changeDetector.markForCheck();
  }
}

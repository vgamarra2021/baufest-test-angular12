import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-custom-paginator',
  template: `
    <ngb-pagination
      [(page)]="page"
      [pageSize]="pageSize"
      [collectionSize]="collectionSize"
      [maxSize]="maxSize"
      size="lg"
      (pageChange)="onPageChange($event)"
    ></ngb-pagination>
  `,
  styles: [],
})
export class CustomPaginator implements OnInit {
  constructor() {}

  @Input() page!: number;
  @Input() pageSize!: number;
  @Input() collectionSize!: number;
  @Output() pageChange = new EventEmitter<number>();
  maxSize: number = 5;

  onPageChange(newPage: number) {
    this.pageChange.emit(newPage);
  }

  ngOnInit(): void {
    const windowWidth = window.innerWidth;
    if (windowWidth < 480) {
      this.maxSize = 2;
    }
  }
}

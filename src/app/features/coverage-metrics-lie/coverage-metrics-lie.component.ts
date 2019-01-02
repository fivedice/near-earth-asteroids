import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nea-coverage-metrics-lie',
  templateUrl: './coverage-metrics-lie.component.html',
  styleUrls: ['./coverage-metrics-lie.component.scss']
})
export class CoverageMetricsLieComponent implements OnInit {

  data: number[];

  constructor() { }

  ngOnInit() {
    this.getSomeData(10, false); // flip to true
    // TRUE:  87.5% Statements 14/16 87.5% Branches 7/8 71.43% Functions 5/7 92.31% Lines 12/13
    // FALSE: 87.5% Statements 14/16 62.5% Branches 5/8 71.43% Functions 5/7 92.31% Lines 12/13
  }

  getSomeData(multiplyBy: number, evenOnly = false) {
    this.data = [];
    for (let i = 0; i < 5; i++) {
      const result = !evenOnly || (i % 2 === 0) ? i * multiplyBy : i;
      this.data.push(result);
    }
  }

  hasData(): boolean {
    return this.data && this.data.length > 0;
  }

  delete(filter: number) {
    this.data = this.data.filter(a => a !== filter);
  }
}

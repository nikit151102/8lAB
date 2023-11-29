import { Injectable } from '@angular/core';
import { Sort } from './sort';

@Injectable({
  providedIn: 'root',
})

export class SortingService {

  private sortingStrategy!: Sort;

  setSortingStrategy(strategy: Sort): void {
    this.sortingStrategy = strategy;
  }

  runSorting(data: number[]): { steps: string[], result: number[] } {
    if (this.sortingStrategy) {
      return this.sortingStrategy.sorting(data);
    } else {
      return { steps: [], result: data };
    }
  }

}

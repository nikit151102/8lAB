import { Component } from '@angular/core';
import { SortingService } from './sorting.service';
import { BubbleSort } from './typeSort1';
import { SelectSort } from './typeSort2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  data: number[] = [];
  sortedData: number[] = [];
  Selected: boolean = false;
  algoritm: string = '';
  Steps: string[] = [];
  array: string = '';
  numberElements: number = 5;

  constructor(private sortingService: SortingService) { }

  setBubbleSort(): void {
    this.generateData();
    this.sortingService.setSortingStrategy(new BubbleSort());
    const { steps, result } = this.sortingService.runSorting([...this.data]);
    this.sortedData = result;
    this.Selected = true;
    this.algoritm = 'Сортировка пузырьком';
    this.Steps = steps;
  }

  setSelectSort(): void {
    this.generateData();
    this.sortingService.setSortingStrategy(new SelectSort());
    const { steps, result } = this.sortingService.runSorting([...this.data]);
    this.sortedData = result;
    this.Selected = true;
    this.algoritm = 'Сортировка по выбору';
    this.Steps = steps;
  }

  reset(): void {
    this.Selected = false;
    this.algoritm = '';
    this.sortedData = [];
    this.Steps = [];
    this.data = [];
  }

  generateData(): void {
    this.data = this.randomArray(this.numberElements);
  }

  randomArray(length: number): number[] {
    return Array.from({ length }, () => Math.floor(Math.random() * 100));
  }

}

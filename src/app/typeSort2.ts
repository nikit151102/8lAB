import { Sort } from './sort';

export class SelectSort implements Sort {

  sorting(arr: number[]): { steps: string[], result: number[] } {
    let min: number;
    const steps: string[] = [];
    for (let i = 0; i < arr.length; i++) {
      min = i;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[min]) {
          min = j;
        }
      }
      if (min !== i) {
        this.swapTwo(arr, min, i);
        steps.push(`Элементы ${arr[min]} (индекс ${min}) и ${arr[i]} (индекс ${i}) были обменены местами. Результат: [${arr}]`);
      }
    }
    return { steps, result: arr };
  }

  private swapTwo(list: number[], a: number, b: number): void {
    [list[a], list[b]] = [list[b], list[a]];
  }
  
}

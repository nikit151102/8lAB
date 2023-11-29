import { Sort } from './sort';

export class BubbleSort implements Sort {

  sorting(arr: number[]): { steps: string[], result: number[] } {
    const copyArr = [...arr];
    const { length } = copyArr;
    const steps: string[] = [];
    const swap = (a: number, b: number): void => {
      copyArr[a] = copyArr[a] + copyArr[b];
      copyArr[b] = copyArr[a] - copyArr[b];
      copyArr[a] = copyArr[a] - copyArr[b];
      steps.push(`Элементы ${copyArr[a]} (индекс ${a}) и ${copyArr[b]} (индекс ${b}) были обменены местами. Результат: [${copyArr}]`);
    };
    for (let x = 0; x < length - 1; x++)
      for (let y = 0; y < length - 1 - x; y++) {
        const [currentIndex, nextIndex] = [y, y + 1];
        if (copyArr[currentIndex] > copyArr[nextIndex]) {
          swap(currentIndex, nextIndex);
        }
      }
    return { steps, result: copyArr };
  }
  
}


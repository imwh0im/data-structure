export class Heap{
  constructor() {}

  public dataList: number[] = [];

  insert(data: number, index?: number): void {
    // 첫번째 값, 루트노드
    if (this.dataList.length === 0 || index === 1) {
      this.dataList[1] = data;
      return;
    }

    // 저장될 인덱스
    index = index || this.dataList.length;
    
    // 부모 인덱스, 데이터
    const parentIndex = Math.floor(index / 2);
    const parentData = this.dataList[parentIndex];
    
    // 부모 보다 저장될 데이터가 큰 경우
    if (parentData < data) {
      this.dataList[index] = parentData;
      return this.insert(data, parentIndex);
    }

    // 부모 데이터 보다 저장될 데이터가 작은 경우
    this.dataList[index] = data;
  }

  delete() {
    const value = this.dataList[1];
    this.reconstruction();
    return value;
  }

  return() {
    return this.dataList;
  }

  reconstruction(index = 0): void {
    if (this.dataList.length < 1) {
      return;
    }
    // 루트 노드
    if (!index) {
      index = 1;
    }

    const leftIndex = index * 2;
    const rightIndex = leftIndex + 1;

    // Leaf
    if (!this.dataList[leftIndex]) {
      return;
    }

    // length 체크됨
    const lastData = <number>this.dataList.pop();

    // 왼쪽 자식이 더 큰 경우
    if (
      !this.dataList[rightIndex] ||
      this.dataList[leftIndex] >= this.dataList[rightIndex]
    ) {
      // 자식 값이 더 큰 경우
      if (this.dataList[leftIndex] > lastData) {
        this.dataList[index] = this.dataList[leftIndex];
        this.dataList[leftIndex] = lastData;
        return this.reconstruction(leftIndex);
      }
      this.dataList[index] = lastData;
      return;
    }

    // 오른쪽 자식이 더 큰 경우
    if (
      this.dataList[leftIndex] < this.dataList[rightIndex]
    ) {
      // 자식 값이 더 큰 경우
      if (this.dataList[rightIndex] > lastData) {
        this.dataList[index] = this.dataList[rightIndex];
        this.dataList[rightIndex] = lastData;
        return this.reconstruction(rightIndex);
      }
      this.dataList[index] = lastData;
      return;
    }
  }
}
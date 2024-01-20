export class BinarySearchTree {
  public Tree: number[] = [];

  private InsertIndex: number | null = null;

  search(data: number, idx = 1): number | null {
    if (this.Tree[idx] === undefined) {
      this.InsertIndex = idx;
      return null;
    }
    if (this.Tree[idx] === data) {
      return idx;
    }

    let index = idx;
    if (this.Tree[idx] > data) {
      index = index * 2;
    }
    if (this.Tree[idx] < data) {
      index = index * 2 + 1
    }
    return this.search(data, index);
  }

  insert(data: number) {
    const index = this.search(data);
    if (this.InsertIndex !== null && index === null) {
      this.Tree[this.InsertIndex] = data;
    }
  }

  delete(data: number, idx = 1): void {
    let index = this.search(data, idx);

    if (index) {
      const leftTreeIndex = index * 2;
      const rightTreeIndex = index * 2 + 1;

      if (
        !this.Tree[leftTreeIndex] &&
        !this.Tree[rightTreeIndex]
      ) {
        delete this.Tree[index];
        return;
      }

      if (
        this.Tree[leftTreeIndex] ||
        this.Tree[rightTreeIndex]
      ) {
        let successorIndex = this.Tree[leftTreeIndex] ? leftTreeIndex : rightTreeIndex;
        while (true) {
          const tempSuccessorIndex = this.Tree[leftTreeIndex] ?
            successorIndex * 2 + 1 :
            successorIndex * 2;
          if (!this.Tree[tempSuccessorIndex]) {
            break;
          }
          successorIndex = tempSuccessorIndex;
        }
        this.Tree[index] = this.Tree[successorIndex];
        return this.delete(this.Tree[successorIndex], successorIndex);
      }
      
      if (
        this.Tree[leftTreeIndex] &&
        this.Tree[rightTreeIndex]
      ) {
        let successorIndex = leftTreeIndex;
        while (true) {
          const tempSuccessorIndex = successorIndex * 2 + 1
          if (!this.Tree[tempSuccessorIndex]) {
            break;
          }
          successorIndex = tempSuccessorIndex;
        }
      }
    }
  }
}
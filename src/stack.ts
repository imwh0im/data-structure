export class Stack<T>{
  constructor(
    private maxSize: number,
  ) {}

  private items: T[] = [];

  isFull() {
    if (this.maxSize === this.items.length) {
      return true;
    }
    return false;
  }

  isEmpty() {
    if (this.items.length === 0) {
      return true;
    }
    return false;
  }

  push(item: T) {
    if (this.isFull()) {
      throw new Error('stack full');
    }
    this.items.push(item);
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error('stack empty');
    }
    return this.items.pop();
  }

  peek() {
    if (this.isEmpty()) {
      throw new Error('stack empty');
    }
    return this.items[this.items.length - 1];
  }
}
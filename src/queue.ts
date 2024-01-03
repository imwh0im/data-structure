export class Queue<T> {
  constructor(
    private maxSize: number,
  ) {}

  private items: T[] = [];

  init() {
    this.items = [];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  isFull() {
    return this.items.length === this.maxSize;
  }

  enqueue(item: T) {
    if (this.isFull()) {
      throw new Error('full queue');
    }

    this.items.push(item);
  }

  dequeue() {
    if (this.isEmpty()) {
      throw new Error('empty queue');
    }
    return this.items.shift();
  }

  peek() {
    if (this.isEmpty()) {
      throw new Error('empty queue');
    }
    return this.items[0];
  }
}

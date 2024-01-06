export class linearQueue<T> {
  constructor(
    private maxSize: number,
  ) {}

  private items: T[] = [];

  private front: number = -1;
  private rear: number = -1;

  init() {
    this.front = -1;
    this.rear = -1;
    this.items = [];
  }

  isEmpty() {
    return this.rear === -1;
  }

  isFull() {
    return this.rear === this.maxSize - 1
  }

  enqueue(item: T) {
    if (this.isFull()) {
      throw new Error('full queue');
    }
    this.rear++;
    this.items[this.rear] = item;
  }

  dequeue() {
    if (this.isEmpty()) {
      throw new Error('empty queue');
    }
    this.front++
    const item = this.items[this.front];
    delete this.items[this.front];
    return item;
  }

  peek() {
    if (this.isEmpty()) {
      throw new Error('empty queue');
    }
    return this.items[this.front + 1];
  }
}

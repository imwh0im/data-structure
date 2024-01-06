export class Deque<T> {
  constructor(
    private maxSize: number,
  ) {
    this.maxSize++;
  }

  private items: T[] = [];

  private front = 0;
  private rear = 0;

  isEmpty() {
    return this.front === this.rear;
  }

  isFull() {
    return (this.rear + 1 % this.maxSize) === this.front;
  }

  addFront(item: T) {
    if (this.isFull()) {
      throw new Error('full deque');
    }
    this.items[this.front] = item;
    this.front = (this.front - 1 + this.maxSize) % this.maxSize;
  }

  deleteFront() {
    if (this.isEmpty()) {
      throw new Error('empty deque');
    }
    this.front = (this.front + 1) % this.maxSize;
    const item = this.items[this.front];
    delete this.items[this.front];
    return item;
  }

  getFront() {
    if (this.isEmpty()) {
      throw new Error('empty deque');
    }
    const index = (this.front + 1) % this.maxSize;
    return this.items[index];
  }

  addRear(item: T) {
    if (this.isFull()) {
      throw new Error('full deque');
    }
    this.rear = (this.rear + 1) % this.maxSize;
    this.items[this.rear] = item;
  }

  deleteRear() {
    if (this.isEmpty()) {
      throw new Error('empty deque');
    }
    const item = this.items[this.rear];
    delete this.items[this.rear];
    this.rear = (this.rear - 1 + this.maxSize) % this.maxSize;
    return item;
  }

  getRear() {
    if (this.isEmpty()) {
      throw new Error('empty deque');
    }
    return this.items[this.rear];
  }
}
export class CircularQueue<T> {
  constructor(
    private maxSize: number,
  ) {
    this.maxSize++;
  }

    private items: T[] = [];

    private front: number = 0;
    private rear: number = 0;

    isEmpty() {
      return this.front === this.rear;
    }

    isFull() {
      return (this.rear + 1) % this.maxSize === this.front;
    }

    enqueue(item: T) {
      if(this.isFull()) {
        throw new Error('full queue');
      }

      this.rear = (this.rear + 1) % this.maxSize;
      this.items[this.rear] = item;
    }

    dequeue() {
      if(this.isEmpty()) {
        throw new Error('empty queue');
      }
      this.front = (this.front + 1) % this.maxSize;
      const item = this.items[this.front];
      delete this.items[this.front];
      return item;
    }

    peek(){
      if (this.isEmpty()) {
        throw new Error('empty queue');
      }
      return this.items[this.front + 1];
    }
}
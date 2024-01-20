import { CircularQueue } from "../circular-queue"

describe('queue Test', () => {
  it('Case 1', () => {
    const queue = new CircularQueue<number>(5);
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.dequeue()).toEqual(1);
    
    expect(queue.isEmpty()).toBe(false);
  });

  it('Case 2', () => {
    const queue = new CircularQueue<string>(5);
    queue.enqueue('a');
    queue.enqueue('b');
    queue.enqueue('c');
    queue.enqueue('d');
    queue.enqueue('e');
    expect(() => queue.enqueue('f')).toThrow('full queue');

    const item = queue.dequeue();
    expect(item).toEqual('a');

    queue.enqueue('f')
    expect(queue.isFull()).toBe(true);
  });
});

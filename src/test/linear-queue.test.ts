import { linearQueue } from "../linear-queue"

describe('queue Test', () => {
  it('Case 1', () => {
    const queue = new linearQueue<number>(5);
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.dequeue()).toEqual(1);
    
    expect(queue.isEmpty()).toBe(false);
    queue.init();
    expect(queue.isEmpty()).toBe(true);
  });

  it('Case 2', () => {
    const queue = new linearQueue<string>(5);
    queue.enqueue('a');
    queue.enqueue('b');
    queue.enqueue('c');
    queue.enqueue('d');
    queue.enqueue('e');
    expect(() => queue.enqueue('f')).toThrow('full queue');

    const item = queue.dequeue();
    expect(item).toEqual('a');

    expect(() => queue.enqueue('f')).toThrow('full queue');
    queue.init();
    const hasEmpty = queue.isEmpty();
    expect(hasEmpty).toBe(true);
  });
});

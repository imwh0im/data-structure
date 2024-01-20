import { Deque } from "../deque";

describe('deque Test', () => {
  it('case 1 (Like Stack)', () => {
    const deque = new Deque<number>(5);

    deque.addFront(5);
    deque.addRear(0);
    deque.addFront(4);
    deque.addRear(1);
    deque.addFront(3);
    expect(deque.isFull()).toBe(true);
    expect(deque.deleteFront()).toEqual(3);
    expect(deque.deleteFront()).toEqual(4);
    expect(deque.deleteFront()).toEqual(5);
    expect(deque.deleteFront()).toEqual(0);
    expect(deque.deleteRear()).toEqual(1);
    expect(deque.isEmpty()).toBe(true);
  });

  it('case 2 (Like Queue)', () => {
    const deque = new Deque<number>(3);
    
    deque.addFront(0);
    deque.addFront(1);
    deque.addFront(2);

    expect(deque.deleteRear()).toEqual(0);
    expect(deque.deleteRear()).toEqual(1);
    expect(deque.deleteRear()).toEqual(2);
  })
});
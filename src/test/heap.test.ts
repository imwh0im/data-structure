import { Heap } from "../heap"

describe('heap test', () => {
  it('case 1', () => {
    const heap = new Heap();

    heap.insert(45);
    heap.insert(42);
    heap.insert(55);
    heap.insert(23);
    heap.insert(14);

    let value = heap.delete();
    expect(value).toEqual(55);

    value = heap.delete();
    expect(value).toEqual(45);

    value = heap.delete();
    expect(value).toEqual(42);

    value = heap.delete();
    expect(value).toEqual(23);

    value = heap.delete();
    expect(value).toEqual(14);
  })
})
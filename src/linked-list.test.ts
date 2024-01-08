import { LinkedList } from "./linked-list"

describe('Linked List Test', () => {
  it('case 1', () => {
    const linkedList = new LinkedList(1);
    linkedList.insertFist(2);
    expect(linkedList.head.data).toEqual(2);
    linkedList.insert(3, linkedList.head);
    expect(linkedList.head.next?.data).toEqual(3);
    let listArray = linkedList.returnArray();
    expect(listArray).toEqual([2,3,1]);

    linkedList.delete(linkedList.head);
    expect(linkedList.head.next?.data).toEqual(1);
    linkedList.deleteFirst()
    expect(linkedList.head.data).toEqual(1);
    expect(linkedList.head.next).toBe(null);
  })
})
import { CircularLinkedList } from "../circular-linked-list"

describe('circular linked list', () => {
  it('case 1', () => {
    const circularLinkedList = new CircularLinkedList<number>(1);
    expect(circularLinkedList.head.data).toEqual(1);
    
    circularLinkedList.insertFirst(2);
    expect(circularLinkedList.head.next?.data).toEqual(2);
    expect(circularLinkedList.head.next?.next?.data).toEqual(1)

    circularLinkedList.insertLast(3);
    expect(circularLinkedList.head.data).toEqual(3);

    let listArray = circularLinkedList.returnArray();
    expect(listArray).toEqual([2,1,3])

    circularLinkedList.deleteFirst()
    listArray = circularLinkedList.returnArray();
    expect(listArray).toEqual([1,3]);
    
    circularLinkedList.insertFirst(2);
    circularLinkedList.delete(circularLinkedList.head.next!);
    listArray = circularLinkedList.returnArray();
    expect(listArray).toEqual([2,3])
  })
});

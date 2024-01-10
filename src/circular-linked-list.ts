import { LinkedList, Node } from "./linked-list";

export class CircularLinkedList<T> extends LinkedList<T> {
  constructor(firstData: T) {
    super(firstData);
    this.head.next = this.head;
  }

  insertFirst(data: T) {
    this.head.next = new Node<T>(data, this.head.next);
  }

  insertLast(data: T) {
    const newNode = new Node(data, this.head.next);
    this.head.next = newNode
    this.head = newNode;
  }

  deleteFirst() {
    if (this.head === this.head.next || !this.head.next?.next) {
      throw new Error('incorrect');
    }
    this.head.next = this.head.next.next;
  }

  returnArray() {
    const header = this.head;
    let current = this.head.next;
    const listArray: T[] = [];
    while(true) {
      if (!current?.next) {
        throw new Error('incorrect');
      }
      listArray.push(current.data);
      if (header === current) {
        break;
      }
      current = current.next;
    }
    return listArray;
  }
}
class Node<T> {
  constructor(
    public data: T,
    public next: Node<T> | null = null,
  ) {}
}

export class LinkedList<T> {
  constructor(
    firstData: T,
  ) {
    this.head = new Node<T>(firstData);
  }

  public head: Node<T>;

  insertFist(data: T) {
    this.head = new Node<T>(data, this.head);
  }

  insertLast(data: T) {
    let current: Node<T> = this.head;
    while(current.next) {
      current = current.next;
    }
    current.next = new Node<T>(data);
  }

  insert(data: T, previous: Node<T>) { 
    const newNode = new Node<T>(data, previous.next);
    previous.next = newNode;
  }

  deleteFirst() {
    if (!this.head.next) {
      throw new Error('incorrect');
    }
    this.head = this.head.next;
  }

  delete(pre: Node<T>) {
    const current = pre.next;
    pre.next = current?.next || null;
  }

  returnArray() {
    let current = this.head;
    const listArray: T[] = [];
    while (true) {
      listArray.push(current.data);
      if (!current.next) {
        break
      }
      current = current.next;
    }
    return listArray;
  }
}

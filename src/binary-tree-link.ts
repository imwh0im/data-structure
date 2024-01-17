import { CircularQueue } from "./circular-queue";

class Node<T> {
  constructor(
    public data: T,
    public left: null | Node<T> = null,
    public right: null | Node<T> = null,
  ) {}
}

export class BinaryTreeLink<T> {
  constructor(
    rootData: T,
  ) {
    this.root = new Node<T>(rootData);
    this.current = this.root;
  }

  public root: Node<T>;

  public current: Node<T>;

  moveLeft() {
    if (this.current.left === null) {
      return null;
    }
    this.current = this.current.left;
    return this.current;
  }
  
  moveRight() {
    if (this.current.right === null) {
      return null;
    }
    this.current = this.current.right;
    return this.current;
  }

  moveRoot() {
    this.current = this.root;
  }

  insert(data: T, pos: 'l' | 'r') {
    const newNode = new Node(data);
    switch(pos) {
      case 'l':
        this.current.left = newNode;
      case 'r':
        this.current.right = newNode;
    }
  }

  preorderTraversal(node: Node<T> | null) {
    if (node !== null) {
      console.log(node.data)
      this.preorderTraversal(node.left)
      this.preorderTraversal(node.right);
    }
  }

  inorderTraversal(node: Node<T> | null) {
    if (node !== null) {
      this.inorderTraversal(node.left);
      console.log(node.data);
      this.inorderTraversal(node.right);
    }
  }

  postorderTraversal(node: Node<T> | null) {
    if (node !== null) {
      this.inorderTraversal(node.left);
      this.inorderTraversal(node.right);
      console.log(node.data);
    }
  }

  levelorder() {
    const queue = new CircularQueue<Node<T>>(100);
    queue.enqueue(this.root);
    const returnArray: T[] = [];
    while(!queue.isEmpty()) {
      const current = queue.dequeue();
      returnArray.push(current.data);
      if (current.left) {
        queue.enqueue(current.left);
      }
      if (current.right) {
        queue.enqueue(current.right);
      }
    }
    return returnArray;
  }
}
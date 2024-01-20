class Node {
  constructor(
    public key: number,
    public left: Node | null = null,
    public right: Node | null = null,
  ) {}
}

export class BinarySearchTreeLink {
  constructor(
    key: Node['key'],
  ) {
    this.Root = new Node(key);
  }
  public Root: Node;
  private insertNode?: Node;

  search(key: Node['key'], node?: Node): Node | null {
    node = node || this.Root;
    if (node.key === key) {
      return node;
    }
    
    if (node.key > key && node.left) {
      return this.search(key, node.left);
    }

    if (node.key < key && node.right) {
      return this.search(key, node.right);
    }

    this.insertNode = node;
    return null
  }

  insert(key: Node['key']) {
    const searched = this.search(key);
    if (searched) {
      return;
    }

    if (!this.insertNode) {
      throw new Error('cannot insert node');
    }

    if (this.insertNode.key > key) {
      this.insertNode.left = new Node(key);
    }

    if (this.insertNode.key < key) {
      this.insertNode.right = new Node(key);
    }
  }

  delete(key: Node['key'], node?: Node): Node | null {
    node = node || this.Root; 
    // search
    if (node.key > key && node.left) {
      node.left = this.delete(key, node.left);
    } 
    else if (node.key < key && node.right) {
      node.right = this.delete(key, node.right);
    }
    // delete
    else {
      if (!node.left) {
        return node.right;
      }
      if (!node.right) {
        return node.left;
      }

      const temp = this.minValueNode(node.left);
      node.key = temp.key;
      node.left = this.delete(temp.key, node.left);
    }

    return node;
  }

  minValueNode(node: Node) {
    let current = node;
    while (true) {
      if (!node.right) {
        break;
      }
      current = node.right;
    }
    return current;
  }
}
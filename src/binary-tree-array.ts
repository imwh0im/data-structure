export class BinaryTreeArray<T> {

  public Tree: T[] = [];

  public Current: number = 1;

  insert(data: T) {
    if (this.Tree.length === 0) {
      this.Tree[1] = data
    } else {
      this.Tree[this.Tree.length] = data;
    }
  }

  move(pos: 'l' | 'r' | 'u') {
    let currentIndex = this.Current;
    switch(pos) {
      case 'l':
        currentIndex *= 2;
        break;
      case 'r':
        currentIndex = currentIndex * 2 + 1;
        break;
      case 'u':
        currentIndex  = Math.floor(currentIndex / 2);
        break;
    }
    if (!this.Tree[currentIndex]) {
      return null;
    }
    this.Current = currentIndex;
    return this.Tree[this.Current];
  }
}
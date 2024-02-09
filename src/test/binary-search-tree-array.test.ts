import { BinarySearchTreeArray } from "../binary-search-tree-array"

describe('binary search tree', () => {
  it('case 1', () => {
    const bst = new BinarySearchTreeArray();
    bst.insert(1);
    bst.insert(10);
    bst.insert(15);
    bst.insert(8);
    bst.insert(20);

    let result = bst.search(10);
    expect(result).toEqual(3);

    bst.delete(1);

    result = bst.search(8);
    expect(result).toEqual(1);

    result = bst.search(20)
    expect(result).toEqual(15)
  
    bst.delete(15);
    result = bst.search(20);
    expect(result).toEqual(7);
  })
})
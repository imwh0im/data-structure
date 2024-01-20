import { BinarySearchTreeLink } from "../binary-search-tree-link"

describe('binary search tree link', () => {
  it('case 1', () => {
    const bst = new BinarySearchTreeLink(10);
    bst.insert(20)
    bst.insert(5)
    bst.insert(3);
    bst.insert(45)
    bst.insert(33);
    bst.insert(11);
    bst.insert(12);
    bst.insert(13);
    bst.insert(16);
    bst.insert(14);
    bst.insert(17);

    let result = bst.search(33);
    expect(result?.key).toEqual(33)
    expect(result?.left).toEqual(null);

    bst.delete(45);
    result = bst.search(45);
    expect(result).toEqual(null);

    result = bst.search(16);
    expect(result?.key).toEqual(16);
    expect(result?.left?.key).toEqual(14)
    expect(result?.right?.key).toEqual(17);

    bst.delete(16);
    result = bst.search(14);
    expect(result?.right?.key).toEqual(17);
  })
})
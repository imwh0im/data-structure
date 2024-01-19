import { BinaryTreeArray } from "./binary-tree-array"

describe('binary tree array', () => {
  it('case 1', () => {
    const bt = new BinaryTreeArray<number>();

    bt.insert(10);
    bt.insert(20);
    bt.insert(30);
    bt.insert(40);

    bt.move('l');
    let result = bt.move('l');
    expect(result).toEqual(40);

    result = bt.move('u');
    expect(result).toEqual(20);

    result = bt.move('r');
    expect(result).toEqual(null);
  })
})
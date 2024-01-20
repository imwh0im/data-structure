import { BinaryTreeLink } from "../binary-tree-link";

describe('binary tree', () => {
  it('case 1', () => {
    const bt = new BinaryTreeLink(10);

    expect(bt.current.data).toEqual(10);
    bt.insert(20, 'l');
    bt.insert(30, 'r');

    expect(bt.current.left?.data).toEqual(20);
    expect(bt.current.right?.data).toEqual(30);

    bt.moveLeft();
    expect(bt.current.data).toEqual(20);

    bt.moveRoot();
    expect(bt.current.data).toEqual(10);

    // 10, 20, 30
    bt.preorderTraversal(bt.root);

    // 20, 10, 30
    bt.inorderTraversal(bt.root);

    // 20, 30, 10
    bt.postorderTraversal(bt.root)

    const levelorder = bt.levelorder();
    expect(levelorder).toEqual([10, 20, 30])
  });
})
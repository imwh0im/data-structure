import { Stack } from "../stack";

describe('Stack Test', () => {
  describe('maxSize Test', () => {
    describe('0', () => {
      const stack = new Stack<number>(0);

      it('isFull', () => {
        expect(stack.isFull()).toBe(true);
      })

      it('isEmpty', () => {
        expect(stack.isEmpty()).toBe(true);
      });

      it('push', () => {
        expect(() => stack.push(1)).toThrow('stack full');
      });

      it('pop', () => {
        expect(() => stack.pop()).toThrow('stack empty');
      });

      it('peek', () => {
        expect(() => stack.pop()).toThrow('stack empty');
      })
    })
  })

  it('Case 1', () => {
    const stack = new Stack<number>(10);

    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);
    expect(stack.pop()).toEqual(4);
    expect(stack.pop()).toEqual(3);
    expect(stack.pop()).toEqual(2);
    stack.push(5);
    expect(stack.pop()).toEqual(5);
  });
});

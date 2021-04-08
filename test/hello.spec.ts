import { Hello } from '../src/hello';

describe('Hello', () => {
  let hello: Hello;

  beforeEach(() => {
    hello = new Hello();
  });

  it('should render message', () => {
    hello.render();
    const element = document.getElementById('hello');
    expect(element.innerText).toBe('Hello');
  });

  it('should render message with red colour', () => {
    hello.render();
    const element = document.getElementById('hello');
    const style = window.getComputedStyle(element, null);
    expect(style.getPropertyValue('color')).toBe('rgb(255, 0, 0)');
  });

  afterEach(() => {
    hello.dispose();
  });
});

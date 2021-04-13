import { expect } from 'chai';

describe('Hello', () => {
  const hello = window.mediator.hello;

  it('should render message', () => {
    hello.render();
    const element = document.getElementById('hello');
    expect(element.innerText).to.equal('Hello');
  });

  it('should render message with red colour', () => {
    hello.render();
    const element = document.getElementById('hello');
    const style = window.getComputedStyle(element, null);
    expect(style.getPropertyValue('color')).to.equal('rgb(255, 0, 0)');
  });

  afterEach(() => {
    hello.dispose();
  });
});

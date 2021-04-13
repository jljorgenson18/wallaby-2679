import { expect } from 'chai';

describe('Bye', async () => {
  const bye = window.mediator.bye;

  it('should render message', () => {
    bye.render();
    const element = document.getElementById('bye');
    expect(element.innerText).to.equal('Bye');
  });

  it('should render message with blue colour', () => {
    bye.render();
    const element = document.getElementById('bye');
    const style = window.getComputedStyle(element, null);
    expect(style.getPropertyValue('color')).to.equal('rgb(0, 0, 255)');
  });

  afterEach(() => {
    bye.dispose();
  });
});

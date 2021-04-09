//import { Bye } from '../src/bye';

describe('Bye', async () => {
  
  const { Bye } = await import('../src/bye');

  let bye;

  beforeEach(() => {
    bye = new Bye();
  });

  it('should render message', () => {
    bye.render();
    const element = document.getElementById('bye');
    expect(element.innerText).toBe('Bye');
  });

  it('should render message with blue colour', () => {
    bye.render();
    const element = document.getElementById('bye');
    const style = window.getComputedStyle(element, null);
    expect(style.getPropertyValue('color')).toBe('rgb(0, 0, 255)');
  });

  afterEach(() => {
    bye.dispose();
  });
});

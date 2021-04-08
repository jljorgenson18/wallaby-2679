//import './hello.less';
import './hello.scss';

export class Hello {
  private _element;

  render() {
    const element = document.createElement('span');
    element.setAttribute('id', 'hello');
    element.classList.add('hello');
    element.innerText = 'Hello';
    document.body.appendChild(element);
    this._element = element;
  }

  dispose() {
    this._element.remove();
    this._element = undefined;
  }
}

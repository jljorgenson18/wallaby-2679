//import css from './bye.less?module';
import css from './bye.scss?module';

export class Bye {
  private _element;

  render() {
    const element = document.createElement('span');
    element.setAttribute('id', 'bye');
    element.classList.add(css.bye);
    element.innerText = 'Bye';
    document.body.appendChild(element);
    this._element = element;
  }

  dispose() {
    this._element.remove();
    this._element = undefined;
  }
}

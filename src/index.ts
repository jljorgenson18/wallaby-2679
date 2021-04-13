import './global.scss';
import type { Bye } from './bye';
import type { Hello } from './hello';

class SomeMediator {
  public bye: Bye = null;
  public hello: Hello = null;
  public activated: boolean = false;
  activate() {
    return Promise.all([import('./bye'), import('./hello')]).then(
      ([bye, hello]) => {
        this.bye = new bye.Bye();
        this.hello = new hello.Hello();
        this.activated = true;
      }
    );
  }
}

declare global {
  interface Window {
    mediator: SomeMediator;
  }
}

window.mediator = new SomeMediator();
window.mediator.activate();

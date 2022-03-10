import {
  attr,
  css,
  customElement,
  FASTElement,
  html,
} from '@microsoft/fast-element';

const template = html`
  <h2>${x => x.title} Num ${x => x.counter}!</h2>
`;

const styles = css`
  :host {
    display: block;
    padding: 25px;
    color: var(--f-rui-text-color, #000);
  }
`;

@customElement({
  name: 'f-rui',
  template,
  styles,
})
export class FRui extends FASTElement {
  @attr title = 'Hey there';

  @attr counter = 5;

  increment() {
    this.counter += 1;
  }
}

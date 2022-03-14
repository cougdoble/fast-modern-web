import {
  customElement,
  FASTElement,
  html,
  observable,
} from '@microsoft/fast-element';

const template = html<CounterThing>`
  <button @click=${x => x.incrementMe()}>Click Me</button>
  <button @click=${x => x.clearMe()}>Clear Me</button>
  <div>${x => x.incValue}</div>
`;

@customElement({ name: 'counter-thing', template })
export class CounterThing extends FASTElement {
  @observable incValue = 0;

  incrementMe(): void {
    this.incValue++;
  }

  clearMe(): void {
    this.incValue = 0;
    this.$emit('cleared');
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'counter-thing': CounterThing;
  }
}

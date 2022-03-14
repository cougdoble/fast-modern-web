import { fixture, expect, html } from '@open-wc/testing';
import { CounterThing } from '../src/counter-thing/counter-thing';
import '../src/counter-thing/counter-thing';

describe('Counter thing', () => {
  let el: CounterThing;

  beforeEach(async () => {
    el = await fixture<CounterThing>(html`<counter-thing></counter-thing>`);
  });

  it('has two buttons and an initial value of 1', async () => {
    const buttonCount = el.shadowRoot?.querySelectorAll('button').length;
    console.log(el.shadowRoot?.innerHTML);

    expect(buttonCount).to.equal(2);
    expect(el.incValue).to.equal(0);
  });

  it('increases the counter on button click', async () => {
    el.shadowRoot!.querySelector('button')!.click();

    expect(el.incValue).to.equal(1);
  });

  it('passes the a11y audit', async () => {
    expect(el).shadowDom.to.be.accessible();
  });
});

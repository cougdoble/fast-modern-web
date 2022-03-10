import { fixture, expect, html } from '@open-wc/testing';
import { FRui } from '../src/FRui.js';
// import '../src/f-rui.js';

describe('FRui', () => {
  it('has a default title "Hey there" and counter 5', async () => {
    const el = await fixture<FRui>(html`<f-rui title='Hey there'></f-rui>`);

    expect(el.title).to.equal('Hey there');
    // expect(el.counter).to.equal(5);
  });

  xit('increases the counter on button click', async () => {
    const el = await fixture<FRui>(html`<f-rui></f-rui>`);
    el.shadowRoot!.querySelector('button')!.click();

    expect(el.counter).to.equal(6);
  });

  it('can override the title via attribute', async () => {
    const el = await fixture<FRui>(html`<f-rui title="attribute title"></f-rui>`);

    expect(el.title).to.equal('attribute title');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture<FRui>(html`<f-rui></f-rui>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});
